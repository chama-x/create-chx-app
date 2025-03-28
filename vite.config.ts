import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  
  return {
    plugins: [
      react(),
      // Add SVG support
      svgr(),
      // Add PWA support
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'CHX React Template',
          short_name: 'CHX',
          description: 'A flexible, developer-friendly React template',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
      // Add compression for production builds
      isProd && viteCompression({
        algorithm: 'brotliCompress',
        threshold: 10240,
      }),
      // Add bundle analyzer in analyze mode
      mode === 'analyze' && visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
    ].filter(Boolean), // Filter out false values for conditional plugins
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@contexts': path.resolve(__dirname, './src/contexts'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@types': path.resolve(__dirname, './src/types'),
        '@services': path.resolve(__dirname, './src/services'),
        '@stores': path.resolve(__dirname, './src/stores'),
      },
    },
    server: {
      port: 3000,
      open: true,
      host: true,
    },
    build: {
      outDir: 'dist',
      minify: 'esbuild', // Use esbuild instead of terser for faster builds
      sourcemap: isProd ? false : true,
      // Enable code splitting
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
            vendor: [
              '@tanstack/react-query',
              'axios',
              'framer-motion',
              'react-hook-form',
              'zustand',
              'immer',
            ],
          },
        },
      },
      // Target modern browsers for smaller bundles
      target: 'es2020',
      // Set chunk size warnings
      chunkSizeWarningLimit: 1000,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      // Configure coverage
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
      },
    },
    // Configure CSS modules
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
  }
})
