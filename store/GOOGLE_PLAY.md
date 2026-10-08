# Google Play Console: what to fill in

Everything the Google Play listing for **Mini Rift** asks for. The Android build comes from the same Expo project as the
iOS app (`npx eas-cli@latest build -p android --profile production` makes the `.aab`).

## 1. Create app (All apps → Create app)

| Field | Value |
| --- | --- |
| App name (30) | `Mini Rift: Storybook Battles` (or just `Mini Rift`) |
| Default language | English (United States) – en-US |
| App or game | **Game** |
| Free or paid | **Free** |
| Declarations | Tick the Developer Program Policies and the US export laws boxes |

Package name: `com.certidevelopment.minirift` (comes with the first uploaded `.aab`; it can never change).

## 2. Store listing (Grow → Store presence → Main store listing)

**Short description** (80):

```
3v3 storybook battles and duels. Matchmaking, friends, chat, 18 skins and ranks.
```

**Full description** (4000):

```
Mini Rift is a fast online battle game drawn like a pop-up paper storybook, with the heroes of Starfall Grove.

THREE WAYS TO FIGHT
★ Battle: 1v1 to 3v3 on five battlefields with one, two or three lanes. Push with your minion waves, break two towers, then the enemy Core.
★ Duel: heroes only, in a ring of standing stones. First to win three rounds wins. Grab the Starshard in the middle for a burst of power.
★ Custom rooms: share a five-letter code or an invite link and play with your friends, with bots in any empty seat.

REAL MATCHMAKING
• Tap Find match and get matched with players near your rank.
• Accept the match and go straight to hero select.
• Nobody around? After 30 seconds you choose: fight bots right away or keep searching.
• Practice: tap vs Bots to start a match against bots at once.

SIX HEROES, EIGHTEEN SKINS
• Mira the Astralmancer, Kael the Knight, Lyra the Frostweaver, Riven the Assassin, Wren the Ranger and Elara the Bloomwarden.
• Every hero has a basic attack and four spells: learn one per level and upgrade them along two paths.
• Rare, epic and legendary skins. Legendary skins glow with an aura and leave a trail of stars, snow, leaves or embers.
• Bring a charm into every match: Flash, Heal, Ghost or Barrier.

PLAY, EARN, UNLOCK
• Coins from every match: more for a win, and a bonus for your first win of the day.
• Unlock heroes and skins with coins. One hero is free to play every week.
• Level up your player profile and climb six ranks, from Seedling to Celestial, in battles and in duels.
• Three daily quests that pay coins.
• A ladder of the best players.

FRIENDS AND CHAT
• Add friends by username, see who is online and what they're playing.
• Private messages, room chat, and team chat in matches with quick messages.
• Ping the map for your team: attack, fall back, on my way, need help.
• Invite friends straight into your custom room.
• Block or report anyone, any time.

MADE FOR TOUCH
• Thumbstick, an attack button and spell buttons sized for phones and tablets: tap to auto-aim, drag to aim yourself.
• Vibration on kills, level-ups and found matches.
• Landscape, full screen, with the screen kept on while you play.

FAIR AND FREE
• No purchases with real money and no ads. Everything is earned by playing.
• One account for every device: log in with your username and password anywhere. Delete it any time from your profile.
```

**Graphics** (upload from `store/google-play/`):

| Asset | File | Size |
| --- | --- | --- |
| App icon | `icon-512.png` | 512 × 512 PNG |
| Feature graphic | `feature-graphic-1024x500.png` | 1024 × 500 PNG |
| Phone screenshots (2–8) | `phone/01…08` | 1920 × 1080 (landscape) |
| 7-inch tablet screenshots | `tablet-7/01…08` | 1920 × 1200 (landscape) |
| 10-inch tablet screenshots | `tablet-10/01…08` | 2560 × 1600 (landscape) |
| Video | none | |

Upload them in file-name order: battle, duel, skins, hero select, play, victory, friends, profile. Google shows tablet
screenshots on tablets and uses them to decide whether the app is "designed for tablets", so add both tablet sets.

## 3. Store settings (Grow → Store presence → Store settings)

