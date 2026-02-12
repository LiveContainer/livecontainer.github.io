---
title: Container Management
sidebar_position: 8
---

# Container Management

## Why does my app not appear in the second LiveContainer?

Only shared apps are visible across multiple LiveContainer instances.

- long-press app -> `Settings` -> `Convert to Shared App`

## How do I run multiple accounts for one app?

Use multiple data containers:

1. long-press app -> `Settings` -> `Containers` -> create/select data folder
2. launch with the target container

:::note
You can create up to 128 containers per app after 3.2.58 and 3 before. You can run the same app with different Container in both LiveContainers at the same time.
:::

## How do I open a link in a guest app?

Options:

- Use LiveContainer's link icon in `Apps` tab and paste URL
- Use share-sheet shortcut flow described in guides for "Open in App"

## File picker or local notification flow is broken

Enable app-specific fixes:

- long-press app -> `Settings` -> enable `Fix File Picker`
- long-press app -> `Settings` -> enable `Fix Local Notifications`

## Safari sign-in returns "address is invalid"

See known issue and workarounds: [Issue #242](https://github.com/LiveContainer/LiveContainer/issues/242)

## Can guest apps use widgets/plugins/extensions?

Generally no. They require extra app ids. You can integrate the plugin with LiveContainer if you really want to use that plugin, but doing so will cost 1 app id.

## How do I enable JIT for a guest app?

See the canonical guide: [JIT Support](../guides/jit-support.md)
