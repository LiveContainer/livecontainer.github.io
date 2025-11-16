---
title: Building from Source
sidebar_position: 1
---

# Building

Follow these steps if you want to build LiveContainer yourself or contribute code changes.

## 1. Clone with submodules

```bash
git clone --recurse-submodules https://github.com/LiveContainer/LiveContainer.git
# or, if you already cloned:
git submodule update --init --recursive
```

The repository depends on several submodules (`fishhook`, `litehook`, `OpenSSL`) that must be present before building.

## 2. Install prerequisites

- Xcode 15.4+ with the iOS 18 SDK (newer SDKs also work, but keep deployment targets in mind).
- A paid or free Apple developer account so you can sign debug builds.
- (Optional) Python 3 if you plan to run helper scripts such as `update_json.py`.

## 3. Configure signing

Open `xcconfigs/Global.xcconfig`, set `DEVELOPMENT_TEAM[config=Debug]` (and Release if needed) to your Team ID, and ensure your bundle identifiers are unique if you run multiple local builds.

## 4. Build from Xcode

1. Open `LiveContainer.xcodeproj`.
2. Select the `LiveContainer` scheme.
3. Choose your target device (LiveContainer must run on-device).
4. Press **Run**.

LiveProcess, MultitaskSupport extensions, and tweak helper targets are automatically built as dependencies when the main target compiles.

## 5. Optional components

- **TestJITLess**: contains utilities for validating JIT-less signing workflows.
- **TweakLoader**: if you modify tweak loading, build/archive this target and replace the bundled dylib.
- **SideStore helpers**: ensure the `SideStore` target also signs correctly if you are testing JIT automation.

After the app installs on-device, follow the [Installation guide](../installation.md) to import certificates and enable features such as JIT-less mode.
