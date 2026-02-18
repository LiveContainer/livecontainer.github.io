---
title: Install & Signing Issues
sidebar_position: 5
---

# Installation & Signing Errors

This page covers both host install failures and guest IPA signing/import failures.

## "The executable was signed with invalid entitlements"
SideStore 0.6.2+/AltStore 2.2.1+ is required to install LiveContainer 3.2.58. Please consider upgrading.

## The App is Signed with Latest Certificate but its Code Signature is Invalid or A wall of error including "Invalid Signature"

1. Check if JIT-Less mode is correctly setup. See [JIT-Less Mode Diagnose](./jit-less-mode-setup.md) for more information.
2. If diagnose passes, force re-sign app from app settings.

## LiveContainer crashes while importing IPA

Common causes:

- invalid IPA package structure
- signer incompatibility