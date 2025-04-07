---
title: 3. Signing / App Installation Related
sidebar_position: 6
---

# 3. Signing / App Installation Related

## 3.1. A wall of error including "Signature Invalid"

**Please perform a test in LiveContainer settings -> Test JIT-Less Mode before submitting any issues about this.**

Probably caused by certificate used to sign the app being revoked before expires.
Solution: Long press app -> Settings -> scroll down -> force re-sign

It is reported that some version of CydiaSubstrate cannot be signed by AltSign. So if the error message contains "CydiaSubstrate", please try switching to ZSign. See item 3.2 below.

## 3.2. /Users/runner/Library/Developer/Xcode/DerivedData/AltStore-dunvejkuqerofjghtqolpzgexuyv/SourcePackages/checkouts/AltSign/Sources/ldid/../ldid-core/ldid.cpp(1368): _assert(): end >= size - 0x10 (or something like that)

This is seen most on Flutter(Dart) apps and is caused by AltSign's strict check on app binaries.
Solution: Switch signer to ZSign.

1. LiveContainer settings -> Default Signer -> Select ZSign
3. Long press app -> Settings -> Signer -> Select ZSign

## 3.3. The bundle “OpenSSL” couldn’t be loaded

First, please check whether SideStore/AltStore is expired or not.
If SideStore/AltStore is not expired, please switch to ZSign. See steps in item 3.2.

This issue is likely to be caused by SideStore's backup is signed by another certificate or expired.

## 3.4. LiveContainer crash when installing app

The app you are installing might not be compatible with AltSign, please switch to ZSign and try again. See steps in item 3.2.
