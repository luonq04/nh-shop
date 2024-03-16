// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        shop: resolve(__dirname, "shop.html"),
        cart: resolve(__dirname, "cart.html"),
        detai: resolve(__dirname, "detail.html"),
        checkout: resolve(__dirname, "checkout.html"),
      },
    },
  },
});
