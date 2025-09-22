// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // mantieni hash per chunk/entry (JS/CSS)
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        // niente hash per gli asset immagine
        assetFileNames: ({ name }) => {
          const extname = (name && name.split(".").pop()?.toLowerCase()) || "";
          const isImage = ["jpg","jpeg","png","webp","gif","svg","avif"].includes(extname);
          return isImage ? "assets/[name][extname]" : "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
