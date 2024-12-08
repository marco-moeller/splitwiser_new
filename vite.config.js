import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "SplitWiser",
        short_name: "SplitWiser",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icon-72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "icon-128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "icon-144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    }),
    react()
  ]
});