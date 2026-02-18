---
title: Multiple / External Containers
sidebar_position: 4
---

# Multiple / External Containers
:::note
You can create up to 128 containers per app after 3.2.58 and 3 before. You can run the same app with different Container in all LiveContainers at the same time.
:::
:::note
Most apps do not support containers on external storage and are very likely to crash.

If this external folder later becomes unavailable, this container will also become unavailable until access is restored.
:::

By using multiple containers within a single application, you can maintain entirely separate, isolated data for one app.

By using external containers, you can save app's data outside LiveContainer, which is useful if you:
- wish to manage the app's files in a file manager while using the app in LiveContainer
- maintain access to the container even if the app is shared

## Open container settings

1. Hold an app card in LiveContainer.
2. Tap `Settings`.
3. Go to the `Container` section.

## Create multiple containers for one app

### Create a new container

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

1. In app settings, tap `Select External Data Folder`.
2. Pick a folder in the system file picker.
3. LiveContainer binds this folder as a container.

## Container operations

Open a container detail page to manage it.

- `Container Name`: only changes the name shown in LiveContainer UI. It does not rename the actual container folder.
- `Container Folder Name`: shows the real folder identifier for this container. Use this value to confirm exact paths or troubleshoot data location. This field is read-only in app settings.
- `Isolate App Group`: routes app-group container paths for the guest app to this container's isolated location instead of the shared app-group path.
- `Spoof Identifier For Vendor`: generates and stores a persistent spoofed `identifierForVendor` for this container. This helps separate app identity state between containers for apps that rely on `identifierForVendor`.
- `Set Default Container`: makes this container the default one used when you tap `Run`.
- `Open Data Folder`: opens this container's data folder for manual file import, export, or inspection.
- `Unbind`: removes this container from the app's container list, but keeps container files on disk.
- `Delete Data`: removes files inside this container but keeps the container`.
- `Clean Keychain`: removes keychain data associated with this container.
- `Remove Container`: removes the container and deletes the container folder.

## Limits and behavior

- Maximum containers per app: `128` (limited by keychain group pool).
- If a container is currently in use by a running LiveContainer instance, destructive operations are blocked.
