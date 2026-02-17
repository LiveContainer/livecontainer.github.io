---
title: Sources
sidebar_position: 2
---

# Sources

The `Sources` tab lets you browse AltStore-style source feeds and install apps directly from those feeds.

## Add a source

1. Tap `Add Source` (`+`).
2. Enter a source URL in the manage sheet.
3. Confirm add.

## Deep link support

Sources can be added via deep link:

- `livecontainer://source?url=<encoded_source_url>`

When received, LiveContainer switches to `Sources` tab and attempts to add that source URL.

## Remove or refresh a source

- Use the source menu (`...`) or swipe actions in source management.
- `Refresh` reloads one source.
- `Refresh All` reloads all added sources.

## Install app from a source

1. Expand a source section.
2. Find app and tap `Install`.
3. LiveContainer switches to `Apps` tab and starts install using the app's latest version download URL.

:::note
If a source contains more than 50 apps, due to perfomance issue, you'll need to find your app using the search button.
:::

## Common issues

- **Invalid URL**: source input is malformed.
- **Duplicate source**: this exact URL is already added.
- **Unable to refresh source**: network/server/JSON format issue.
- **No apps available**: source parsed but app list is empty.