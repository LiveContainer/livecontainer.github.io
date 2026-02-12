---
title: Installation
sidebar_position: 1
---

# Installation

This page helps you choose the right installation path and avoid common setup issues.

:::warning
Use only official, open-source builds of LiveContainer. Third-party closed-source builds can access all data inside your containers, including sensitive credentials.
:::

## Choose your installation path

| Difference                 | [Standalone LiveContainer](./installation/standalone.md) | [LiveContainer + SideStore](./installation/lc_sidestore.md) |
| -------------------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| Packaging                  | LiveContainer app only                                   | LiveContainer bundled with built-in SideStore               |
| Install complexity         | Simpler baseline flow                                    | More setup steps and tooling choices                        |
| Free account slot pressure | Standard slot usage model                                | Better slot efficiency with integrated refresh flow         |
| Certificate import flow    | Import from external AltStore/SideStore                  | Import from built-in SideStore after setup                  |

## Quick requirements

- iOS/iPadOS 15+
- iOS/iPadOS 16.0+ for multitasking
- AltStore 2.0+ or SideStore 0.6.0+ (Standalone LiveContainer)

## Recommended order

1. Pick an installation path from the table above.
2. Complete the install guide for that path.
3. Import certificates to enable JIT-less signing.
4. Validate setup from the JIT-less diagnose page.

## After installation

- [JIT Support](./guides/jit-support.md)
- [JIT-Less Diagnose Page](./guides/jit-less-diagnose-page.md)
- [Multiple LiveContainers](./guides/multiple-livecontainers.md)
- [Troubleshooting FAQ](./faq/common-issues.md)
