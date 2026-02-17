---
title: Add to Home Screen
sidebar_position: 1
---

# Add to Home Screen
There are 3 ways to add an app to you home screen. The first "Launch App Shortcut" is the best way to add an app to your home screen.

## Method 1: Launch App Shortcut (Recommended)
:::note
This feature is available in LiveContainer 3.6.65+. iOS 16+ is required.

Please make sure LiveContainer is installed with at least the "LaunchAppExtension" and "LaunchAppExtensionHelper" extension (select "Use Main Profile" or "Keep All Extensions" during installation).
:::

This is the recommended way to add an app to your Home Screen. It launches the app directly without opening LiveContainer’s UI first, and it automatically finds a free LiveContainer to open the app. This saves about 1~2 seconds per launch compared to the other methods below.

Follow these steps to add an app to your home screen using Launch App Shortcut:
### Save Icon & Copy Launch URL
:::note
If an app has multiple containers, hold the app and select the target container first to get its launch URL.
:::
1. Save App Icon: Hold the app → tap "Add to Home Screen" → tap "Save App Icon" → select an icon style you prefer → save it (we’ll use it later).
2. Copy Launch URL: Hold the app → tap "Add to Home Screen" → tap "Copy Launch URL".
<p>
<img height="500px" src="/img/add-to-home-screen/1.jpg" />
</p>

### Create and Set Up the Shortcut
3. Open Apple’s Shortcuts app. If you can’t find it, download it from the App Store.
4. Tap the + button in the top-right corner to create a new shortcut.
5. In the "Search Actions" bar, search for "Launch App," choose the LiveContainer action, and add it to your shortcut.
6. Tap the gray "Launch URL" text in the first action and paste the launch URL you copied in step 2.
7. Tap the "x" button to close the keyboard.
8. Tap the play/run button to test the shortcut. If the app opens, the shortcut works.
<p>
<img height="500px" src="/img/add-to-home-screen/2.jpg" />
<img height="500px" src="/img/add-to-home-screen/3.jpg" />
<img height="500px" src="/img/add-to-home-screen/4.jpg" />
<img height="500px" src="/img/add-to-home-screen/6.jpg" />
<img height="500px" src="/img/add-to-home-screen/7.jpg" />
</p>

### Add the Icon to the Home Screen
9. Go back to the shortcut editor. If it closed, tap the "..." button in the top-right corner of your shortcut to reopen it.
10. Tap the share button, scroll down, and select "Add to Home Screen."
11. Tap the text under the icon to set a name.
12. Tap "Image" → tap "Choose File" → select the image file you saved in step 1.
13. Tap "Add" to add the icon to your home screen.
14. To add more apps to your home screen, hold your shortcut, tap "Duplicate," and edit the Launch URL to another app’s URL.
<p>
<img height="500px" src="/img/add-to-home-screen/8.jpg" />
<img height="500px" src="/img/add-to-home-screen/9.jpg" />
<img height="500px" src="/img/add-to-home-screen/10.jpg" />
</p>
### Add SideStore to the Home Screen
If you installed the "LiveContainer+SideStore" version, you can also add SideStore to your home screen. Create a shortcut and set the launch URL to `sidestore://`.

## Method 2: Launch URL Shortcut
This is basically the same as the "Launch App Shortcut" method. The only difference is in the "Create and Set Up the Shortcut" stage. Instead of using LiveContainer's shortcut action, we use "Open URLs" action instead.

### Create and Set Up the Shortcut
3. Open Apple’s Shortcuts app. If you can’t find it, download it from the App Store.
4. Tap the + button in the top-right corner to create a new shortcut.
6. In the "Search Actions" bar, search for "Open URLs."
7. Tap the gray "URL" text and paste the launch URL you copied in step 2.
8. Tap the "x" button to close the keyboard.
9. Tap the play/run button to test the shortcut. If the app opens, the shortcut works.

## Method 3: Create App Clip (Deprecated)
You can also add an app to your home screen by creating an app clip. This method is not recommended because the App Clip stays in the app switcher, requires extra jumps to open, and the MDM profile remains in Settings even after the icon is removed, so it must be deleted manually.

1. Hold the app → tap "Add to Home Screen" → tap "Create App Clip" → select an icon style you prefer → tap "Allow" to download the profile.
2. Open the iOS Settings app → tap "Profile Downloaded" → in the popup, tap "Install" and complete the installation.
3. You’ll find the app icon on your home screen.