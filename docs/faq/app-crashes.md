---
title: App Crashes
sidebar_position: 7
---

# App Crashes

## `could not register fairplay decryption, mremap_encrypted() => -1`

The IPA is likely not decrypted. Use a properly decrypted IPA package.

## `App returned from its main function with code 0`

This usually indicates an invalid IPA format. Validate by sideloading the same IPA directly in AltStore/SideStore; if that also fails, the package is bad.

## App shows black screen then crashes

For builds where black-screen workaround is optional, enable:

- long-press app -> `Settings` -> `Black Screen Fix`

Then relaunch and retest.

## App still crashes after basic checks

1. Search through issues and see if there's a solution.
2. Directly sideload the app in SideStore/AltStore and see if it works in Sideloading environment. If not, then please find another working ipa.

If you can't find a solution, feel free to submit a compatibility issue.

## What maintainers need in a crash report

- Exact app name + app version (If the app is an open-source app please leave a link to its repo)
- LiveContainer version + build hash (The **exact build of LiveContainer**, i.e. not "3.1.0" only, but "3.1.0 c586e79". You can find that at the bottom of LiveContainer settings tab.)
- iOS version + device model
- Repro steps
- Crash log (`Settings -> Privacy & Security -> Analytics -> Analytics Data`, attach file)
- Exported LiveContainer logs

For app-specific incompatibilities, file under [compatibility label](https://github.com/LiveContainer/LiveContainer/labels/compatibility) context when possible.
