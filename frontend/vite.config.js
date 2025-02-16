import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173, // Можно изменить порт фронтенда
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
