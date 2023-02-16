import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: [
        resolve(__dirname, "./src/content.ts"),
        resolve(__dirname, "./src/popup.ts"),
      ],
      fileName: (_, entryName) => {
        return `js/${entryName}.js`;
      },
    },
  },
});
