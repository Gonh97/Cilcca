# CILCCA — Web

Ficha del proyecto para cualquier sesión de Claude abierta en esta carpeta.

## Qué es
Sitio comercial **B2B** del **Complejo Industrial Licorero del Centro (CILCCA)**,
planta licorera más grande de Venezuela (Ocumare del Tuy, Miranda). Presenta
servicios de maquila, envejecimiento, tonelería, exportación y el portafolio de
productos. Réplica desplegable del prototipo de **Figma Make**.

## Despliegue
- **Repo:** Gonh97/Cilcca
- **URL:** https://gonh97.github.io/Cilcca/ (GitHub Pages vía Actions)
- `base` de Vite y `basename` del router = `/Cilcca/`. Si algún día se usa un
  dominio propio (CNAME), cambiar `BASE` en `vite.config.ts` a `/` y quitar el
  basename.
- Cada push a `main` reconstruye y publica (~1-2 min) con `deploy.yml`.

## Stack y archivos
- React 18 + React Router 7 + Vite 6 + Tailwind v4 + `motion` + `lucide-react`.
- `src/app/routes.tsx` — 6 rutas. `src/app/components/Layout.tsx` — nav + footer.
- `src/app/pages/` — Home, History, Services, Portfolio, Awards, Contact.
- `src/imports/assets.ts` — **las 6 imágenes locales** (placeholders pendientes
  de reemplazar por Cloudinary). `public/logo-cilcca.svg` — logo provisional.
- `src/styles/` — theme.css (tokens), tailwind.css, fonts.css, index.css.

## Sistema de diseño
- Regla de color: 60% blanco (fondos) · 30% gris (texto/secundario) · 10%
  gradiente verde-azul (botones/detalles). Primario `#030213`.
- Tipografía: SF Pro Display (stack de sistema `-apple-system`).
- Contenedor máx. 1400px centrado.

## Medios
- **Videos** (.mov/.mp4) y **portafolio**: Cloudinary `dcpicxumb` (URLs en el
  código). Se copió una copia de respaldo a Google Drive `00_Claude\CILCCA`.
- **6 fotos locales** del Make NO se podían bajar por el MCP; el usuario las
  tiene en Cloudinary. Pendiente: pegar sus URLs en `src/imports/assets.ts`.

## Origen Figma Make
- File key del Make: `7GtC0zQwdOJfcVDAyhzlmm` ("Cilcca").
- Réplica de diseño en Figma (canvas): ver memoria del proyecto.

## Convenciones
- Responder y documentar en **español**.
- Mantener la web fiel al prototipo del Make salvo que el usuario pida cambios.
