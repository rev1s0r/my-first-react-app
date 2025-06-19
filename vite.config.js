import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-first-react-app/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})