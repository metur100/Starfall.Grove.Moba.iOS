# App Store Connect: what to fill in

Everything the App Store listing for **Mini Rift** asks for, in the order App Store Connect asks for it. Copy each value as it is.

## 0. Before you start

- Bundle ID `com.certidevelopment.minirift`. Either let EAS register it (the first `eas build -p ios` asks you to log in to Apple and creates the Bundle ID, certificate and provisioning profile), or add it by hand under developer.apple.com → Certificates, Identifiers & Profiles → Identifiers → App IDs, with no extra capabilities.
- The website must be live with the updated privacy policy (it now covers Mini Rift's online profile), and the support page with the **Mini Rift** section.

## 1. New app (My Apps → + → New App)

| Field | Value |
| --- | --- |
| Platforms | iOS |
| Name (30) | `Mini Rift` (if taken: `Mini Rift: Storybook Battles`) |
| Primary language | English (U.S.) |
| Bundle ID | `com.certidevelopment.minirift` |
| SKU | `mini-rift-ios` |
| User access | Full access |

## 2. App Information

| Field | Value |
| --- | --- |
| Subtitle (30) | `3v3 storybook battles` |
| Category | **Games**, subcategories **Action** and **Strategy** |
| Secondary category | none |
| Content rights | "Does your app contain, show, or access third-party content?" **No** |
| Age rating | see section 5 |
| License agreement | Apple's standard EULA |

## 3. Pricing and Availability

- Price: **Free** (USD 0.00). No in-app purchases.
- Availability: all countries and regions.
- **Digital Services Act (EU):** you are asked whether you are a *trader*. A free app with no ads, purchases or other income is usually published as a **non-trader**. If you earn money from it, you must declare trader status, and Apple then shows your address, phone and email on the EU store page. This one is your decision.

## 4. App Privacy

- Privacy Policy URL: `https://starfallgrove.eu/privacy/`
- Data collection: **"Yes, we collect data from this app."** Mini Rift has accounts, a game profile, friends and chat. Add exactly these data types:

| Data type (Apple's name) | What it is in Mini Rift | Purpose | Linked to the user? | Used for tracking? |
| --- | --- | --- | --- | --- |
| **Contact Info → Email Address** | The account's email, used for password reset links | App Functionality | **Yes** | **No** |
| **Identifiers → User ID** | The username, and the account id behind it | App Functionality | **Yes** | **No** |
| **User Content → Gameplay Content** | Coins, levels, owned heroes and skins, ratings, match results and statistics | App Functionality | **Yes** | **No** |
| **User Content → Other User Content** | Chat messages (passed on to the other players, not stored, except a message someone reports) and the friend list | App Functionality | **Yes** | **No** |

Everything else: **not collected** (no name, no phone, no address, no location, no contacts, no photos, no purchases, no usage analytics, no diagnostics, no advertising data). Passwords are only stored as salted hashes and aren't a data type in Apple's list. The IP address is only used to keep the connection during a match and is not stored, so Apple doesn't count it as collected.

Result on the App Store page: **Data Linked to You: Contact Info, Identifiers, User Content** · **Data Used to Track You: none**.

## 5. Age Rating questionnaire

| Question | Answer |
| --- | --- |
| Cartoon or Fantasy Violence | **Frequent** (paper-puppet heroes battle with spells and swords; no blood) |
| Realistic Violence | None |
| Prolonged Graphic or Sadistic Realistic Violence | None |
| Profanity or Crude Humor | None |
| Mature/Suggestive Themes | None |
| Horror/Fear Themes | None |
| Medical/Treatment Information | None |
| Alcohol, Tobacco, or Drug Use or References | None |
| Simulated Gambling | None |
| Sexual Content or Nudity | None |
| Contests | None |
| Unrestricted Web Access | **No** (the app only opens the game's own address) |
| User-generated content | **Yes**: usernames and chat messages that other players see. |
| Messaging and chat | **Yes**: chat in rooms and matches, and private messages between friends |
| In-app purchases, loot boxes, ads | **No** (coins are earned only by playing; there are no random rewards) |
| Parental controls, age assurance | No |

Expected result: **13+** (because of open chat with other players).

Apple's guideline 1.2 for apps with chat asks for four things, and Mini Rift has all of them: a **filter** for objectionable words (usernames are refused, chat words are masked), a way to **report** a player or a message (tap a name → Report; reports are stored and emailed to you), a way to **block** a player (tap a name → Block: their chat and requests stop reaching you), and published **contact** information (the support page). Mention this in the review notes (below), as it is there.

## 6. Version page (1.0 Prepare for Submission)

### Screenshots

Upload from `store/screenshots/`, in file-name order (the first three show up in search results):

| Device size in App Store Connect | Folder | Size |
| --- | --- | --- |
| iPhone **6.9"** Display (required) | `iphone-6.9/` | 2868 × 1320 (landscape) |
| iPhone **6.3"** Display | `iphone-6.3/` | 2622 × 1206 (landscape) |
| iPad **13"** Display (required, the app runs on iPad) | `ipad-13/` | 2752 × 2064 (landscape) |

Apple requires the 6.9" set (or 6.5") and the 13" iPad set, and scales them down for smaller devices. The 6.3" set is optional and is shown on 6.3" iPhones (iPhone 16 Pro, 15 Pro) instead of the scaled 6.9" set. All are real captures of the game at those resolutions, with the touch controls as they appear on a device:

1. `01-battle` · a 1v1 battle on the lane as the first minions march
2. `02-duel` · a duel in a ring of standing stones
3. `03-skins` · the hero collection with Lyra's legendary skin, Winter Queen
4. `04-heroselect` · hero select with skin, charm and team chat
5. `05-play` · the home screen: find a match
6. `06-victory` · a ranked victory with coins, experience and rating
7. `07-friends` · friends online, with private chat
8. `08-profile` · the profile: account, level, ranks, stats and recent matches

### Promotional Text (170, can be changed at any time without review)

```
New: daily quests, map pings, practice vs bots, friends and chat. Jump into a 3v3 battle or a duel in seconds, and earn coins in every match.
```

### Description

```
Mini Rift is a fast online battle game drawn like a pop-up paper storybook, with the heroes of Starfall Grove.

THREE WAYS TO FIGHT
• Battle: 1v1 to 3v3 on five battlefields with one, two or three lanes. Push with your minion waves, break two towers, then the enemy Core
• Duel: heroes only, in a ring of standing stones. First to win three rounds wins. Grab the Starshard in the middle for a burst of power
• Custom rooms: share a five-letter code or an invite link and play with your friends, with bots in any empty seat

REAL MATCHMAKING
• Tap Find match and get matched with players near your rank
• Accept the match and go straight to hero select
• Nobody around? After 30 seconds you choose: fight bots right away or keep searching
• Practice: tap vs Bots to start a match against bots at once

SIX HEROES, EIGHTEEN SKINS
• Mira the Astralmancer, Kael the Knight, Lyra the Frostweaver, Riven the Assassin, Wren the Ranger and Elara the Bloomwarden
• Every hero has a basic attack and four spells: learn one per level and upgrade them along two paths
• Rare, epic and legendary skins. Legendary skins glow with an aura and leave a trail of stars, snow, leaves or embers
• Bring a charm into every match: Flash, Heal, Ghost or Barrier

PLAY, EARN, UNLOCK
• Coins from every match: more for a win, a bonus for your first win of the day
• Unlock heroes and skins with coins. One hero is free to play every week
• Level up your player profile and climb six ranks, from Seedling to Celestial, in battles and in duels
• Three daily quests that pay coins
• A ladder of the best players

FRIENDS AND CHAT
• Add friends by username, see who is online and what they're playing
• Private messages, room chat, and team chat in matches with quick messages
• Ping the map for your team: attack, fall back, on my way, need help
• Invite friends straight into your custom room
• Block or report anyone, any time

MADE FOR TOUCH
• Thumbstick, an attack button and spell buttons sized for phones and tablets: tap to auto-aim, drag to aim yourself
• Haptics on kills, level-ups and found matches
• Landscape, full screen, with the screen kept on while you play

FAIR AND FREE
• No purchases with real money and no ads. Everything is earned by playing
• One account for every device: log in with your username and password anywhere. Delete it any time from your profile
```

### Keywords (100, comma separated, no spaces after commas)

```
moba,3v3,battle,arena,duel,pvp,online,multiplayer,heroes,skins,ranked,lanes,strategy,fantasy,casual
```

### URLs

| Field | Value |
| --- | --- |
| Support URL | `https://starfallgrove.eu/support/` |
| Marketing URL | `https://starfallgrove.eu/minirift/` |

### Version, copyright, release

| Field | Value |
| --- | --- |
| Version | `1.0.0` (matches `version` in `app.json`) |
| Copyright | `2026 Medin Turkes` |
| Routing App Coverage File | none |
| Version release | "Manually release this version" for the first launch, so you choose the day |

### Build

After `eas submit` (see the README), the build shows up under **TestFlight** within 5–30 minutes. Pick it in the **Build** section of the version page. The export compliance question doesn't come up, because the app declares `ITSAppUsesNonExemptEncryption = NO` (it only uses HTTPS and secure WebSockets).

### App Review Information

| Field | Value |
| --- | --- |
| Sign-in required | **Yes**. User name: `AppReview` · Password: `Review-88e56f78b0` (a normal player account made for review; log in with it on the first screen) |
| Contact first/last name | Medin Turkes |
| Phone | *your phone number, with country code (+49 …)* |
| Email | `certidevelopment@gmail.com` |

**Notes** (paste as is):

```
Mini Rift is an online multiplayer battle game (MOBA). Playing needs an account (username, email, password). Please log in on the first screen with the review account:
  Username: AppReview
  Password: Review-88e56f78b0
You can also create a new account on the Sign up tab.

How to review:
1. On the Play tab choose Battle or Duel and a team size, then tap vs Bots: a practice match against bots starts at once. (Find match looks for other players; if nobody is searching, after 30 seconds it asks whether to play against bots instead.)
2. Tap Accept, pick a hero (Mira, Kael or Wren are unlocked; one more is free this week) and tap Lock in.
3. Move with the thumbstick on the left. Attack with the big button on the right and cast spells with the round buttons (tap to auto-aim, drag to aim). In a battle, tap a glowing spell to learn it.
4. After the match, the result screen shows the coins and experience earned.
The Heroes tab shows the heroes and skins that can be unlocked with coins earned by playing. The Custom tab makes a private room with a code.

Account deletion: Profile tab > "Delete my profile" (tap twice). It deletes the account and profile from the server immediately.
Password reset: "Forgot password?" on the log-in screen emails a one-time link.

User-generated content and chat (guideline 1.2):
- Filter: usernames with slurs or insults are refused; such words in chat are masked automatically. Messages are limited in length and rate.
- Report: tap any player's name in a chat (or the "..." next to a friend) > Report, with a reason. Reports are stored and emailed to us, and we act on them (removing names, deleting accounts).
- Block: tap a name > Block. A blocked player's messages and friend requests no longer reach you, and any friendship ends.
- Contact: https://starfallgrove.eu/support/ and certidevelopment@gmail.com
Chat messages are passed on in real time and not stored, except a message that someone reports.

There are no in-app purchases, no ads and no tracking. Coins cannot be bought.

Native features: landscape full screen, haptic feedback on game events, the screen kept awake during play, and the sign-in kept in the app's own storage, so the player stays logged in even if iOS clears web data.
```

## 7. After review

- **Submit for Review** sends version 1.0 with the build. Review usually takes 1–3 days.
- Once it's live, put the App Store link in `miniriftAppStoreUrl` in `Starfall.Grove.Landing/site.json`, so the App Store badges on the website's Mini Rift page go live.
