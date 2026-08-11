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
})


