---
title: Troubleshooting
sidebar_position: 1
---

# Troubleshooting Index

This is the primary FAQ entrypoint. Start here, then jump to the focused page for your symptom.

## Fast triage

1. Update LiveContainer to latest stable/nightly.
2. Confirm AltStore/SideStore setup is healthy and refreshed.
3. Reproduce once, then export logs from `Settings -> Data Management -> Export Logs`.
4. Record LiveContainer build hash (bottom of Settings), iOS version, and device model.

## I have a specific problem

- LiveContainer fails to install or verify: [Installation & Signing Errors](./installing-livecontainer.md)
- Guest app import/signing fails: [Installation & Signing Errors](./installing-livecontainer.md)
- JIT-less import or diagnose fields are wrong: [JIT-Less Setup & Diagnose](./jit-less-mode-setup.md)
- JIT enabler configuration unclear: [JIT Support](../guides/jit-support.md)
- App crashes after launch: [App Crashes](./app-crashes.md)
- Shared app / multi-container behavior: [Container Management](./container-management.md)
- Installing/using LC2 or LC3: [Multiple Instances](../guides/multiple-livecontainers.md)
- Per-app rescue toggles to improve compatibility: [App Settings](../guides/app-settings.md)
- Data cleanup, keychain reset, App Group migration: [Data Management](../guides/data-management.md)
- Tweak loading issues: [Tweaks](../guides/tweaks.md)
- Unsure whether this is app-specific incompatibility: [Compatibility Information](./compatibility.md)

## Before filing an issue

- Search: https://github.com/LiveContainer/LiveContainer/issues
- Compatibility label: https://github.com/LiveContainer/LiveContainer/labels/compatibility
- Include:
  - exact app name/version (If the app is an open-source app please leave a link to its repo)
  - LiveContainer version + commit hash (The **exact build of LiveContainer**, i.e. not "3.1.0" only, but "3.1.0 c586e79". You can find that at the bottom of LiveContainer settings tab.)
  - iOS version + device model
  - exact repro steps
  - exported logs and crash file attachments (`Settings -> Privacy & Security -> Analytics -> Analytics Data`, attach file)
