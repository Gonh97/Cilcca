import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en Vercel, en la raíz del dominio, así que base es '/'.
// Antes vivía en un subpath de GitHub Pages (https://gonh97.github.io/Cilcca/)
// y necesitaba base '/Cilcca/'. Si alguna vez se vuelve a publicar como project
// page de GitHub, hay que restaurar ese subpath o el sitio queda sin estilos.
const BASE = '/'

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
