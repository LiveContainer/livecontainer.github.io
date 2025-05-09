# Multitask

LiveContainer now supports true multitasking on the latest iOS—no jailbreak or exploits required. Leveraging Duy Tran’s reverse engineering work on FrontBoardAppLauncher and utilizing multi-process app extensions, LiveContainer enables apps to run in separate processes and windows, effectively bypassing the system’s 3-app limit.

:::note
This is still technically a PoC, so not all apps will work yet, and it may be bound to stricter memory limit.
:::

## How to use

Before you start, please note that this feature is still in beta and may not work with all apps. Some apps may crash or behave unexpectedly when using this feature. We recommend using it with caution and only on apps that you are willing to experiment with.

1. Convert the app to a shared app
2. Long press the app icon and select "Run in Multitask"
3. Drag the top bar to move the app window.
4. Drag the resize handle at the right corner to adjust the app window size.

## Limitations

Memory limit: The memory limit for each app is 400MB.

## Known issues

`This container is currently in use livecontainer2`

You may encounter this error when trying to multitask an app which is already running in another LiveContainer or have been launched before. It is not a bug but a limitation of LiveContainer. To fix it, just restart another LiveContainer or kill the app in the other LiveContainer.

---

`lc.container.unableToMoveContainerFromLiveProcess`

This is caused some unknown trash from previous version of LiveContainer. Here's how to fix it:

1. Install Filza inside LiveContainer
2. Find Your App Container ID in App Setting
3. Go to settings -> data management
4. Click "Open in Filza" under "Copy App Group Cointainer Path"
5. Go to LiveContainer -> Data -> Application
6. Delete the folder with the same name as your app container ID
