import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from 'vite-plugin-pwa'
const { resolve } = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  base: "vite-tg-build-bot/",
  plugins: [vue(), VitePWA({
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Name of your app',
      short_name: 'Short name of your app',
      description: 'Description of your app',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  })],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "/@": resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: "docs"
  }
})
