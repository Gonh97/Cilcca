// Build del artefacto de la presentación (prototipo en claude.ai antes de publicar en cilcca.com).
// Uso: npx vite build --config vite.artefacto.config.ts --outDir <carpeta>
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  publicDir: false,
  plugins: [react(), tailwindcss()],
  build: { rollupOptions: { input: "presentacion.html" }, assetsDir: "recursos", emptyOutDir: true },
});
