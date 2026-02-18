---
title: App Crashes
sidebar_position: 7
---

# App Crashes

## LiveContainer won't open on iOS 18.2+

Use LiveContainer 3.0.0 or newer. If it still fails after upgrade, reboot and retry once.

## LiveContainer crash on iOS 26.4+
Use LiveContainer 3.6.65+ or newer.

## `could not register fairplay decryption, mremap_encrypted() => -1`

The IPA is likely not decrypted. Use a properly decrypted IPA package.

## `App returned from its main function with code 0`

The ipa is in an invalid format, please find another one. If you try to sideload this ipa in SideStore/AltStore, it will report a "This app is in an invalid format." error.

## App still crashes

1. Search through issues and see if there's a solution.
2. Directly sideload the app in SideStore/AltStore and see if it works in Sideloading environment. If not, then please find another working ipa.

If you can't find a solution, feel free to submit a compatibility issue.

Unfortunately, due to the fact that most apps are close-source, it's super hard for us to pinpoint the issue, so no eta.