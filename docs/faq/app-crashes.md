---
title: 4. App Crash
sidebar_position: 7
---

# 4. App Crash

## 4.1. could not register fairplay decryption, mremap_encrypted() => -1

The app is not decrypted. Please find a decrypted ipa.

## 4.2. App returned from its main function with code 0

The ipa is in an invalid format, please find another one. If you try to sideload this ipa in SideStore/AltStore, it will report a "This app is in an invalid format." error.

## 4.3. App show a black screen and crash after 10s

:::note
This applies to LiveContainer 3.1.55+
:::

The black screen fix is not automatically applied after 3.1.55. You can enable it by: Long press app -> Settings -> Enable "Black Screen Fix"

## 4.4. App still crashes

For other apps, please:

1. Search through issues and see if there's a solution.
2. Directly sideload the app in SideStore/AltStore and see if it works in Sideloading environment. If not, then please find another working ipa.

If you can't find a solution, feel free to submit a compatibility issue. Please make sure to include:

1. **App's exact name**, please don't only say "app crashing" or "app made in X not working"
2. Find crash report in iOS settings -> Privacy & Security -> Analytics  & Improvements -> Analytics Data -> Search LiveContainer
3. If the app is an open-source app please leave a link to its repo
4. The **exact build of LiveContainer**, i.e. not "3.1.0" only, but "3.1.0 c586e79". You can find that at the bottom of LiveContainer settings tab.

Unfortunately, due to the fact that most apps are close-source, it's super hard for us to pinpoint the issue, so no eta.
