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
└── *                              # Development/testing environment files
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
- Not part of the npm package

## Deployment Strategy

### Netlify Deployment

The `create-chx-app/template/` directory is configured for deployment to Netlify:

1. The `netlify.toml` file in the template directory contains the build configuration
2. It uses `--legacy-peer-deps` to handle any dependency conflicts
3. It sets up proper redirects for client-side routing

### NPM Package Publishing

The entire `create-chx-app/` directory is published to npm:

1. Run `npm version patch` to bump the version
2. Run `npm publish` to publish the package
3. Users can then use it via `npx create-chx-app my-app`

## Development Workflow

1. Make changes to the root project to test functionality
2. Once satisfied, copy the changes to `create-chx-app/template/`
3. Update version numbers and create release notes
4. Publish to npm and push to GitHub 