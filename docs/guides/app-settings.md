---
title: App Settings
sidebar_position: 3
---

# App Settings

Open app settings by holding an app card in LiveContainer and tapping `Settings`.

## Data section

- **Bundle Folder**: shows the app bundle's file name.
- **Remark**: custom note text for this app.
- **Tweak Folder**:
  - private app: selectable tweak folder
  - shared app: shown as read-only in this page
- **Convert to Shared App**: moves app bundle and its data/tweak into shared folder for Multiple LiveContainer usage.
- **Convert to Private App**: moves shared app and its data/tweak back to private folder.

## Container section

- **Container list**: open each container to manage container-level settings.
- **New Data Folder**: create a new container data folder.
- **Select External Storage**: add an external folder-backed container (shows warning for non-local/internal storage).
- **Select Unused Container**: attach existing unused container folders (only shows for private apps).

### Container detail page

Inside each container page you can manage:

- container name
- `Isolate App Group`
- `Spoof Identifier For Vendor`
- `Container Preferences` (if guest app provides `Settings.bundle`)
- set as default container
- open data folder
- unbind container
- delete container data
- clean this container's keychain data
- remove container entry

## Launch/JIT section

- **Launch with JIT**: mark this app as JIT-required during launch.
- **JIT Launch Script** (iOS 26+): attach custom JIT launch script file for this app.

## Security section

- **Lock App**: require authentication before launch.
- **Hide App**: available when app is locked; hides app from normal list.

## Language section

- set app-specific language
- `Auto` uses system/default behavior

## Fixes section

- **Fix File Picker (new)**
- **Fix Local Notification**
- **Use LC Bundle ID**

## Orientation section 
If you encounter resolution issues with apps, especially landscape games, please try enabling this option

- orientation lock: disabled / landscape / portrait

## Runtime compatibility section

- **Hide LiveContainer from Dyld API**
- **Don't Inject TweakLoader**
- **Don't Load TweakLoader** (shown after disabling inject)

## SDK behavior section

- **Spoof SDK Version**: make system-library behavior follow target SDK assumptions.

## Legacy file-picker section

- **Fix File Picker (legacy)**: the old file picker fix. It forces the file selector to copy selected files to app's inbox. You may find and clean copied files in app container -> Inbox. Please note that this may cause crash or may not work when selecting folders.

## Signing section

- **Force Sign**: force re-sign this app now.
- if app is currently marked as "don't sign", this action will prompt and re-enable signing first.

## Statistics section

- last launched
- installation date