---
title: JIT Support
sidebar_position: 2
---

# JIT Support

LiveContainer has built-in support for popular JIT enablers. You can set it up in LiveContainer settings -> JIT section.
Mark an app as JIT needed by going to: long press app -> settings -> enable "Launch with JIT." LiveContainer will wait for JIT to be enabled and, if avaliable, try to contact the JIT enabler you configured.

The correct way to enable JIT for an app inside LiveContainer:

(1-3 only the first time, 6 if applicable)
1. Open LiveContainer (don't try to enable JIT yet)
2. Set up your JIT enabler as outlined above
3. Enable "Launch with JIT" as said above
4. Ensure your JIT enabler's requirements are currently being met
5. Tap run
6. If your JIT enabler supports automatic enabling, you are done! Otherwise, you need to enable JIT for LiveContainer from your JIT enabler manually while the "waiting for JIT" prompt remains open in the background.

## StikJIT (Recommended)

[StikJIT](https://github.com/StephenDev0/StikJIT)

If using StikJIT (Recommended), you have 2 choices. If you prefer to install StikJIT as a separate app, choose "StikJIT (StandAlone)". If you have 2 LiveContainers installed, you can install StikJIT inside LiveContainer and convert it to a shared app. In this case, select "StikJIT (Another LiveContainer)"

1. Install StikJIT and finish the setup.
2. Enter the settings of the app you want to run, enable "Launch with JIT"
3. Go to LiveContainer settings->JIT Enabler->select "StikJIT" as the JIT method in LiveContainer settings.

    - It's recommended to use "StikJIT (Another LiveContainer)" if the app needs JIT is installed through LiveContainer. LiveContainer will automatically start StikJIT when you launch the app.
    - If you choose "StikJIT (Another LiveContainer)", you need to convert StikJIT to a shared app the first.

4. Launch the app and enjoy!

## SideStore (nightly)

If using SideStore, choose SideStore as your JIT enabler. Please note that since SideStore's JIT URL Scheme is not implemented yet, you still need to manually enable JIT for current LiveContainer in SideStore. To do this, in the apps screen, ensure VPN and Wi-Fi or Airplane Mode is enabled, hold down on the app, and press "Enable JIT."

## JitStreamer-EB (Relaunch)

[JITStreamer-EB](https://jkcoxson.com/jitstreamer)

If using JitStreamer-EB (largely Deprecated), choose JitStreamer-EB as your JIT enabler. If you use JitStreamer through a Wireguard VPN and you use the official server or you self-host and did not changed the WIREGUARD_SERVER_ADDRESS variable, you can leave "Address" blank. Otherwise, put the address to your server in "Address", including scheme (http/https) and port (9172).

- Set it up first in JITStreamer-EB's website
- Go to LiveContainer settings->JIT Enabler->Select JITStreamer-EB. You can leave the "Address" blank if you are using official server and it's default to http://[fd00::]:9172.
- Long press the app that needs JIT->Settings->enable Launch with JIT->Tap Run, LiveContainer will contact the server and enable JIT for that app.

## SideJITServer

[SideJITServer](https://github.com/nythepegasus/SideJITServer)

If using SideJITServer, please input both your address and device UDID.
