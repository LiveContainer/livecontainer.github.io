---
title: 5. Using Guest Apps
sidebar_position: 8
---

# 5. Using Guest Apps

## 5.1. Why don't apps show up in the second LiveContainer?

You need to convert app to Shared App.
Long press app -> Settings -> Convert to Shared App

## 5.2. How can I open one app in both LiveContainers? / How can I use the multi-account feature?

1. Create a new data folder: Long press app -> Settings -> Containers -> New data folder
2. Long press app -> Settings -> Select a container -> Run

:::note
You can create up to 128 containers per app after 3.2.58 and 3 before. You can run the same app with different Container in both LiveContainers at the same time.
:::

## 5.3. How can I open a link/webpage/url in a guest app?

You can share a web page to LiveContainer using [this shortcut](https://www.icloud.com/shortcuts/44ea82ce7ed8469ea24198c375db09a0). Be sure to add this shortcut to "Favorites" in share sheet actions.

## 5.4. Can't select file / File picker not working / App can't proceed without enabling notification

Long press app -> Settings -> Enable "Fix File Picker & Local Notification"

## 5.5. How to modify app settings that are supposed to be in iOS settings

Long press app -> Settings -> (container name) -> Container Preferences

## 5.6. "Safari cannot open this page because the address is invalid" when signing in through Safari

Please refer to this issue: #242.

## 5.7. How can I use widgets/plugins etc.?

No, you can't. They require extra app ids. You can integrate the plugin with LiveContainer if you really want to use that plugin, but doing so will cost 1 app id.

## 5.8 How can I enable JIT for guest apps?

LiveContainer has built-in support for popular JIT enablers. You can set it up in LiveContainer settings -> JIT section.
Mark an app as JIT needed by going to: long press app -> settings -> enable Launch with JIT. LiveContainer will wait for JIT to be enabled and try to contact the JIT enabler you configured.

:::note
StikDebug is available in LiveContainer 3.3.51+
:::

For *StikDebug* (Recommended), install StikDebug as a separate app, and in LiveContainer settings, choose "StikDebug" under JIT enablers.

For *SideJITServer/JITStreamer 2.0*, please input both your address and device UDID.

### The correct way to enable JIT for an app inside LiveContainer

0. Don't enable JIT for LiveContainer now
1. Set up your JIT enabler as said above
2. Enable "Launch with JIT" as said above
3. Tap run
4. If your JIT enabler doesn't support automatic enabling, you need to enable JIT for LiveContainer from your JIT enabler while keeping the "waiting for JIT" prompt open.
