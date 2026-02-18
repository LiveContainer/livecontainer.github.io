---
title: Data Management
sidebar_position: 4
---

# Data Management

## Clean unused data folders

:::note
This action is shown in the primary LiveContainer only.
:::

Deletes local data folders that are no longer referenced by any app container.

## Move App Group folder

:::note
This action is shown in the primary LiveContainer only.
:::

- `Move AppGroup from private to shared`
- `Move AppGroup from shared to private`

These two actions move App Group files between private and shared locations. They are blocked if the destination side is not empty.

## Move dangling shared folders

:::note
This action is shown in the primary LiveContainer only.
:::

Moves unreferenced shared resources back to private locations:

- shared data folders not used by shared apps
- shared tweak folders not used by shared apps (except `TweakLoader.dylib`)

Useful after migration/reinstall interruptions.

## Clean keychain

Deletes keychain items (`GenericPassword`, `InternetPassword`, `Certificate`, `Key`, `Identity`) from current keychain scope.
Use carefully because this is broad and can sign you out of apps.

## Clear icon cache

Clears app icon cache for currently loaded app list.

## Path tools

Use these tools when you need to inspect files manually or provide exact paths for debugging.

- `Copy ... Path`: copies the full path for `App Group Container`, `Container`, or `LiveContainer Bundle` to clipboard.
- `Open in Filza`: appears only when Filza is installed in LiveContainer, and opens the selected location directly in Filza.
