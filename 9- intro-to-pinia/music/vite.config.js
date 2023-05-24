import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    /** Generate the manifest file. In addition, it will create a service worker */
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      /** Configure the manifest file */
      manifest: {
        name: 'Music App',
        theme_color: '#ff5e3a',
        icons: [
          {
            src: 'assets/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      /** Workbox is a library developed by Google, it will helps us with creating a service worker */
      workbox: {
        /** Glob is a package for searching for files with patterns */
        globPatterns: ['**/*.{js,css,html,png,jpg}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
