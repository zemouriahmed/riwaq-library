import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// On GitHub Pages the site lives under /<repository-name>/ ; the deploy workflow sets VITE_BASE.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
})
