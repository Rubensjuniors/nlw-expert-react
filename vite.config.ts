import react from '@vitejs/plugin-react'
import { defineConfig, type UserConfigExport } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
} as UserConfigExport)
