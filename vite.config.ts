import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://fastfix-app-jcage.ondigitalocean.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components')
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})


//https://fastfix-app-jcage.ondigitalocean.app/api/swagger-ui/index.html#/