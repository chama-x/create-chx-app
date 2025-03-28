#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Checking project setup...');

// Check if node_modules exists
if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
  console.error('❌ node_modules not found. Run npm install first.');
  process.exit(1);
}

// Check for react-router-dom
try {
  const routerPath = require.resolve('react-router-dom');
  console.log('✅ react-router-dom found at:', routerPath);
} catch (error) {
  console.error('❌ react-router-dom not found. Try reinstalling it.');
  process.exit(1);
}

// Check TypeScript configuration
const tsConfigPath = path.join(process.cwd(), 'tsconfig.app.json');
if (fs.existsSync(tsConfigPath)) {
  try {
    const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
    if (!tsConfig.compilerOptions.paths) {
      console.warn('⚠️ No path aliases configured in tsconfig.app.json');
    } else {
      console.log('✅ Path aliases configured in TypeScript');
    }
  } catch (error) {
    console.error('❌ Error parsing tsconfig.app.json:', error.message);
  }
}

// Check Vite configuration
const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
if (fs.existsSync(viteConfigPath)) {
  console.log('✅ vite.config.ts exists');
} else {
  console.error('❌ vite.config.ts not found');
}

// Check source directories
const requiredDirs = [
  'src/components',
  'src/pages',
  'src/layouts',
  'src/hooks',
  'src/utils',
  'src/assets',
  'src/services',
  'src/types',
];

const missingDirs = requiredDirs.filter(dir => !fs.existsSync(path.join(process.cwd(), dir)));
if (missingDirs.length > 0) {
  console.warn('⚠️ Missing directories:', missingDirs.join(', '));
} else {
  console.log('✅ All required directories exist');
}

// Check node version
try {
  const nodeVersion = execSync('node --version').toString().trim();
  console.log('✅ Node version:', nodeVersion);
} catch (error) {
  console.error('❌ Could not determine Node version');
}

console.log('✅ Setup check completed'); 