# Add to Home Screen
There are 3 ways to add an app to you home screen. The first "Launch App Shortcut" is the best way to add an app to your home screen.

## Mathod 1: Launch App Shortcut (Recommended)
:::note 
This feature is available in LiveContainer 3.6.62+
Please make sure LiveContainer is installed with at least "LaunchAppExtension" extension ("Use Main Profile" or "Keep All Extensions" is selected when installing)
:::

This is the most recommended way of adding an app to HomeScreen, as it directly launch the app without the need of open LiveContainer's UI first, and it automatically finds a free LiveContainer to open the app, which saves you approximately 1.5~3s each launch comparing to other methods below.

Follow these steps to add an app to your home screen using Launch App Shortcut:
### Save Icon & Copy Launch URL
1. Save App Icon: Hold the app -> tap "Add to Home Screen" -> tap "Save App Icon" -> Select an icon style you prefer -> Save it and we'll use it later
2. Copy Launch URL: Hold the app -> tap "Add to Home Screen" -> tap "Copy Launch URL"
<p>
<img height="500px" src="/img/add-to-home-screen/1.jpg" />
</p>

### Create and Setup the Shortcut
3. Open Apple's Shortcuts App. If you can't find it you may download it from AppStore.
4. Press the + button on top right to create a new shortcut
5. In "Search Actions" bar type and search "Launch App", choose the one from LiveContainer and tap to add it to your shourcut
6. In "Search Actions" bar type and search "Open URLs". Make sure it opens the result of the previous "Launch App" action. If not, tap the gray "URL" text, then from the bar above the keyboard, tap "Launch App". (Unfortunately we can't embed the open URL action directly into the Launch App action due to iOS limitations which prohibits background process from Opening URL)
7. Tap the gray "Launch URL" text in the first action, paste the launch URL you copied just now in step 2.
8. Press "x" button to close the keyboard
9. Tap the play/run button to test the shortcut. If the app opens, then the shortcut is working.
<p>
<img height="500px" src="/img/add-to-home-screen/2.jpg" />
<img height="500px" src="/img/add-to-home-screen/3.jpg" />
<img height="500px" src="/img/add-to-home-screen/4.jpg" />
<img height="500px" src="/img/add-to-home-screen/5.jpg" />
<img height="500px" src="/img/add-to-home-screen/6.jpg" />
<img height="500px" src="/img/add-to-home-screen/7.jpg" />
</p>

### Adding Icon to Home Screen
10. Go back to the shoutcut editor. If it's accidentally closed, you may tap the "..." button in top right corner of your shoutcut to reopen it.
11. Tap the share button, slide down, select "Add to Home Screen"
12. Tap the text under the icon to set a name
13. Tap "Image" -> Tap "Choose File" -> Select the image file you saved in step 1
14. Tap "Add" to add the icon to home screen
15. If you want to add more apps to home screen, you can directly hold your shortcut, tap "duplicate", and edit the Launch URL to another app's URL.
<p>
<img height="500px" src="/img/add-to-home-screen/8.jpg" />
<img height="500px" src="/img/add-to-home-screen/9.jpg" />
<img height="500px" src="/img/add-to-home-screen/10.jpg" />
</p>
### Adding SideStore to Home Screen
If you installed "LiveContainer+SideStore" version, you may also add SideStore to your home screen. You can directly create a shoutcut, but set the launch URL to `sidestore://`.

## Method 2: Launch URL Shortcut
It's basically the same as using "Launch App Shortcut" method. The only difference is in the "Create and Setup the Shortcut" stage

### Create and Setup the Shortcut
3. Open Apple's Shortcuts App. If you can't find it you may download it from AppStore.
4. Press the + button on top right to create a new shortcut
6. In "Search Actions" bar type and search "Open URLs".
7. tap the gray "URL" text, paste the launch URL you copied just now in step 2.
8. Press "x" button to close the keyboard
9. Tap the play/run button to test the shortcut. If the app opens, then the shortcut is working.

## Method 3: Create App Clip (Not Recommended)
You may also add an app to your home screen by creating an app clip. This method is not recommended because the App Clip will itself remains in the app switcher and more jumps are needed. Also the MDM profile remains in your settings even after the icon is deleted, so it has to be manually deleted.

1. Hold the app -> tap "Add to Home Screen" -> tap "Create App Clip" -> Select a icon style you prefer -> tap "Allow" to download the profile.
2. Open iOS Settings App ->tap "Profile Downloaded" -> In the popup tap "Install" and goes through the installation process
3. You'll find your app's icon in your home screen