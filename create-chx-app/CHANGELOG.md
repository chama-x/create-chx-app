# Changelog

All notable changes to create-chx-app will be documented in this file.

## [1.0.25] - 2024-06-14

### Security

- Fixed security vulnerabilities identified in npm audit:
  - Updated axios to 1.8.4 (SSRF vulnerability)
  - Updated vite to 6.2.3 (major version upgrade for esbuild vulnerability)
  - Updated vitest to 3.0.9 (major version upgrade for Remote Code Execution vulnerability)
  - Updated @vitejs/plugin-react to 1.3.2 (for Vite 6 compatibility)
  - Updated lint-staged to 15.5.0 (micromatch ReDoS vulnerability)

### Improved

- Enhanced security posture with patched dependencies
- Implemented major version updates for Vite and Vitest to address security issues
- Maintained compatibility with existing configurations

## [1.0.16] - 2024-06-12

### Fixed

- Fixed CSS animation class references that were causing potential issues
- Replaced references to non-existent animations with correct ones
- Fixed gradient-text-x class to use the shimmer animation directly
- Fixed float-element class to use direct animation reference
- Fixed slide-up animation to reference the correct animate-slide-in-up class

### Improved

- Eliminated inconsistencies between class references and available animations
- Ensured all animation classes reference existing and working animations
- Improved stability of CSS animations throughout the template

## [1.0.15] - 2024-06-11

### Fixed

- Fixed critical CSS syntax error in the animation keyframes
- Removed unsupported trigonometric functions (cos() and sin()) from CSS
- Simplified animation transforms with standard CSS calculations

### Improved

- Enhanced startup reliability with templates now starting without CSS parsing errors
- Cleaner console output without parsing errors
- Immediate development server startup

## [1.0.14] - 2024-06-10

### Added

- Added @react-spring/web for interactive UI components
- Added react-helmet-async for SEO and document head control
- Added react-hot-toast for elegant notification system
- Added web-vitals for Core Web Vitals tracking
- Added @tailwindcss/typography for rich text formatting

### Fixed

- Fixed ESLint compatibility by pinning exact package versions
- Resolved dependency conflicts for smoother installation

### Improved

- Optimized developer experience with zero-config setup
- Ensured predictable installs through exact version pinning

## [1.0.11] - 2024-06-08

### Fixed

- Replaced vite-plugin-svgr with a custom SVG loader for Vite 6 compatibility
- Implemented a direct integration using @svgr/core for SVG support
- Added proper Babel dependencies for SVG transformation

### Improved

- Enhanced compatibility with Vite 6
- More robust SVG handling with direct SVGR integration
- Resolved final compatibility issues

## [1.0.10] - 2024-06-07

### Fixed

- Fixed ESLint compatibility issue by downgrading to v8.56.0
- Pinned exact versions for all dependencies to prevent conflicts
- Ensured compatibility with TypeScript ESLint parser

### Improved

- More predictable installation with exact versions
- Eliminated semver range issues
- Improved debuggability with consistent dependencies

## [1.0.9] - 2024-06-06

### Added

- Initial public release of create-chx-app
- Created a React template with modern stack:
  - React 18.3.1
  - TypeScript 5.6.2
  - Vite 6.0.5
  - Tailwind CSS 3.4.1
  - React Query, Zustand, React Router, etc.

### Features

- Modern and flexible React template
- Developer-friendly architecture
- Numerous UI components and animations
- Complete TypeScript support
- Fast development server setup

## 1.0.21 (March 29, 2025)

- Added missing framer-motion dependency
- Fixed Netlify build errors
- Ensured proper bundling of vendor dependencies

## 1.0.20 (March 29, 2025)

- Fixed incorrect Button import paths
- Fixed build issues on Netlify
- Path fixes in ComponentsDemo.tsx and LoginForm.tsx

## 1.0.19 (March 29, 2025)

- Fixed additional Button import paths
- Published package with corrected import paths
