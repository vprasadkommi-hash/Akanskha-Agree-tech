import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Ensure process.cwd() matches the real canonical path on Windows to avoid path mismatch in Rollup and Vite optimizer
const realPath = fs.realpathSync(process.cwd())
if (process.cwd() !== realPath) {
  process.chdir(realPath)
}

// https://vite.dev/config/
export default defineConfig({
  root: realPath,
  plugins: [react()],
  server: {
    fs: {
      allow: [realPath],
    },
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'vendor-mui'
            }
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'vendor-icons'
            }
            return 'vendor-shared'
          }
        },
      },
    },
  },
})
