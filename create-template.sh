#!/bin/bash

# Create the template directory if it doesn't exist
mkdir -p create-chx-app/template

# Copy essential files
cp package.json create-chx-app/template/
cp README.md create-chx-app/template/
cp vite.config.ts create-chx-app/template/
cp tsconfig.json create-chx-app/template/
cp tsconfig.app.json create-chx-app/template/
cp tsconfig.node.json create-chx-app/template/
cp .prettierrc.json create-chx-app/template/
cp eslint.config.js create-chx-app/template/
cp index.html create-chx-app/template/
cp tailwind.config.js create-chx-app/template/
cp postcss.config.js create-chx-app/template/
cp IMPROVEMENTS.md create-chx-app/template/

# Copy src directory
cp -r src create-chx-app/template/

# Copy public directory if it exists
if [ -d "public" ]; then
  cp -r public create-chx-app/template/
fi

# Remove any unnecessary files from the template
rm -rf create-chx-app/template/node_modules
rm -rf create-chx-app/template/.git
rm -rf create-chx-app/template/dist
rm -f create-chx-app/template/.DS_Store

echo "Template files copied successfully!" 