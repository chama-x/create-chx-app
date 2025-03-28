# Publishing to npm

Follow these steps to publish your package to npm:

## Prerequisites

1. Create an npm account at https://www.npmjs.com/signup
2. Log in to your npm account in the terminal:

```bash
npm login
```

## Before Publishing

1. Update the package.json file:
   - Set the correct `name` (make sure it's unique on npm)
   - Update `version` for new releases (follow semantic versioning)
   - Fill in your `author` name and contact info
   - Check the `repository` URL is correct

2. Test your package locally:

```bash
# From the repository root
cd create-chx-app
npm link
create-chx-app test-app
```

3. Clean up any test or temporary files

## Publishing

1. Publish to npm:

```bash
npm publish
```

For subsequent updates:

1. Update your code
2. Increment the version in package.json (e.g., 1.0.0 → 1.0.1)
3. Publish again:

```bash
npm publish
```

## Scoped Packages

If you want to publish under your npm username namespace:

1. Change the name in package.json to `@yourusername/create-chx-app`
2. Publish with:

```bash
npm publish --access public
```

## Testing After Publishing

```bash
npx create-chx-app my-app
```

Or with a scoped package:

```bash
npx @yourusername/create-chx-app my-app
``` 