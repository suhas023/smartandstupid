// vite.config.js
import { defineConfig } from 'vite';
import vike from 'vike/plugin'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  plugins: [
  ],
  build: {
    minify: true
  }
})