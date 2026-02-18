---
title: Installation
sidebar_position: 1
---

# Installation
:::warning
Use only official, open-source builds of LiveContainer. Third-party closed-source builds can access all data inside your containers, including sensitive credentials.
:::

:::warning
The following sideloaders are **explictly** not supported. Please **do not** use them to install LiveContainer: Sideloadly, i4/3u Tools, NB Tool, and most online signers. 

While other tools can potentially install LiveContainer correctly, we still recommend following our guide to setup LiveContainer.
:::

## Choose a version

| Version                 | [Standalone LiveContainer](./installation/standalone.md) | [LiveContainer + SideStore](./installation/lc_sidestore.md) |
| -------------------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| Packaging                  | LiveContainer app only                                   | LiveContainer bundled with built-in SideStore               |
| Free account slot usage | 1 slot for LiveContainer (and 1 slot for on-device sideloader) | 1 slot with built-in SideStore         |

## Requirements

- iOS/iPadOS 15+
- iOS/iPadOS 16.0+ for multitasking
- AltStore 2.2.1+ or SideStore 0.6.2+ (Standalone LiveContainer)

## Recommended order

1. Pick a version from the table above.
2. Follow the install guide.
3. Import certificates to enable JIT-less signing.
4. Validate setup from the JIT-less diagnose page.
