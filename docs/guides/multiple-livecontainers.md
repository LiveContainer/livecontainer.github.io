---
title: Multiple LiveContainers
sidebar_position: 2
---

# Multiple LiveContainers

Using multiple LiveContainers allows you to run multiple different apps simultaneously, with *almost* seamless data transfer between the LiveContainers, making full use of your free app slots.

## Install another LiveContainer

Go to `Settings -> Install Another LiveContainer`.

From there you can prepare and install instances such as `LiveContainer2` / `LiveContainer3`.

## Installation
Tap "LiveContainer2" / "LiveContainer3" to (re)install another LiveContainer. LiveContainer will generate an ipa of another LiveContainer. Please open the generated LiveContainer ipa in AltStore/SideStore install them, or you may save and customize it. 

In case you need Game Mode, you can enable "Set Catagory as Game" and "Allow Game Mode" before installing another LiveContainer

## Verify installation status

In Multiple LiveContainer view:

- checkmark: another LiveContainer is installed and detected
- cross: not detected / not installed

## Use apps across LiveContainers

1. In primary LiveContainer (blue one), hold the app -> Settings -> Convert to Shared App.
2. Reopen other LiveContainers (gray icon) and you can launch the shared app from them.

## About App Dispatching
Depending on how you launch your app, LiveContainer dispatches your apps differently:

- When using url scheme or AppClips, the first LiveContainer (blue icon) always launches by default. If the requested app is running in other LiveContainer, it will be switched to. If not, LiveContainer will try to switch to a free LiveContainer and switch to it.
- When using the Launch App Shortcut, the dispatch process happens in the background and only the selected free LiveContainer will be opened.

If all LiveContainers are in use, you'll be prompted to either open it in the second/third LiveContainer (gray icon) or terminate the current app and relaunch it in the first.

## Common pitfalls
- app not visible in other LiveContainers: not converted to shared app
