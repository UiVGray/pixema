import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";
import svgr from 'vite-plugin-svgr';
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), dts()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  }
});
