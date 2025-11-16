---
title: System Architecture
sidebar_position: 2
---

# LiveContainer Architecture Overview

LiveContainer is more than a shell app—it is a small runtime that re-hosts arbitrary iOS apps inside its own sandbox, layers tweak injection, and offers multitasking plus JIT-less execution. This page summarizes how the modern codebase is organized and how the launcher brings guest processes to life.

## Project Structure

### Main executable (`LiveContainer`)
- Entry point for the entire platform. Handles bootstrapping, data management, container lifecycle, and launches LiveProcess instances for guests.
- When no guest is running, it presents the SwiftUI interface (`LiveContainerSwiftUI`).

### LiveContainerSwiftUI
- SwiftUI UI layer contributed by [@hugeBlack](https://github.com/hugeBlack).
- Hosts localization assets (`Localizable.xcstrings`). Join our [Crowdin project](https://crowdin.com/project/livecontainer) to help translate strings.

### LiveProcess
- Lightweight helper executable that contains the actual guest loader. It runs with the same entitlements but a different bundle identifier to make multitasking and PID-based JIT enabling possible.
- Responsible for patching the guest binary, configuring dyld, injecting tweaks, and transferring control to the app’s entry point.

### MultitaskSupport
- Implements the in-app floating window system plus native iPadOS window integration.
- Communicates with the primary container to keep app state and input routing synchronized across multiple LiveProcess instances.

### SideStore helpers
- Code that integrates SideStore’s refresh/JIT APIs. Provides background certificate refresh, source updates, and URL scheme handling for SideStore installations.

### TweakLoader
- Minimal substrate loader that ships inside LiveContainer.
- Injected into every guest via a new load command; it can be overridden by replacing the `TweakLoader.dylib` symlink.

### ZSign
- Bundled signer (forked from [zhlynn/zsign](https://github.com/zhlynn/zsign) via [Feather](https://github.com/khcrysalis/Feather)).
- LiveContainer maintains a custom branch tailored to its entitlements and multi-container requirements.

### Third-party libraries
- `fishhook`, `litehook`, and `OpenSSL` live as git submodules. These power low-level hooking and crypto functionality used across the loader and signer.

## How It Works

### Preparing the guest executable
- Rewrite the `__PAGEZERO` segment (`vmaddr = 0xFFFFC000`, `vmsize = 0x4000`) so the binary can be mapped inside LiveProcess.
- Switch the Mach-O type from `MH_EXECUTE` to `MH_DYLIB`.
- Inject a load command that loads `TweakLoader.dylib` before `UIApplicationMain` starts.

### Patching `@executable_path`
- Modern builds hook `dyld4::APIs::_NSGetExecutablePath` using litehook/fishhook.
- The hook calls the original implementation, makes the `config.process.mainExecutablePath` writable, and swaps the path so the guest resolves its own bundle resources.
- Older SIGSEGV-based patching is no longer used but is documented in the [main repo](https://github.com/LiveContainer/LiveContainer/blob/main/README.md) for posterity.

### Patching `NSBundle.mainBundle`
- `NSBundle.mainBundle` is overridden so APIs requesting bundle metadata receive the guest bundle instead of LiveContainer’s.

### Bypassing Library Validation / Code Signing
- When JIT is available, LiveContainer asks the configured enabler to lift the executable signature checks.
- In JIT-less mode, the bundled ZSign re-signs each guest plus tweaks using the certificate that was imported from AltStore/SideStore.
- The bypass is based on [Restoring Dyld Memory Loading](https://blog.xpnsec.com/restoring-dyld-memory-loading).

### Launching the app
- LiveProcess `dlopen`s the patched guest binary.
- `TweakLoader` loads CydiaSubstrate and guest-specific tweak folders.
- The loader resolves the program entry point and jumps to it; the guest then calls `UIApplicationMain` as usual.

### Multi-account support & keychain semi-separation
- 128 keychain access groups are defined. Containers randomly pick groups to reduce cross-app keychain collisions, enabling isolated sign-ins per container.

## Limitations

- Guest entitlements aren’t copied to the host. Only the base entitlements granted to LiveContainer apply.
- App permissions (camera, media library, etc.) are global to all guests.
- Containers share the same sandbox, so one malicious guest could read another guest’s files.
- App extensions cannot be registered (SpringBoard is unaware of them and App IDs are limited).
- Some multitasking scenarios still block hardware keyboards or iPhone Mirroring input.
- Remote push notifications and custom URL scheme queries often fail because LiveContainer cannot register them with SpringBoard.
