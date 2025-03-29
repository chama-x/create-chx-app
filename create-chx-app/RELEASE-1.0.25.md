# Release 1.0.25

## Security Updates

This release addresses several security vulnerabilities identified in NPM audit:

- **axios**: Updated from 1.6.7 to 1.8.4
  - Fixed SSRF vulnerability (GHSA-8hc4-vh64-cxmj, GHSA-jr5f-v2jv-69x6)

- **vite**: Updated from 5.0.12 to 6.2.3
  - Major version upgrade to fix esbuild vulnerability (GHSA-67mh-4wv8-2f99)

- **vitest**: Updated from 1.2.1 to 3.0.9
  - Major version upgrade to fix Remote Code Execution vulnerability (GHSA-9crc-q9x8-hgqq)

- **@vitejs/plugin-react**: Updated to 1.3.2
  - Downgraded for compatibility with Vite 6.2.3

- **lint-staged**: Updated from 15.2.0 to 15.5.0
  - Fixes micromatch ReDoS vulnerability (GHSA-952p-6rrq-rcjv)

## Changes

- Updated dependencies in both CLI package and template package
- Implemented major version updates for Vite and Vitest to address security issues
- Maintained compatibility with existing configurations
- Updated package version to reflect the security fixes 