import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, BackHandler, Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Haptics from 'expo-haptics';
import { useKeepAwake } from 'expo-keep-awake';
import { File, Paths } from 'expo-file-system';
import { WebView, type WebViewMessageEvent } from 'react-native-webview';

const GAME_URL = 'https://metur100.github.io/Starfall.Grove.Moba.UI/';
const GAME_HOST = 'metur100.github.io';
const GAME_PATH = '/Starfall.Grove.Moba.UI/';
const BACKGROUND = '#1D1520'; // the game's own background: no white flash

SplashScreen.preventAutoHideAsync().catch(() => {});

// A copy of the game's local settings outside the web view, above all the sign-in ("minirift-token") that keeps this
// phone logged in to the player's account. The OS may clear a web view's storage when the phone runs low on space; the
// copy puts it back the next time the game opens, so the player doesn't have to log in again.
const keepFile = () => new File(Paths.document, 'minirift.json');

function readKept(): string {
  try {
    const f = keepFile();
    if (!f.exists) return 'null';
    const text = f.textSync();
    JSON.parse(text); // only hand the page valid JSON
    return text;
  } catch {
    return 'null';
  }
}

/** Runs before the game's own code on every page load. */
const bridgeScript = (kept: string, platform: string) => `(function () {
  var P = 'minirift-';
  function keys() { var r = []; for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf(P) === 0) r.push(k); } return r; }
  try {
    var saved = ${kept};
    if (saved && typeof saved === 'object' && !localStorage.getItem('minirift-token')) for (var k in saved) localStorage.setItem(k, saved[k]);
  } catch (e) {}
  function post(m) { try { window.ReactNativeWebView.postMessage(JSON.stringify(m)); } catch (e) {} }
  var last = '';
  function snapshot() {
    try {
      var d = {}, ks = keys();
      for (var i = 0; i < ks.length; i++) d[ks[i]] = localStorage.getItem(ks[i]);
      var s = JSON.stringify(d);
      if (s !== last) { last = s; post({ type: 'keep', data: s }); }
    } catch (e) {}
  }
  window.__miniriftSnapshot = snapshot;
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') snapshot(); });
  window.addEventListener('pagehide', snapshot);
  setTimeout(snapshot, 3000);
  setInterval(snapshot, 15000);
  // The game calls this for kills, level-ups and found matches (Settings > Vibration turns it off).
  window.MiniRiftApp = { platform: '${platform}', haptic: function (kind) { post({ type: 'haptic', kind: String(kind) }); } };
})(); true;`;

function haptic(kind: string) {
  const run = kind === 'success' ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    : kind === 'error' ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
    : Haptics.impactAsync(kind === 'heavy' ? Haptics.ImpactFeedbackStyle.Heavy : kind === 'medium' ? Haptics.ImpactFeedbackStyle.Medium : Haptics.ImpactFeedbackStyle.Light);
  run.catch(() => {});
}

export default function App() {
  useKeepAwake();
  const web = useRef<WebView>(null);
  const [script] = useState(() => bridgeScript(readKept(), Platform.OS));
  const [failed, setFailed] = useState(false);
  const shown = useRef(false);

  const showGame = useCallback(() => {
    if (shown.current) return;
    shown.current = true;
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  // The splash never stays up longer than a few seconds, even on a slow connection: the game has its own screens.
  useEffect(() => {
    const t = setTimeout(showGame, 6000);
    return () => clearTimeout(t);
  }, [showGame]);

  // Going to the background: take a last copy while the page can still run.
  useEffect(() => {
    const sub = AppState.addEventListener('change', s => {
      if (s !== 'active') web.current?.injectJavaScript('window.__miniriftSnapshot && window.__miniriftSnapshot(); true;');
    });
    return () => sub.remove();
  }, []);

  // Android's back button: never leave the game by accident mid-match. The game has its own Leave buttons.
  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => sub.remove();
  }, []);

  const onMessage = useCallback((e: WebViewMessageEvent) => {
    let m: { type?: string; data?: string; kind?: string };
    try { m = JSON.parse(e.nativeEvent.data); } catch { return; }
    if (m.type === 'keep' && typeof m.data === 'string') {
      try { const f = keepFile(); if (!f.exists) f.create(); f.write(m.data); } catch { /* the web view keeps its own copy */ }
    } else if (m.type === 'haptic' && m.kind) haptic(m.kind);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar hidden />
      {failed ? (
        <View style={styles.offline}>
          <Text style={styles.title}>Mini Rift</Text>
          <Text style={styles.text}>Mini Rift is played online with other players.{'\n'}Check your connection and try again.</Text>
          <Pressable style={styles.button} onPress={() => { setFailed(false); }}>
            <Text style={styles.buttonText}>Try again</Text>
          </Pressable>
        </View>
      ) : (
        <WebView
          ref={web}
          source={{ uri: GAME_URL }}
          style={styles.web}
          containerStyle={styles.web}
          injectedJavaScriptBeforeContentLoaded={script}
          onMessage={onMessage}
          onLoadEnd={showGame}
          onError={() => { showGame(); setFailed(true); }}
          // A phone low on memory may close the game's page: start it again instead of showing a blank screen.
          onContentProcessDidTerminate={() => web.current?.reload()}
          onRenderProcessGone={() => web.current?.reload()}
          onShouldStartLoadWithRequest={req => {
            if (!req.isTopFrame || req.url.startsWith('about:') || req.url.startsWith('blob:')) return true;
            try { const u = new URL(req.url); if (u.host === GAME_HOST && u.pathname.startsWith(GAME_PATH)) return true; } catch { /* not a web address */ }
            Linking.openURL(req.url).catch(() => {});
            return false;
          }}
          javaScriptEnabled
          domStorageEnabled
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          allowsBackForwardNavigationGestures={false}
          allowsLinkPreview={false}
          textInteractionEnabled={false}
          dataDetectorTypes="none"
          bounces={false}
          scrollEnabled={false}
          overScrollMode="never"
          contentInsetAdjustmentBehavior="never"
          automaticallyAdjustContentInsets={false}
          setSupportMultipleWindows={false}
          setBuiltInZoomControls={false}
          webviewDebuggingEnabled={__DEV__}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: BACKGROUND },
  web: { flex: 1, backgroundColor: BACKGROUND },
  offline: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 16 },
  title: { color: '#F2C96A', fontSize: 30, fontWeight: '700' },
  text: { color: '#FFF4DE', fontSize: 16, textAlign: 'center', lineHeight: 24 },
  button: { backgroundColor: '#F2C96A', paddingHorizontal: 28, paddingVertical: 12, borderRadius: 24 },
  buttonText: { color: '#1D1520', fontSize: 16, fontWeight: '700' },
});
