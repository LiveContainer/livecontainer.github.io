---
title: JIT-Less Diagnose Page
sidebar_position: 9
---

# JIT-Less Diagnose Page

<img width="300" alt="JIT-Less Diagnose Page" src="/img/jit-less-diagnose/1.png" />

If you successfully setup JIT-Less mode, your **JIT-Less Mode Diagnose** should look like the screenshot above. The most important indicator is "Certificate Last Update Date". This field should change if you reopens your store. If not, follow the following instructions to diagnose your setup.

## App Group ID, App Group Accessible, Store

- `App Group ID`: The identifier of the detected App Group.
  **Expected**: not `Unknown`.
- `App Group Accessible`: Indicates if LiveContainer can read/write to the shared container path.
  **Expected**: `Yes`.
- `Store`: The detected installation source (`AltStore`, `SideStore`, `ADP`, or `Unknown`).
  **Expected**: matches your real install source and is normally not `Unknown`.

If the App Group is inaccessible, resolve this issue before checking certificate details.

## Entitlement File

Tap `Entitlement File` to inspect the parsing results of the main executable's entitlements.

This view verifies:

- `Bundle Identifier`: Compares app bundle identifier with value derived from `application-identifier`.  
  **Expected**: marked correct.
- `Team ID`: Value from `com.apple.developer.team-identifier`.  
  **Expected**: valid Team ID, not `Unknown`.
- `get-task-allow`: Whether debug entitlement exists.  
  **Expected**: `Yes`.
- `com.apple.security.application-groups Correct`: Checks whether app-groups list is non-empty.  
  **Expected**: `Yes`.
- `keychain-access-groups Correct`: Checks whether LiveContainer keychain groups (`.shared` and indexed groups) are complete.  
  **Expected**: `Yes`.

The most important part is `com.apple.security.application-groups`, which determines whether LiveContainer can access SideStore's app group.
This item should exist and its content should look like `group.com.rileytestut.AltStore.A1B2C3D4E5` and `group.com.SideStore.SideStore.A1B2C3D4E5`. If this item is missing or it looks like `group.com.SideStore.SideStore.A1B2C3D4E5.A1B2C3D4E5`, then this is an bug of SideStore, not LiveContainer. The only thing you can do is to remove both LiveContainer and SideStore, and then install them again and check if this issue is solved.

It is reported that if LiveContainer's entitlement is incorrect, you can't activate/deactivate apps in SideStore. **Please do not submit issues about incorrect entitlement as it is not a LiveContainer issue.**

## Certificate details

This section displays the status of the signing certificate used for JIT-less mode.

- `Certificate Last Up Date`: The timestamp of the last certificate refresh/import.  
  **Expected**: a real timestamp, not `Unknown`.
- `Certificate Team ID`: The Team ID extracted from the certificate.  
  **Expected**: Your Apple Developer Team ID, not `Unknown`.
- `Expected Team ID`: Team ID read from LiveContainer entitlement, used for mismatch detection.  
  This row appears only when mismatch is detected.
- `Certificate Status`: `Valid`, `Revoked`, or `Unknown`.  
  **Expected**: `Valid`.
- `Certificate Validate Until`: The expiration date of the certificate.  
  **Expected**: a real timestamp while certificate is valid.
- `Certificate Data Found`: whether imported certificate data exists.
  **Expected**: `Yes`.
- `Certificate Password Found`: whether imported certificate password exists.
  **Expected**: `Yes` in normal certificate export/import flows.

## Test JIT-Less Mode

The `Test JIT-Less Mode` button performs a functional validation rather than a static check.

When tapped, LiveContainer will:
1. Create a temporary test app bundle.
2. Sign it using the current certificate and password.
3. Verify code-sign validity of the signed test dylib (`TestJITLess.dylib`).

The button requires `Certificate Data Found = Yes` to start. If password/config is still invalid, signing fails in this step.

If this test fails, JIT-less launch will likely fail.
