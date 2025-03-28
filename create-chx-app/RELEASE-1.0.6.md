# create-chx-app v1.0.6

## 🛠️ Compatibility Update

We've improved compatibility with Vite 6 by removing dependencies that were causing conflicts:

- **Removed vite-plugin-pwa**: This plugin isn't yet fully compatible with Vite 6
- **Updated configuration**: Adjusted vite.config.ts to work without the PWA plugin
- **Simplified dependency tree**: Fewer dependencies means fewer potential conflicts

## ⚡ Installation Now Works Seamlessly

With these changes, you can now install dependencies with a simple:

```bash
npm i
```

No special flags or workarounds needed!

## 🚀 Usage

```bash
# Create your project
npx create-chx-app my-app-name

# Get started in seconds
cd my-app-name
npm i
npm run dev
```

We're constantly monitoring plugin compatibility and will re-add PWA support once it's ready for Vite 6.

---

Built for developers by Chamath Thiwanka 