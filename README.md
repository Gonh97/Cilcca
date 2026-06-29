# CILCCA — Web corporativa

Sitio comercial **B2B** del **Complejo Industrial Licorero del Centro (CILCCA)**: la
plataforma industrial detrás de los mejores licores de Venezuela (maquila,
envejecimiento, tonelería y despacho internacional).

Réplica desplegable del prototipo de **Figma Make**.

## Stack
- React 18 + React Router 7 (SPA, 6 rutas)
- Vite 6 + Tailwind CSS v4
- `motion` (animaciones) + `lucide-react` (íconos)

## Rutas
`/` Inicio · `/historia` · `/servicios` · `/portafolio` · `/premios` · `/contacto`

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:5173/Cilcca/
npm run build    # genera dist/
```

## Despliegue
GitHub Pages vía GitHub Actions (`.github/workflows/deploy.yml`). Cada push a
`main` reconstruye y publica en `https://gonh97.github.io/Cilcca/`.
El `base` de Vite y el `basename` del router están fijados en `/Cilcca/`.

## Medios
- **Videos** y **portafolio**: alojados en Cloudinary (cuenta `dcpicxumb`).
- **6 imágenes locales** (logo, hero Historia/Servicios, Maestro Ronero, Ron
  Ocumare, fondo Contacto): centralizadas en [`src/imports/assets.ts`](src/imports/assets.ts)
  con placeholders temporales — reemplazar por sus URLs de Cloudinary.