| Field | Value |
| --- | --- |
| App category | **Game → Action** (Strategy also fits; Action reaches more players) |
| Tags | Action, Arena battle (MOBA), Multiplayer, PvP, Casual, Fantasy (pick up to 5 from Google's list) |
| Email | `certidevelopment@gmail.com` |
| Website | `https://starfallgrove.eu/minirift/` |
| Phone | optional |
| External marketing | allowed |

## 4. App content (Policy → App content)

### Privacy policy
`https://starfallgrove.eu/privacy/`

### Ads
**No, my app does not contain ads.**

### App access
**All or some functionality is restricted** → **Add instructions**:

| Field | Value |
| --- | --- |
| Name | `Review account` |
| Username | `AppReview` |
| Password | `Review-88e56f78b0` |
| Any other information | `Log in on the first screen. On the Play tab, vs Bots starts a match against bots at once; Find match looks for other players and offers bots after 30 seconds if nobody is searching.` |

### Content rating (IARC questionnaire)
Category: **Game**. Email: `certidevelopment@gmail.com`.

| Question | Answer |
| --- | --- |
| Violence | **Yes**: fantasy/cartoon characters, not realistic; no blood or gore; violence against humanlike characters is stylised paper puppets, nothing graphic |
| Fear / horror | No |
| Sexuality, nudity | No |
| Language (profanity) | No |
| Controlled substances (drugs, alcohol, tobacco) | No |
| Crude humour | No |
| Gambling / simulated gambling | No |
| Does the app let users interact or exchange information? | **Yes**: chat in rooms and matches, private messages between friends, friend lists. Chat is filtered, and players can block and report each other. |
| Does the app share the user's physical location? | No |
| Does the app allow users to purchase digital goods? | **No** (coins can only be earned by playing) |
| Does the app contain loot boxes / random items? | No |
| Unrestricted internet access (web browser)? | No |

Expected rating: **PEGI 7 / USK 6 / ESRB Everyone 10+**, with the notice "Users Interact" (chat).

### Target audience and content
- Target age groups: **13–15, 16–17, 18 and over**. (An app with open chat between players should stay out of the
  under-13 groups and the Families policy.)
- "Could your store listing unintentionally appeal to children?" **No** (a competitive online PvP game with chat).

### News app
No.

### Data safety

Overview:

| Question | Answer |
| --- | --- |
| Does your app collect or share any of the required user data types? | **Yes** |
| Is all of the user data collected by your app encrypted in transit? | **Yes** (HTTPS and secure WebSockets) |
| Which methods of account creation does your app support? | **Username and password** (with an email for password resets); no third-party sign-in |
| Account deletion URL | `https://starfallgrove.eu/support/` (section *Mini Rift → How do I delete my Mini Rift profile?*) |
| Can users request that some data is deleted without deleting the account? | No (deleting the profile deletes everything) |

Data types (all **Collected**, **not Shared**, collection **required**, purpose **App functionality** and **Account management**):

| Category | Data type | What it is | Ephemeral? |
| --- | --- | --- | --- |
| Personal info | **Email address** | For password reset links | No |
| Personal info | **User IDs** | The username and the account id | No |
| Messages | **Other in-app messages** | Chat and private messages; passed on, not stored, except messages someone reports | No (reported ones are kept) |
| App activity | **Other user-generated content** | The friend list | No |
| App activity | **Other actions** | Game progress and match results: coins, levels, owned heroes and skins, ratings, statistics, recent matches | No |

Not collected: location, financial info, health, messages, photos/videos, audio, files, calendar, contacts, web
browsing, app info and performance (no crash or diagnostics SDK), device or other IDs (no advertising ID: the app
doesn't use it). The IP address is used only to keep the connection during a match and isn't stored, which Google's
form counts as ephemeral processing.

### Government apps, financial features, health
None.

### Advertising ID
The app does **not** use the advertising ID. (Expo doesn't add the `AD_ID` permission unless a library needs it.)

## 5. Release

1. **Testing → Internal testing** first: create a release, upload the `.aab` (or use `npx eas-cli@latest submit -p android --latest`; `eas.json` sends it to the internal track as a draft), add yourself as a tester and try it on a phone.
2. A new personal developer account must run a **closed test with at least 12 testers for 14 days** before it can publish to production. If your Play account is an organisation account or older than November 2023, this doesn't apply.
3. **Production → Create new release**, add the same build, release notes:

```
Welcome to Mini Rift! 3v3 storybook battles and duels with the heroes of Starfall Grove, real matchmaking, custom rooms, 6 heroes, 18 skins and ranks.
```

4. Countries: all. Then **Send for review** (a few hours to a few days).

Once it is live, put the Play link in `miniriftPlayStoreUrl` in `Starfall.Grove.Landing/site.json` so the website's
Google Play badges on the Mini Rift page go live.
