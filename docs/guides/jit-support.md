---
title: JIT Support
sidebar_position: 2
---

# JIT Support

LiveContainer integrates with multiple JIT enablers. Configure them in `Settings -> JIT`.

## Correct launch sequence (important)

Use this order to avoid false failures:

1. Do **not** manually enable JIT for LiveContainer first.
2. Configure your JIT enabler in settings.
3. Mark target app with `Launch with JIT`.
4. Tap `Run` and keep the waiting dialog visible.
5. If your enabler is manual, trigger JIT from the enabler while the waiting dialog is still open.

## Enable JIT for an app

1. Long-press app -> `Settings` -> enable `Launch with JIT`.
2. Configure one enabler below.
3. Launch app. LiveContainer enters a waiting state until JIT is attached.
4. If your enabler is manual, trigger JIT while waiting prompt is still open.

## Enabler matrix

- **StikDebug**: best default for most users.
- **StikDebug (Another LiveContainer)**: runs JIT flow through another LC instance.
- **SideStore**: good if you already use SideStore flow.
- **SideJITServer / JITStreamer 2.0**: for self-hosted server workflows.
- **JITStreamer-EB (Relaunch)**: browser/relaunch-based workflow.

## StikDebug (recommended)

:::note
StikDebug support has existed since older 3.3.51+ era builds and remains the recommended path in current builds.
:::

1. Install StikDebug and import pairing file.
2. Choose `StikDebug` in LiveContainer JIT settings.
3. Launch app and let LiveContainer request attach.

If automatic attach fails, open StikDebug manually and trigger JIT while waiting dialog is visible.

## StikDebug (Another LiveContainer)

This mode requires an available secondary LiveContainer instance.

If you see no available target instance:

- install another LiveContainer instance
- close running instances using needed container
- or switch to another enabler

## SideStore

1. Select `SideStore` enabler.
2. Launch app, wait for prompt.
3. Switch to SideStore and enable JIT for LiveContainer.
4. Return to LiveContainer.

Note: SideStore URL flow may not always return to LiveContainer automatically on all setups, so manual app switching is expected.

## SideJITServer / JITStreamer 2.0

1. Enter server address and device UDID in JIT settings.
2. Launch app.
3. LiveContainer contacts server endpoint automatically.

## JITStreamer-EB (Relaunch)

Use when your workflow depends on browser-based relaunch behavior.

## Common failures

### "Waiting for JIT" never completes

- verify selected enabler
- verify enabler app/server is reachable
- keep waiting prompt open while triggering manual flow
- if SideStore path is used, confirm VPN/connectivity prerequisites before triggering

### Works in normal launch, fails in multitask

Use an enabler that supports PID-based attach.

## Related

- [Multiple LiveContainers](./multiple-livecontainers.md)
- [JIT-Less Diagnose Page](./jit-less-diagnose-page.md)
- [Troubleshooting](../faq/common-issues.md)
