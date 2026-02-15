---
title: JIT-Less Issues
sidebar_position: 6
---

# JIT-Less Setup & Diagnose

Use this page when `Settings -> JIT-Less Mode Diagnose` shows red values or `Test JIT-Less Mode` fails.

Healthy state:

- `App Group ID` is not `Unknown`
- `App Group Accessible = Yes`
- `Store` matches your real install source (not `Unknown`)
- `Certificate Data Found = Yes`
- `Certificate Password Found = Yes`
- `Certificate Status = Valid`
- `Certificate Team ID` matches `Expected Team ID`
- `Certificate Last Update Date` is not `Unknown`

## `App Group ID = Unknown` / `App Group Accessible = No` / `Store = Unknown`

Causes:

- Entitlements were broken.
- LiveContainer was not installed through AltStore/SideStore or Impactor.
- LiveContainer and Store are signed with different Apple accounts (Team ID mismatch).

Fixes:

1. Ensure LiveContainer and AltStore/SideStore are signed with the same Apple account.
2. Reinstall LiveContainer via AltStore/SideStore and keep required extensions/entitlements (`Use Main Profile` / `Keep All Extensions`).
3. In Diagnose -> `Entitlement File`, verify: `get-task-allow = Yes`, `application-groups Correct = Yes`, and `keychain-access-groups Correct = Yes`.

## `Certificate Data Found = No` / `Certificate Password Found = No` / `Certificate Last Update Date = Unknown`

Causes:

- Certificate import was not completed.

Fixes:

1. Re-import the certificate in `Settings` (file import or import from Store).
2. Refresh Diagnose.

## `Certificate Team ID` does not match `Expected Team ID` (red)

Causes:

- Imported `.p12` belongs to a different Apple Developer Team.

Fixes:

1. Remove current certificate data.
2. Re-import a certificate that matches the current LiveContainer signing account.

## `Certificate Status = Revoked/Unknown` / `Certificate Validate Until = Unknown` / `Test JIT-Less Mode` fails

Causes:

- Certificate is revoked/expired.

Fixes:

1. Re-import a valid certificate and ensure password is correct.
2. Reopen Store and refresh apps, then return and refresh Diagnose.
3. Run `Test JIT-Less Mode` again.
4. If it still fails, reinstall or re-patch Store.
