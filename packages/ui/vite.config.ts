import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [svelte({
      compilerOptions: {
        customElement: true
      }
  })],
  build: {
    sourcemap: true,
    target: 'esnext',
    lib: {
      formats: ['es'],
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'index.ts'),
      name: 'ui',
      // the proper extensions will be added
      fileName: 'ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: /^lit/,
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        }
      }
    }
  }
})
