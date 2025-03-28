# Release 1.0.21

## 🔧 Dependency Fixes

- Added missing `framer-motion` dependency (version 11.0.6)
- Fixed build errors related to missing framer-motion package
- Improved Netlify deployment compatibility

## ✅ Zero-Config Installation

The template now installs without any dependency conflicts or missing packages:

```bash
npx create-chx-app my-app
cd my-app
npm run dev
```

## 📈 Optimized Developer Experience

- Fixed missing dependency issues to ensure successful production builds
- Ensured component chunking works properly in production build
- Added proper support for animation libraries referenced in the application

This release focuses on ensuring all required dependencies are properly included in both the development environment and generated templates. 