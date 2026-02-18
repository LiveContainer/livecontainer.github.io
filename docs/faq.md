---
title: FAQ
sidebar_position: 8
---

# FAQ

## How do I ...
- Add apps to home screen: [Add to Home Screen](./guides/add-to-home-screen.md)
- Enable JIT for apps in LiveContainer: [JIT Support](./guides/jit-support.md)
- Install/use LC2 or LC3: [Multiple Instances](./guides/multiple-livecontainers.md)
- Use tweak loader: [Tweaks](./guides/tweaks.md)
- Perform data cleanup, keychain reset, App Group migration: [Data Management](./guides/data-management.md)
- Run multiple accounts for one app: [Multiple / External Container](./guides/containers-and-external-data.md)
- Open a link/url/webpage in a guest app?

    - Use LiveContainer's link icon in `Apps` tab and paste URL
    - You can share a web page to LiveContainer using [this shortcut](https://www.icloud.com/shortcuts/44ea82ce7ed8469ea24198c375db09a0). Be sure to add this shortcut to "Favorites" in share sheet actions.


- Modify app settings that are supposed to be in iOS settings:

    - Long press app -> Settings -> (container name) -> Container Preferences


### Can guest apps use widgets/plugins/extensions?

Generally no. They require extra app ids.


## Troubleshooting

### Fast triage

1. Update LiveContainer to latest stable/nightly.
2. Confirm AltStore/SideStore setup is healthy and refreshed.
3. Directly install the app in AltStore/SideStore and see if the issue still exists. If so it's an issue with the app itself, please directly report the issue to its developer.
4. Reproduce once, if crash happens, export crash report (`Settings -> Privacy & Security -> Analytics -> Analytics Data`).
5. Record LiveContainer build hash (bottom of Settings), iOS version, and device model.

### I have a specific problem

- LiveContainer fails to install or verify: [Installation & Signing Errors](./faq/installing-livecontainer.md)
- Guest app import/signing fails: [Installation & Signing Errors](./faq/installing-livecontainer.md)
- JIT-less import or diagnose fields are wrong: [JIT-Less Setup & Diagnose](./faq/jit-less-mode-setup.md)
- App crashes after launch: [App Crashes](./faq/app-crashes.md)
- Guest app not working correctly: [Using Guest Apps](./faq/using-guest-apps.md)
- Per-app toggles to improve compatibility: [App Settings](./guides/app-settings.md)

## Before filing an issue

- Search: https://github.com/LiveContainer/LiveContainer/issues
- Compatibility label: https://github.com/LiveContainer/LiveContainer/labels/compatibility
- Include:
  - exact app name/version (If the app is an open-source app please leave a link to its repo)
  - LiveContainer version + commit hash (The **exact build of LiveContainer**, i.e. not "3.1.0" only, but "3.1.0 c586e79". You can find that at the bottom of LiveContainer settings tab.)
  - iOS version + device model
  - exact repro steps
  - exported crash report (`Settings -> Privacy & Security -> Analytics -> Analytics Data`, attach file)
