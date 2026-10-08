# Mini Rift: iOS and Android app

The store app for **Mini Rift**, the 3v3 storybook battle game from Starfall Grove. It is a thin Expo app: one
full-screen, landscape web view of the web game at <https://metur100.github.io/Starfall.Grove.Moba.UI/>, plus what a
store app needs around it. The game itself lives in `Starfall.Grove.Moba.UI` (web) and `Starfall.Grove.Moba.API`
(server), so game updates reach the app without a new build.

| | |
| --- | --- |
| Name | Mini Rift |
| Bundle ID / package | `com.certidevelopment.minirift` |
| Expo project | `@certi-development/starfall-mini-rift` (`1ba06842-d027-4e5d-aee3-b557aabcffce`) |
| Orientation | landscape, full screen, iPad supported |

## What the app adds to the web game

- **Landscape, full screen**, no status bar, the game's own dark background (no white flash), the screen kept awake.
- **Staying signed in**: the game's local settings, above all the sign-in, are copied into the app's own storage, and
  put back if iOS or Android clears the web view's storage.
- **Haptics**: the page calls `window.MiniRiftApp.haptic(kind)` (`light`, `medium`, `heavy`, `success`, `error`) on
  kills, level-ups and found matches; `window.MiniRiftApp.platform` tells it which OS it runs on. Settings → Vibration
  in the game turns it off.
- **Only the game opens inside**: any other link (help, privacy) opens in the browser.
- **Android back button** does nothing, so nobody leaves a match by accident (the game has its own Leave buttons).
- **Offline screen** with "Try again" when there is no connection; a reload if the OS closes the page for memory.

## Run it

```bash
npm install
npx expo start          # then scan the QR code with a development build, or press a / i for an emulator
npx tsc --noEmit        # typecheck
npx expo-doctor         # check dependencies and config
```

## Build and submit (EAS)

```bash
npx eas-cli@latest login
npx eas-cli@latest build -p ios --profile production       # asks for your Apple login the first time, makes the certificate and profile
npx eas-cli@latest submit -p ios --latest                   # uploads to App Store Connect / TestFlight
npx eas-cli@latest build -p android --profile production   # .aab for Google Play
npx eas-cli@latest submit -p android --latest               # first upload: do it by hand in the Play Console (see store/GOOGLE_PLAY.md)
npx eas-cli@latest build -p android --profile preview      # an .apk to install on a phone directly
```

Version numbers: `version` in `app.json` is the version shown in the stores (`1.0.0`); build numbers are counted up by
EAS (`appVersionSource: remote`, `autoIncrement`).

## Store listings

Everything to fill in, with the texts ready to paste:

- [store/APP_STORE_CONNECT.md](store/APP_STORE_CONNECT.md): App Store Connect (app information, privacy answers,
  age rating, description, keywords, review notes with a review account).
- [store/GOOGLE_PLAY.md](store/GOOGLE_PLAY.md): Google Play Console (listing, content rating, data safety, app
  access, release steps).

Images:

| Folder | What | Size |
| --- | --- | --- |
| `store/screenshots/iphone-6.9/` | App Store, iPhone 6.9" | 2868 × 1320 |
| `store/screenshots/iphone-6.3/` | App Store, iPhone 6.3" | 2622 × 1206 |
| `store/screenshots/ipad-13/` | App Store, iPad 13" | 2752 × 2064 |
| `store/app-store-icon-1024.png` | App Store icon (no transparency) | 1024 × 1024 |
| `store/google-play/phone/` | Play, phone | 1920 × 1080 |
| `store/google-play/tablet-7/` | Play, 7" tablet | 1920 × 1200 |
| `store/google-play/tablet-10/` | Play, 10" tablet | 2560 × 1600 |
| `store/google-play/icon-512.png` | Play icon | 512 × 512 |
| `store/google-play/feature-graphic-1024x500.png` | Play feature graphic | 1024 × 500 |

Every set has eight screenshots, in upload order: battle, duel, skins, hero select, play, victory, friends, profile.
They are real captures of the game at those sizes.

Once the apps are live, put their links into `miniriftAppStoreUrl` and `miniriftPlayStoreUrl` in
`Starfall.Grove.Landing/site.json`, so the store badges on <https://starfallgrove.eu/minirift/> go live.
