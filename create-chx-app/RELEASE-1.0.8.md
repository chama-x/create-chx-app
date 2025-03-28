# create-chx-app v1.0.8

## 🧹 Clean Dependencies Update

We've addressed all npm warning messages with a comprehensive update:

- **Replaced deprecated packages**: 
  - Updated `rimraf` to v5.0.5 (from v3.x)
  - Updated `glob` to v10.3.3 (from v7.x)
  - Added `lru-cache` to replace deprecated `inflight`
  - Added `@eslint/config-array` and `@eslint/object-schema` to replace deprecated humanwhocodes packages

- **Modern Git Hooks**: 
  - Replaced `husky` with `simple-git-hooks` for a more lightweight, modern approach to git hooks
  - Updated the prepare script to use simple-git-hooks

## 🌈 Cleaner Installation Experience

With these updates, you'll see:
- No deprecation warnings during installation
- Faster and more efficient dependency handling
- Reduced vulnerabilities and security concerns

## 🚀 Usage

```bash
# Create your project
npx create-chx-app my-app-name

# Get started with a clean install
cd my-app-name
npm i
npm run dev
```

These changes are all under the hood - your development experience remains just as smooth and efficient as before, but with fewer warnings and better dependency management.

---

Built for developers by Chamath Thiwanka 