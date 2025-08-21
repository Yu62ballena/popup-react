import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 自分のエックスサーバーに上げる場合
  // base: "/my-creations/popup/react/",

  // 会社のエックスサーバーに上げる場合
  // 本番
  base: "/sweets/",

  // 会社のエックスサーバー、一時的なテスト
  // base: "/sweets-test2/",

  // vercelなどにデプロイする場合
  // base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          gsap: ["gsap"],
        },
      },
    },
  },
});
