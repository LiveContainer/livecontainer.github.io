---
title: JIT Support
sidebar_position: 2
---

# JIT Support

## StikJIT

[Stikjit](https://github.com/0-Blu/StikJIT)

1. Install StikJIT and finish the setup.
2. Enter the settings of the app you want to run, enable "Launch with JIT"
3. Go to LiveContainer settings->JIT Enabler->select "StikJIT" as the JIT method in LiveContainer settings.

    - It's recommended to use "StikJIT (Another LiveContainer)" if the app needs JIT is installed through LiveContainer. LiveContainer will automatically start StikJIT when you launch the app.
    - If you choose "StikJIT (Another LiveContainer)", you need to convert StikJIT to a shared app the first.

4. Launch the app and enjoy!

## SideJITServer/JITStreamer 2.0

[SideJITServer](https://github.com/nythepegasus/SideJITServer)

## JitStresmer-EB (Relanch)

[JITStreamer-EB](https://jkcoxson.com/jitstreamer)

- Set it up first in JITStreamer-EB's website
- Go to LiveContainer settings->JIT Enabler->Select JITStreamer-EB. You can leave the "Address" blank if you are using official server and it's default to http://[fd00::]:9172.
- Long press the app that needs JIT->Settings->enable Launch with JIT->Tap Run, LiveContainer will contact the server and enable JIT for that app.
