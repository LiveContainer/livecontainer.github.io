---
title: JIT-Less Issues
sidebar_position: 6
---

# JIT-Less Setup & Diagnose

Use this page when certificate import fails or diagnose fields are not healthy.

## Healthy diagnose state

In `Settings -> JIT-Less Mode Diagnose`, target values are:

- `App Group Accessible = Yes`
- `Store` correctly detected
- `Patch Detected = Yes`
- `Certificate Data = Yes`
- `Password Found = Yes`
- `Certificate Last Update` refreshes after reopening store app

## App Group inaccessible or Store is `Unknown`

Checklist:

1. SideStore installed through AltServer.
2. LiveContainer installed directly through AltStore/SideStore.
3. Same Apple account used for SideStore and LiveContainer.
4. Entitlements were preserved by your install/sign flow.

If still broken, inspect `Entitlement File` in diagnose page and verify `com.apple.security.application-groups` exists and looks correct.

## Patch Detected is `No`

1. Force-close store app.
2. Reopen store app.
3. Return to LiveContainer and refresh diagnose page.
4. If still `No`, patch store again.

## SideStore crashes after patching

Reinstall SideStore with the recommended order, then repatch only after base install is stable.

## Wrong SideStore instance opened (SparseStore mismatch)

1. Patch with `Archive Only`.
2. Get patched IPA from LiveContainer documents in Files.
3. Install that patched IPA into the intended SideStore instance.

## Cert import worked before but now fails

If AltStore/SideStore was reinstalled via AltServer, re-import certificate in LiveContainer. Old references can become stale.
