---
title: Multitask
sidebar_position: 10
---

# Multitask

LiveContainer can run apps in multitask mode, so you can keep multiple apps/containers active and switch between them quickly.

## Requirements

1. iOS/iPadOS 16.0+.
2. Install LiveContainer with app extensions kept (`Keep App Extensions` in SideStore/AltStore install flow).

If extensions are missing, multitask launch can fail with a `LiveProcess extension not found` error.

## Start multitask

1. Convert the target app to `Shared App` in app settings (if not already shared).
2. Hold the app card.
3. Tap `Multitask`.

You can also enable `Auto Launch in Multitask Mode` in settings, then the main `Run` button launches that app directly in multitask mode.

## Multitask modes

In `Settings -> Multitask`, current builds provide two modes:

1. `Virtual Window`: uses in-app floating windows (dock, PiP, maximize/minimize behavior).
2. `Native Window`: opens each app in its own system window. (requires iPadOS 16.1+)

## Multitask settings

Options available in `Settings -> Multitask`:

- `Multitask Mode`: Choose between `Virtual Window` and `Native Window`.
- `Auto Launch in Multitask Mode`: Launch apps in multitask mode by default when tapping `Run`.

When `Multitask Mode` is set to `Virtual Window`, the following options appear:

- `Launch Multitask Maximized`: New windows open maximized by default.
- `Only One App on Stage`: Maximizing an app automatically minimizes other multitask windows.
- `Auto End PiP`: Returning to the app window automatically ends the PiP session.
- `Skip Terminated Screen`: When an app exits, the window closes immediately instead of showing the terminated summary screen.
- `Restart Terminated App`: If enabled with `Skip Terminated Screen`, the app window automatically relaunches upon termination.
- `Bottom Window Bar`: Moves the window control bar to the bottom of the screen.
- `Redirect URL to Host`: When a multitask app opens supported URL schemes, let the main LiveContainer handle them (instead of the child process) to improve reliability of app-to-app URL jumps.
- `Dock Width`: Adjusts the width of the multitask dock.

## Container behavior

- Multitask instances are container-based.
- If you launch a container already running in multitask, LiveContainer brings the existing window to the front instead of creating a duplicate.
- If you attempt a standard launch while multitask apps are active, LiveContainer will ask for confirmation before proceeding.

## JIT with multitask

If `Launch with JIT` is enabled for an app, multitask launch will first go through JIT acquisition, then continue into the multitask window.

For best stability, use a JIT enabler that supports PID-based attach flow (for example, StikDebug).  
This is the recommended path for multitask + JIT.
