import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  // Relative base so the build works on any sub-path (e.g. GitHub Pages /SAJAN/).
  base: './',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Multi-page app: every HTML page is its own entry.
      input: {
        main: resolve(root, 'index.html'),
        'isu-3': resolve(root, 'isu-3.html'),
      },
    },
  },
});
