import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vue-message-search/',  // GitHub Pages 子路徑
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})