---
title: Tweaks
sidebar_position: 3
---

# Using Tweaks

LiveContainer provides a way to inject tweaks without injecting it to the app beforehand. Direct injection is still recommended as not all tweaks work correctly with LiveContainer's TweakLoader.

## Adding Tweaks

:::note
Managing tweaks is only available in the primary LiveContainer (Blue) and for private apps. If you want to load tweaks for a shared app, convert it to private app before adding tweaks to it. You can convert it back when you are done and the tweak will still work.
:::

1. Go to tweaks tab -> tap the plus button
  - if you want to inject the tweak (global tweak) to all apps in LiveContainer, tap import tweak. 
  - If you want to inject the tweak to a specific app, tap create new folder
2. For global tweak, you are done, you can launch the app and see if tweak is successfully loaded.
3. For app-specific tweak, go to the folder you created, and tap the plus button -> import tweak
4. For app-specific tweak, long press your app -> settings -> tap tweak folder -> select the folder you created

## Removing Tweaks
Go to tweaks tab -> find your tweak/folder -> slide left -> delete

## Renaming Tweaks
Go to tweaks tab -> find your tweak/folder -> long press -> rename

## About Tweak Signing
Tweak Signing is handled automatically by LiveContainer. Tweaks will be re-sign when it is changed or when its signature is expired. You can still manually re-sign by pressing the sign button near the plus button.

advanced
guides