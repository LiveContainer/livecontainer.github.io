---
title: Installation
sidebar_position: 1
---

# Installation

## Requirements

- iOS/iPadOS 15+
- AltStore 2.0+ / SideStore 0.6.0+

## Download Methods

- Stable:

  [AltSource (raw)](https://raw.githubusercontent.com/LiveContainer/LiveContainer/refs/heads/main/apps.json) ([Add to AltStore](https://tinyurl.com/LCAltStoreClassic), [Add to SideStore](https://tinyurl.com/LCSideStore)), [IPA download](https://github.com/LiveContainer/LiveContainer/releases/latest)
- Nightly:

  [AltSource (raw)](https://raw.githubusercontent.com/LiveContainer/LiveContainer/refs/heads/hbdev/apps_nightly.json) ([Add to AltStore](https://tinyurl.com/LCAltStoreClassic-N), [Add to SideStore](https://tinyurl.com/LCSideStore-N)), [IPA download](https://github.com/LiveContainer/LiveContainer/releases/tag/nightly)

- It is recommended to setup JIT-Less mode, in which LiveContainer signs your apps with your certificate from AltStore/SideStore (see the instructions below).

## Installation

### JIT-Less mode (without JIT \[recommended])

These steps can be bypassed if you don't mind enabling JIT for your app every time, but it is not recommended. Without JIT, guest apps need to be codesigned, which requires retrieving the certificate and password from AltStore/SideStore. 

:::note
JIT-Less mode does not mean you can't enable JIT for your apps. Instead, it means JIT is not required to launch an app. If you want to use JIT, see the instructions below in "JIT Support" section.
If something goes wrong, please check "JIT-Less Mode Diagnose" for more information.
:::

#### Method 1 (Requires AltStore 2.2.1+ / SideStore 0.6.2-nightly+ \[recommended])
- Open Settings in LiveContainer 
- Tap "Import Certificate from SideStore"
- SideStore will be opened and ask if you want to export the certificate. If you don't see the prompt, keep SideStore open in the background and tap "Import Certificate from SideStore" again.
- Press "Export"
- Tap "JIT-Less Mode Diagnose" and tap "Test JIT-Less Mode"
- If it says "JIT-Less Mode Test Passed", you are good to go!

:::note
If you reinstall AltStore/SideStore using AltServer, you will need to go through these steps again or risk needing to reinstall the app.
:::

#### Method 2 (Requires AltStore/SideStore)
- Open Settings in LiveContainer, tap "Patch AltStore/SideStore", and the app will switch to SideStore/AltStore to reinstall it with the tweak applied. If you use AltWidget, select "Keep Extension."
- Wait for the installation to finish, then **reopen AltStore/SideStore**.
- Return to LiveContainer and press "Test JIT-Less Mode." If it says "Test Passed," JIT-less mode is ready.
- Install your app via the "Apps" tab.
- Tap the run icon, it will attempt to restart LiveContainer with guest app loaded.

:::note
If you update or reinstall AltStore/SideStore, you'll need to reapply the patch. Re-patch is not needed when you refresh your store.
:::

### Installing Apps
- Open LiveContainer, tap the plus icon in the upper right hand corner and select IPA files to install.
- Choose the app you want to open in the next launch.
- You can long-press the app to manage it.
