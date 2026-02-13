---
title: Multiple Containers and External Data Folder
sidebar_position: 4
---

# Multiple Containers and External Data Folder

By using multiple containers within a single application, you can maintain entirely separate, isolated data sets and bind external folders directly as container storage. This functionality allows you to manage multiple accounts simultaneously without the friction of repeated logins and provides the flexibility to start with a fresh application state while keeping all your existing data intact.

## Open container settings

1. Hold an app card in LiveContainer.
2. Tap `Settings`.
3. Go to the `Container` section.

## Create multiple containers for one app

### Create a new local container

1. Tap `New Data Folder`.
2. Enter a display name.
3. Confirm to create.

The container is then added to this app.

### Switch container when launching

When an app has multiple containers:

1. Hold the app card.
2. Use the `Containers` picker in the context menu.
3. Select the container you want.

### Set default container

1. Open a container entry in app settings.
2. Tap `Set Default Container`.

This is the container the app uses by default when you tap `Run`.

## Add an external data folder

1. In app settings, tap `Select External Storage`.
2. Pick a folder in the system file picker.
3. LiveContainer creates a bookmark and binds this folder as a container.

:::note
Most apps do not support containers on external storage and are very likely to crash.

If this external folder later becomes unavailable, this container can become partially unavailable until access is restored.
:::

## Container operations

Open a container detail page to manage it.

- `Container Name`: only changes the name shown in LiveContainer UI. It does not rename the actual container folder.
- `Container Folder Name`: shows the real folder identifier for this container. Use this value to confirm exact paths or troubleshoot data location. This field is read-only in app settings.
- `Isolate App Group`: routes app-group container paths for the guest app to this container's isolated location instead of the shared app-group path. This helps reduce cross-container data mixing for app-group-based data.
- `Spoof Identifier For Vendor`: generates and stores a persistent spoofed `identifierForVendor` for this container. This helps separate app identity state between containers for apps that rely on `identifierForVendor`.
- `Set Default Container`: makes this container the default one used when you tap `Run`.
- `Open Data Folder`: opens this container's data folder for manual file import, export, or inspection.
- `Unbind`: removes this container from the app's container list, but keeps container files on disk.
- `Delete Data`: removes files inside this container but keeps the container entry and `LCContainerInfo.plist`.
- `Clean Keychain`: removes keychain data associated with this container.
- `Remove Container`: removes the container entry and deletes the container folder.

## Limits and behavior

- Maximum containers per app: `128` (limited by keychain group pool).
- If a container is currently in use by a running LiveContainer instance, destructive operations are blocked.
- Shared/private app conversion may move data paths. Re-check container selection after conversion.

## Related

- [App Settings](./app-settings.md)
- [Data Management](./data-management.md)
- [Multiple LiveContainers](./multiple-livecontainers.md)
