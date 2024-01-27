// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h } from 'preact'`,
  },
  server: {
    port: 7000,
    open: true
  },
  plugins: [
  ],
  json: {
    stringify: true,
    namedExports: true
  },
  build: {
    minify: true,
    sourcemap: true,
    assetsDir: './assets',
    assetsInlineLimit: 4096
  }
})