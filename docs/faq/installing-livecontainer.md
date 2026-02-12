---
title: Install & Signing Issues
sidebar_position: 5
---

# Installation & Signing Errors

This page covers both host install failures and guest IPA signing/import failures.

## LiveContainer won't open on iOS 18.2+

Use LiveContainer 3.0.0 or newer. If it still fails after upgrade, reboot and retry once.

## "The executable was signed with invalid entitlements"

This usually indicates installer/signing mismatch.

Checklist:

1. Use AltStore 2.0+ or SideStore 0.6.0+.
2. Install LiveContainer directly through AltStore/SideStore.
3. Keep required extensions when your installer asks (`Use Main Profile` or `Keep All Extensions`).
4. Ensure LiveContainer and SideStore are signed under the same Apple account (`Settings -> General -> VPN & Device Management`).

## "Signature Invalid" or long signing error output

1. Run `Settings -> Test JIT-Less Mode` first.
2. If diagnose fails, fix certificate import before retrying app install/sign.
3. If diagnose passes, force re-sign app from app settings.

## LiveContainer crashes while importing IPA

Common causes:

- invalid IPA package structure
- signer incompatibility

## If install/sign still fails

Provide in issue:

- installer used (AltStore/SideStore/other)
- exact error text
- LiveContainer version + hash
- iOS version + device model
- exported logs (`Settings -> Data Management -> Export Logs`)
