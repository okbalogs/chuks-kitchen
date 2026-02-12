import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // allow network access
    allowedHosts: [
      'unchidden-galvanoplastically-lottie.ngrok-free.dev'
    ]
  }
})