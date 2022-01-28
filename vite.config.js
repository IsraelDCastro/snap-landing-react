import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// import marko from "@marko/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(), 
    // marko()
  ],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
})
