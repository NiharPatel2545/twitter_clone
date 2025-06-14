import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  preview: {
    port: 5000, // This must match the PORT from Render
    host: true, // Enables binding to 0.0.0.0
    allowedHosts: ["twitter-clone-i2yb.onrender.com"], // 👈 Add your Render domain here
  },
});