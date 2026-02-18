---
title: Using Guest Apps
sidebar_position: 8
---

# Using Guest Apps

## Why does my app not appear in the second LiveContainer?

Only shared apps are visible across multiple LiveContainer instances.

- long-press app -> `Settings` -> `Convert to Shared App`

## Can't select file / File picker not working / App can't proceed without enabling notification

Enable app-specific fixes:

- long-press app -> `Settings` -> enable `Fix File Picker`
- long-press app -> `Settings` -> enable `Fix Local Notifications`

## Safari sign-in returns "address is invalid"

See known issue and workarounds: [Issue #242](https://github.com/LiveContainer/LiveContainer/issues/242)

## App Renders at Wrong Resolution
This happens most to landscape or old games.

Try enabling orientation locks:
- long-press app -> `Settings` -> set orientation lock to `landscape`

If your app is relatively old enabling orientation lock does not work, see [issue #457](https://github.com/LiveContainer/LiveContainer/issues/457)