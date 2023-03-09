import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  assetsInclude: ["./assets/**/*.*"],
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
