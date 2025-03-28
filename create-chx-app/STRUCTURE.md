# Repository Structure Guide

This repository has a dual structure that serves two purposes:

## Repository Structure

```
/
├── create-chx-app/                # The npm package
│   ├── index.js                   # CLI entry point
│   ├── package.json               # Package configuration
│   ├── template/                  # Files copied to new projects
│   │   ├── src/                   # Source code for the template
│   │   ├── public/                # Public assets
│   │   ├── package.json           # Template dependencies
│   │   ├── vite.config.ts         # Vite configuration
│   │   └── netlify.toml           # Netlify deployment configuration
│   ├── CHANGELOG.md               # Version history
│   └── RELEASE-*.md               # Release notes for specific versions
│
└── *                              # Development environment files (package.json, src/, etc.)
```

## Project Components

### 1. NPM Package (`create-chx-app/`)

This is the actual npm package that users install with `npx create-chx-app`. It contains:

- The CLI tool (`index.js`) that handles project creation
- The template files that are copied to new projects
- Documentation and release notes

### 2. Template (`create-chx-app/template/`)

This directory contains the actual React template that gets installed when users run the CLI:

- Complete React application with TypeScript, Vite, and TailwindCSS
- All necessary configuration files (ESLint, Prettier, etc.)
- Example components and pages

### 3. Development Environment (Root Directory)

The root directory contains a working copy of the template for development and testing purposes:

- Used for testing changes before they are added to the template
- Has its own `package.json` with the name "chx-template-dev"
- Not part of the npm package
- Allows you to run `npm run dev` to test changes locally

## Deployment Strategy

### Netlify Deployment

The `create-chx-app/template/` directory is configured for deployment to Netlify:

1. The `netlify.toml` file in the template directory contains the build configuration
2. It uses `--legacy-peer-deps` to handle any dependency conflicts
3. It sets up proper redirects for client-side routing
4. **Important**: In Netlify, you must set the base directory to `create-chx-app/template`

### NPM Package Publishing

The entire `create-chx-app/` directory is published to npm:

1. Run `cd create-chx-app` to navigate to the package directory
2. Run `npm version patch` to bump the version
3. Run `npm publish` to publish the package
4. Users can then use it via `npx create-chx-app my-app`

## Development Workflow

1. Make changes to the root project using `npm run dev` to test functionality
2. Once satisfied, copy the changes to `create-chx-app/template/`
3. Update version numbers and create release notes
4. Publish to npm and push to GitHub

## Common Issues

### Missing package.json in Root Directory

If you see an error like `npm error path /path/to/project/package.json` when running commands in the root directory, it means the root `package.json` file is missing. This file is necessary for the development environment but is not part of the npm package.
