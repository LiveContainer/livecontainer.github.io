---
title: System Architecture
sidebar_position: 2
---

# LiveContainer Architecture Overview

## Project structure

### Main executable

- Core of LiveContainer
- Contains the logic of setting up guest environment and loading guest app.
- If no app is selected, it loads LiveContainerSwiftUI.

### LiveContainerSwiftUI

- SwiftUI rewrite of LiveContainerUI (by @hugeBlack)
- Lanaguage file `Localizable.xcstrings` is in here for multilingual support

### TweakLoader

- A simple tweak injector, which loads CydiaSubstrate and load tweaks.
- Injected to every app you install in LiveContainer.

### AltStoreTweak

- The tweak that got injected into SideStore/AltStore to retrieve certificate from it everytime it launches.

### ZSign

- The app signer shipped with LiveContainer.
- Originally made by [zhlynn](https://github.com/zhlynn/zsign).
- LiveContainer uses [Feather's](https://github.com/khcrysalis/Feather) version of ZSign modified by khcrysalis.
- Changes are made to meet LiveContainer's need.

## How does it work?

### Patching guest executable

- Patch `__PAGEZERO` segment:
  - Change `vmaddr` to `0xFFFFC000` (`0x100000000 - 0x4000`)
  - Change `vmsize` to `0x4000`
- Change `MH_EXECUTE` to `MH_DYLIB`.
- Inject a load command to load `TweakLoader.dylib`

### Patching `@executable_path`

- Call `_NSGetExecutablePath` with an invalid buffer pointer input -> SIGSEGV
- Do some [magic stuff](https://github.com/khanhduytran0/LiveContainer/blob/5ef1e6a/main.m#L74-L115) to overwrite the contents of executable_path.

### Patching `NSBundle.mainBundle`

- This property is overwritten with the guest app's bundle.

### Bypassing Library Validation

- JIT is optional to bypass codesigning. In JIT-less mode, all executables are signed so this does not apply.
- Derived from [Restoring Dyld Memory Loading](https://blog.xpnsec.com/restoring-dyld-memory-loading)

### dlopening the executable

- Call `dlopen` with the guest app's executable
- TweakLoader loads all tweaks in the selected folder
- Find the entry point
- Jump to the entry point
- The guest app's entry point calls `UIApplicationMain` and start up like any other iOS apps.

### Multi-Account support & Keychain Semi-Separation

[128 keychain access groups](./entitlements.xml) are created and LiveContainer allocates them randomly to each container of the same app. So you can create 128 container with different keychain access groups.

## Limitations

- Entitlements from the guest app are not applied to the host app. This isn't a big deal since sideloaded apps requires only basic entitlements.
- App Permissions are globally applied.
- Guest app containers are not sandboxed. This means one guest app can access other guest apps' data.
- App extensions aren't supported. they cannot be registered because: LiveContainer is sandboxed, SpringBoard doesn't know what apps are installed in LiveContainer, and they take up App ID.
- Only one guest app can run at a time. This is much more like 3 apps limit where you have to disable an app to run another (switching between app in LiveContainer is instant).
- Remote push notification might not work. ~~If you have a paid developer account then you don't even have to use LiveContainer~~
- Querying custom URL schemes might not work(?)
