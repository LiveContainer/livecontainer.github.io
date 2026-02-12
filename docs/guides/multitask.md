# Multitask

LiveContainer now supports true multitasking on the latest iOS—no jailbreak or exploits required. Leveraging Duy Tran’s reverse engineering work on FrontBoardAppLauncher and utilizing multi-process app extensions, LiveContainer enables apps to run in separate processes and windows, effectively bypassing the system’s 3-app limit.

You can now launch multiple apps simultaneously in in-app virtual windows. These windows can be resized, scaled, and even displayed using the native Picture-in-Picture (PiP) feature. On iPads, apps can run in native window mode, displaying each app in a separate system window. And if you wish, you can choose to run apps in multitasking mode by default in settings.

## How to use

Before you start, please note that this feature is still in beta and may not work with all apps. Some apps may crash or behave unexpectedly when using this feature. We recommend using it with caution and only on apps that you are willing to experiment with.

1. Convert the app to a shared app
2. Long press the app icon and select "Run in Multitask"
3. Drag the top bar to move the app window.
4. Drag the resize handle at the right corner to adjust the app window size.

:::note
1. To use multitasking, ensure you select "Keep Extension" when installing via SideStore/AltStore.
2. If you want to enable JIT for multitasked apps, you’ll need a JIT enabler that supports attaching by PID.
:::
