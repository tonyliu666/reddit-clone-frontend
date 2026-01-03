import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      jsencrypt: path.resolve(process.cwd(), "node_modules/jsencrypt/lib/JSEncrypt.js"),
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
