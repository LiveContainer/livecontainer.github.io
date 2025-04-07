# App Settings

After installing apps, you can configure settings for each app by long-pressing the app icon in the LiveContainer app. This allows you to customize how the app behaves and interacts with the LiveContainer environment.

## DATA

### Shared App

Converting an app to a shared app allows you to run the app in multiple LiveContainer instances. When you want to delete the app, you should convert it back to a private app first.

## Containers

You can edit each container by press its id.

To open one app in both containers or to use the multi-account feature, you need to set "New Data Folder" and switch the data folder by long-pressing the app icon in the LiveContainer app.

### Launch with JIT

This option allows you to launch the app with JIT enabled.

### Lock App

Lock App

Hide App: To completely hide apps, enable Strict Hiding mode in settings.

Strict Hiding Mode

### Signer

It is recommended to use `ZSign` as the default signer.

### Language

Just like the language in the system settings, you can set the language for the app.

## FIXES

### Fix File Picker & Local Notification

If you encounter following issues, try to enable this option:

- Can't select file
- File picker not working
- App can't proceed without enabling notification

### Fix Black Screen

If app show a black screen and crash after 10s, try to enable this option.

:::note
This applies to LiveContainer 3.1.55+
:::

The black screen fix is not automatically applied after 3.1.55. You can enable it by: Long press app -> Settings -> Enable "Black Screen Fix"

### Hide LiveContainer from Dyld Api

Might help bypass some app's injection detection.

### Don't inject TweakLoader

Might help bypass some app's injection detection.

### Spoof SDK Version

Spoof SDK Version forces system libraries to operate in the SDK version the app is built with.

### (Legacy) Fix File Picker

Fix file picker not responding when hitting 'open' by forcing this app to copy selected files to its inbox. You may view imported files in the 'Inbox' folder in app's data folder.

### Bypass AssertBarrierOnQueue

Might prevent some games from crashing, but may cause them to be unstable.

### Force Sign

Try to sign again if this app failed to launch with error like 'Invalid Signature'. If this still don't work, renew JIT-Less certificate.
