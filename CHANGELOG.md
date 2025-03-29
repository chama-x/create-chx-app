# Changelog

## 1.0.23 (March 29, 2025)

- Streamlined changelog format
- Removed duplicate entries
- Improved version history readability

## 1.0.22 (March 29, 2025)

- Added GitHub Packages support
- Updated package name to `@chama-x/create-chx-app`
- Configured GitHub Actions workflow
- Fixed security vulnerabilities:
  - Updated axios to 1.8.4 (SSRF vulnerability)
  - Updated vite to 6.2.3 (major version upgrade for esbuild vulnerability)
  - Updated vitest to 3.0.9 (major version upgrade for Remote Code Execution vulnerability)
  - Updated @vitejs/plugin-react to 1.3.2 (for Vite 6 compatibility)
  - Updated lint-staged to 15.5.0 (micromatch ReDoS vulnerability)

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

## 1.0.18 (March 29, 2025)

- Fixed incorrect Button import path in ComponentsDemo

## 1.0.17 (March 29, 2025)

- Improved documentation
- Added Netlify deployment support

## 1.0.1 - 1.0.16 (March 29, 2025)

- Various bug fixes and improvements
- Documentation updates
- Dependency optimizations

## 1.0.0 (March 29, 2025)

- Initial release
- Complete TypeScript support
- Fast development server setup 