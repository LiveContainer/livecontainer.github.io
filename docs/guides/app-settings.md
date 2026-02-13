---
title: App Settings
sidebar_position: 3
---

# App Settings

Open app settings by holding an app card in LiveContainer and tapping `Settings`.

This page documents current options in the app settings UI and clarifies differences from older docs.

## Data section

- **Bundle path/id field**: shows the app's internal path identifier for troubleshooting.
- **Remark**: custom note text for this app entry.
- **Tweak Folder**:
  - private app: selectable tweak folder
  - shared app: shown as read-only in this page
- **Convert to Shared App**: moves app bundle/data/tweak context into shared flow for multi-LC usage.
- **Convert to Private App**: moves shared app back to private flow.

## Container section

- **Container list**: open each container to manage container-level settings.
- **New Data Folder**: create a new container data folder.
- **Select External Storage**: add an external folder-backed container (shows warning for non-local/internal storage).
- **Select Unused Container**: attach existing unused container folders (private flow only).

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
- **iOS 26+ script field** (when available): attach custom JIT launch script file for this app.

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

These are per-app compatibility toggles and should be changed one at a time when debugging.

## Orientation section (phone builds)

- orientation lock: disabled / landscape / portrait

## Runtime compatibility section

- **Hide LiveContainer from Dyld API**
- **Don't Inject TweakLoader**
- **Don't Load TweakLoader** (shown after disabling inject)

## SDK behavior section

- **Spoof SDK Version**: make system-library behavior follow target SDK assumptions.

## Legacy file-picker section

- **Fix File Picker (legacy symlink mode)**: older compatibility path for file-import workflows.

## Signing section

- **Force Sign**: force re-sign this app now.
- disabled while app is running.
- if app is currently marked as "don't sign", this action will prompt and re-enable signing first.

## Statistics section

- last launched timestamp
- installation date timestamp

## Notes vs historical docs

- Older docs referenced an app-level **Signer** picker; current builds moved signer control to global settings (`Default Signer`) rather than this page.
- Some old options seen in legacy docs may no longer appear in current app settings UI.

## Related

- [Multiple Containers and External Data Folder](./containers-and-external-data.md)
- [JIT Support](./jit-support.md)
- [Tweaks](./tweaks.md)
- [Multiple Instances](./multiple-livecontainers.md)
- [Troubleshooting](../faq/common-issues.md)
