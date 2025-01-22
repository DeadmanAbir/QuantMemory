import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const serverUrl = import.meta.env.VITE_BACKEND_URL
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  }
})
