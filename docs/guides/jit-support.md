---
title: JIT Support
sidebar_position: 2
---

# JIT Support

LiveContainer has built-in support for popular JIT enablers. You can set it up in LiveContainer settings -> JIT section.

## Select a JIT Enabler
:::note
Only StikDebug/StikDebug(Another LiveContainer) works for iOS 26+. 
:::

For *StikDebug*, Choose "StikDebug". 

For *StikDebug in LiveContainer*, Choose "StikDebug(Another LiveContainer)". 

For *SideStore*, choose SideStore as your JIT enabler. Please note that since SideStore's JIT URL Scheme is not implemented yet, you still need to manually enable JIT for current LiveContainer in SideStore. Built-in SideStore is not supported.

For *JitStreamer-EB* (Deprecated), choose JitStreamer-EB as your JIT enabler. If you use JitStreamer through a Wireguard VPN and you use the official server or you self-host and did not changed the `WIREGUARD_SERVER_ADDRESS` variable, you can leave "Address" blank. Otherwise, put the address to your server in "Address", including scheme (http/https) and port (9172).

For *SideJITServer/JITStreamer 2.0*, please input both your address and device UDID.

## Setup App
Mark an app as JIT needed by going to: hold app -> settings -> enable Launch with JIT. LiveContainer will wait for JIT to be enabled and try to contact the JIT enabler you configured.

If you are on iOS 26+ and your device uses A15+ or M2+ (included), you'll also need a JIT script for each app. Please contact app developer for that. You may load the script by: hold app -> settings -> select JIT launch Script.

## Setup StikDebug (Another LiveContainer)
StikDebug can be installed and used in LiveContainer. A free LiveContainer other than current one should be available to launch StikDebug
- Download StikDebug ipa and install it in LiveContainer
- Setup StikDebug as usual (import pairing file etc.)
- Convert StikDebug into a shared app
- Make sure a free LiveContainer other than current one is available
- Connect to LocalDevVPN
- Tap "Run"
- StikDebug will be launched in another LiveContainer, and the requested app should be launched with JIT enabled

## The correct way to enable JIT for an app inside LiveContainer
0. Don't enable JIT for LiveContainer now
1. Set up your JIT enabler as said above
2. Enable "Launch with JIT" as said above
3. Tap run
4. If your JIT enabler doesn't support automatic enabling, you need to enable JIT for LiveContainer from your JIT enabler while keeping the "waiting for JIT" prompt open.