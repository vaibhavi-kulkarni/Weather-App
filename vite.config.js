import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: process.env.PORT || 3000,  // Default to 5173 if PORT is not set
    host: true,  // To expose the app publicly on Render
  },
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"', // Set the environment variable
  },
  build: {
    rollupOptions: {
      input: '/index.html',
    },
    minify: 'terser', // Ensures minification
    sourcemap: false, // Disable sourcemaps for production (optional)
  },
})
