---
title: Sources
sidebar_position: 2
---

# Sources

The `Sources` tab lets you browse AltStore-style source feeds and install apps directly from those feeds.

## What this feature does

- Stores source URLs in app settings (`LCAltStoreSourceURLs`).
- Fetches and parses source JSON.
- Caches source responses locally for faster reloads.
- Shows app list per source and installs from each app's latest version entry.

## Open Sources tab

Open the `Sources` tab from the main tab bar.

## Add a source

1. Tap `Add Source` (`+`).
2. Enter a source URL in the manage sheet.
3. Confirm add.

Input behavior:

- Full URL with scheme is accepted (`https://...`, etc.).
- If no scheme is provided, LiveContainer tries `https://` automatically.
- Absolute local paths starting with `/` are treated as local file URLs.
- Duplicate source URLs are rejected.

## Remove or refresh a source

- Use the source menu (`...`) or swipe actions in source management.
- `Refresh` reloads one source.
- `Refresh All` reloads all added sources.

## Install app from a source

1. Expand a source section.
2. Find app and tap `Install`.
3. LiveContainer switches to `Apps` tab and starts install using the app's latest version download URL.

If a source app has no valid latest download URL, install will fail with a missing download error.

## Deep link support

Sources can be added via deep link:

- `livecontainer://source?url=<encoded_source_url>`

When received, LiveContainer switches to `Sources` tab and attempts to add that source URL.

## Common issues

- **Invalid URL**: source input is malformed.
- **Duplicate source**: this exact URL is already added.
- **Unable to refresh source**: network/server/JSON format issue.
- **No apps available**: source parsed but app list is empty.

For troubleshooting context, see [Troubleshooting](../faq/common-issues.md).
