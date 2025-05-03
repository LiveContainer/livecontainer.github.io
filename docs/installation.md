---
title: Installation
sidebar_position: 1
---

# Installation

## Requirements

- iOS/iPadOS 15+
- SideStore 0.6.0+ / AltStore 2.0+

## Download
- Download methods: [Add to AltStore](https://tinyurl.com/LCAltStoreClassic), [Add to SideStore](https://tinyurl.com/LCSideStore), the latest IPA [here](https://github.com/LiveContainer/LiveContainer/releases/latest), or the latest nightly IPA [here](https://github.com/LiveContainer/LiveContainer/releases/tag/nightly)
- It is recommended to setup JIT-Less mode, in which LiveContainer signs your apps with certificate from SideStore/AltStore, see the instructions below.

## Installation
### JIT-Less mode (without JIT \[recommended])
Without JIT, guest apps need to be codesigned, which requires retrieving the certificate and password from SideStore or AltStore. 
:::note
JIT-Less mode does not mean you can't enable JIT for your apps. Instead, it means JIT is not required to launch an app. If you want to use JIT, see the instructions below in "JIT Support" section. 
If something goes wrong, please check "JIT-Less Mode Diagnose" for more information.
:::

#### Method 1 (Requires SideStore 0.6.2-nightly+ \[recommended])
- Open Settings in LiveContainer 
- Tap "Import Certificate from SideStore"
- SideStore will be opened and ask if you want to export the certificate. If you don't see the prompt, keep SideStore open in the background and tap "Import Certificate from SideStore" again.
- Press "Export"
- Tap "JIT-Less Mode Diagnose" and tap "Test JIT-Less Mode"
- If it says "JIT-Less Mode Test Passed", you are good to go!

#### Method 2 (Requires SideStore/AltStore)
- Open Settings in LiveContainer, tap "Patch SideStore/AltStore", and the app will switch to SideStore/AltStore to reinstall it with the tweak applied. If you use AltWidget, select "Keep Extension."
- Wait for the installation to finish, then **reopen SideStore/AltStore**.
- Return to LiveContainer and press "Test JIT-Less Mode." If it says "Test Passed," JIT-less mode is ready.
- Install your app via the "Apps" tab.
- Tap the run icon, it will attempt to restart LiveContainer with guest app loaded.

Note: If you update or reinstall SideStore/AltStore, you'll need to reapply the patch. Re-patch is not needed when you refresh your store.

### With JIT (Requires Debugger \[SideStore 0.6.2-nightly+/StikJIT/StikDebug/etc.])
- In settings, select your preferred JIT enabler/debugger.
- Tap the play icon. (If SideStore, it will jump to SideStore. In SideStore, hold down LiveContainer and tap `Enable JIT`. It will jump back to LiveContainer with JIT enabled and the guest app is now ready to use.)
