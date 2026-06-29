import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// El sitio se publica como project page en GitHub Pages:
//   https://gonh97.github.io/Cilcca/
// Por eso el base path es '/Cilcca/'. Si en el futuro se usa un dominio
// propio (CNAME), cambiar BASE a '/'.
const BASE = '/Cilcca/'

export default defineConfig({
  base: BASE,
  plugins: [
    // Los plugins de React y Tailwind son requeridos por el export de Make.
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
