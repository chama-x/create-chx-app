# create-chx-app v1.0.17

## 🛠️ Dependency Compatibility Improvements

This release improves compatibility for deployment environments like Netlify by downgrading certain dependencies:

- **Downgraded Vite**: From v6.0.5 to v5.0.12 for wider deployment compatibility
- **Adjusted TypeScript Dependencies**: Using TypeScript 5.3.3 for better compatibility with other tools
- **Fixed ESLint Compatibility**: Ensured all ESLint-related packages work together properly
- **Updated React Type Definitions**: Using compatible React type versions

## 🔍 Technical Details

Key version changes include:

```diff
- "typescript": "5.6.2",
+ "typescript": "5.3.3",
- "vite": "6.0.5",
+ "vite": "5.0.12",
- "vitest": "2.0.1"
+ "vitest": "1.2.1"
- "@types/node": "22.13.14",
+ "@types/node": "20.11.5",
- "@types/react": "18.3.18",
+ "@types/react": "18.2.48",
- "@vitejs/plugin-react": "4.3.4",
+ "@vitejs/plugin-react": "4.2.1",
```

## ⚡ Deployment Benefits

These changes provide:

- ✅ Improved compatibility with CI/CD platforms like Netlify, Vercel, etc.
- ✅ Fewer peer dependency conflicts during installation
- ✅ More stable build process in various environments
- ✅ Better compatibility between ESLint and TypeScript tools

## 🚀 Usage

This version maintains all the functionality while improving compatibility:

```bash
npx create-chx-app my-app
cd my-app
npm i
npm run dev
```

No change in the developer experience, just more reliability when deploying!

---

Built for developers by Chamath Thiwanka (@chama-x) 