import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000", // backend during dev
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 5000,
    host: true,
    allowedHosts: "all", // allows Render preview or any external host
  },
});