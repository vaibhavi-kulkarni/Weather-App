import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5173,  // Default to 5173 if PORT is not set
    host: true,  // To expose the app publicly on Render
  },
  plugins: [react()],
})
