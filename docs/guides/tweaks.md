---
title: Tweaks
sidebar_position: 3
---

# Using Tweaks

LiveContainer provides a way to inject tweaks without injecting it to the app beforehand. Direct injection is still recommended as not all tweaks work correctly with LiveContainer's TweakLoader.

LiveContainer comes with its own TweakLoader, which automatically load CydiaSubstrate and tweaks. TweakLoader is injected to every app you install. You can override TweakLoader.dylib symlink with your own implementation if you wish.

## How Loading Works

When an app launches with TweakLoader enabled, LiveContainer loads items in this order:

1. CydiaSubstrate
2. Global tweaks from the root `Tweaks` folder
3. Tweaks from the selected app-specific tweak folder (loaded recursively)

LiveContainer supports importing:

1. `.dylib`
2. `.framework`

`TweakLoader.dylib` is skipped from tweak loading (it is the loader itself).

## Global vs App-Specific Tweaks

| Type | Where to put files | Scope |
| --- | --- | --- |
| Global tweak | Root `Tweaks` folder | Loaded for all apps |
| App-specific tweak | A subfolder under `Tweaks` | Loaded only for apps that select that folder |

:::note
Managing tweaks is only available in the primary LiveContainer (Blue) and for private apps. If you want to load tweaks for a shared app, convert it to private app before adding tweaks to it. You can convert it back when you are done and the tweak will still work.
:::

To assign an app-specific folder:

1. Open `Tweaks` tab.
2. Create a new folder.
3. Import tweaks into that folder.
4. Open app settings and set `Tweak Folder` to that folder.

For shared apps, `Tweak Folder` is read-only in app settings. If needed, switch the app to private mode, configure the tweak folder, then switch back.

## Managing Tweaks

1. Import: `Tweaks` tab -> `+` -> `Import Tweak`
2. New folder: `Tweaks` tab -> `+` -> `New Folder`
3. Rename: hold an item -> `Rename`
4. Delete: swipe left on an item -> `Delete`

## Tweak Signing

Tweaks must be signed before they can be loaded successfully.

LiveContainer handles this automatically before app launch:

1. It checks tweak files and existing `TweakInfo.plist` records.
2. It re-signs when files changed or signatures are invalid/expired.
3. It updates `TweakInfo.plist` after signing.

You can also force re-sign manually in `Tweaks` tab using the `Sign` button.

## Related App Settings

These options affect tweak behavior:

1. `Don't Inject TweakLoader`: do not inject loader load commands during patch/sign.
2. `Don't Load TweakLoader`: when available with the first option, also skip runtime loading.

If both are enabled, no tweaks are loaded for that app.

See also: [App Settings](./app-settings.md)

## Troubleshooting

1. Tweaks not applied to one app:
Check that the app's `Tweak Folder` is set correctly and TweakLoader is not disabled in app settings.
2. Tweaks not applied to any app:
Check whether global tweaks were added to the root `Tweaks` folder and are signed.
3. Framework tweak fails to load:
Check the framework bundle contains a valid `Info.plist` and `CFBundleExecutable`.
4. A tweak still fails after setup:
Test direct injection for that tweak, because compatibility can vary.
