---
title: Multiple Instances
sidebar_position: 1
---

# Multiple LiveContainers

Multiple LiveContainer instances let you run and route apps across separate containers, while sharing app entries when needed.

## What this is for

- run apps across LC primary/secondary instances
- prepare multi-account workflows with multiple data folders

## Install another LiveContainer

Go to `Settings -> Multi LC`.

From there you can prepare and install instances such as `LiveContainer2` / `LiveContainer3`.

## Installation methods

- standard share/install flow
- built-in SideStore flow (when available)

If install fails with unsupported method, your current signing/install path likely does not provide the required App Group-compatible behavior.

## Verify installation status

In Multi LC list:

- checkmark: instance URL scheme detected
- cross: not detected / not installed

Open each new instance once after installation to initialize runtime state.

## Use apps across instances

1. In primary instance, convert app to `Shared App`.
2. Launch the app from secondary instance.
3. For multi-account scenarios, create/select different data folders per launch.

## Common pitfalls

- app not visible in secondary instance: not converted to shared app
- container-in-use errors: same container already active elsewhere
- JIT handoff mode has no free target instance: close one or install another instance

## Related

- [Multitask](./multitask.md)
- [App Settings](./app-settings.md)
- [Troubleshooting](../faq/common-issues.md)
