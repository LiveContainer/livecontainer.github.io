---
title: JIT Support
sidebar_position: 2
---

# JIT Support

LiveContainer has built-in support for popular JIT enablers for iOS 17.4-18.6. You can set it up in LiveContainer settings -> JIT section.
Mark an app as JIT needed by going to: long press app -> settings -> enable "Launch with JIT." LiveContainer will wait for JIT to be enabled and, if avaliable, try to contact the JIT enabler you configured.

The correct way to enable JIT for an app inside LiveContainer:

(1-3 only the first time, 6 if applicable)
1. Open LiveContainer (don't try to enable JIT yet)
2. Set up your JIT enabler as outlined above
3. Enable "Launch with JIT" as said above
4. Ensure your JIT enabler's requirements are currently being met
5. Tap run
6. If your JIT enabler supports automatic enabling, you are done! Otherwise, you need to enable JIT for LiveContainer from your JIT enabler manually while the "waiting for JIT" prompt remains open in the background.

## StikDebug (formerly StikJIT, recommended)

[StikDebug](https://apps.apple.com/us/app/stikdebug/id6744045754)

1. Install StikDebug and import your pairing file.
2. Enter the settings of the app you want to run, enable "Launch with JIT"
3. Go to LiveContainer settings->JIT Enabler->select "StikDebug" as the JIT method in LiveContainer settings.
4. Launch the app and enjoy!

## SideStore (0.6.2)

To use SideStore, choose SideStore as your JIT enabler. Please note that since SideStore's JIT URL Scheme is not implemented yet, you still need to manually enable JIT for current LiveContainer in SideStore. To do this, in the My Apps screen, ensure that VPN is enabled and Wi-Fi is connected or Airplane Mode is enabled, then longpress the app and press "Enable JIT."

## SideJITServer

[SideJITServer](https://github.com/nythepegasus/SideJITServer)

To use SideJITServer, please input both your address and device UDID.
