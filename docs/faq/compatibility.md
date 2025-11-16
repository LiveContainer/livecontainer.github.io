---
title: Compatibility Information
sidebar_position: 2
---

# Compatibility Information

Unfortunately, not every iOS app cooperates with LiveContainer. Before opening an issue, go through the checklist below to collect useful data.

## Check existing reports

- Review the [compatibility label](https://github.com/LiveContainer/LiveContainer/labels/compatibility) to see if the app already has an open ticket.
- If a nightly or beta build fixes the problem, add your findings as a comment instead of filing a duplicate issue.

## Self-service diagnostics

1. **Update LiveContainer** to the latest stable or nightly build.
2. Decide whether the guest is **private** or **shared** and document that choice. Some bugs only happen with shared containers.
3. Note whether the app uses **JIT** or **JIT-less** mode. Run the [JIT-Less Diagnose](/docs/guides/jit-less-diagnose-page) tool to ensure certificates are valid.
4. If tweaks are enabled, temporarily disable them (long-press app → Settings → Tweak folder → `None`) to rule out conflicts.
5. Use **Settings → Data Management → Export Logs** immediately after reproducing the issue and attach the zip to your report.
6. Mention if the app is running in **multitask mode** or through another LiveContainer instance.

## Filing a new issue

When you open a ticket at [LiveContainer/issues](https://github.com/LiveContainer/LiveContainer/issues/new/choose), include:

- App name, bundle identifier, and version.
- iOS/iPadOS version, device model, and LiveContainer build (stable/nightly + version).
- Whether the app is private/shared, JIT/JIT-less, multitasked, or has tweaks enabled.
- Clear reproduction steps and screenshots/video if UI glitches occur.
- Exported logs or crash reports. For crashes, also collect the iOS panic log via Xcode or Settings → Privacy & Security → Analytics.

Providing this information greatly improves the odds that maintainers can reproduce and fix the issue quickly.
