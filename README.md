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
Publicado en **GitHub Pages**: https://gonh97.github.io/Cilcca/
El `base` de Vite y el `basename` del router están fijados en `/Cilcca/`.

Actualmente el despliegue es desde la rama **`gh-pages`** (build subido a esa
rama). Para volver a publicar tras cambios en `main`:
```bash
npm run build
cp dist/index.html dist/404.html
cd dist && git init -b gh-pages -q && git add -A \
  && git commit -qm "deploy" \
  && git push -f https://github.com/Gonh97/Cilcca.git gh-pages && rm -rf .git
```
> Hay un workflow de GitHub Actions listo en `ci/deploy.yml.disabled`. Para
> automatizar el despliegue con cada push a `main`, muévelo a
> `.github/workflows/deploy.yml`, cambia la fuente de Pages a "GitHub Actions"
> y asegúrate de que el token de `gh` tenga el scope `workflow`.

## Medios
- **Videos** y **portafolio**: alojados en Cloudinary (cuenta `dcpicxumb`).
- **6 imágenes locales** (logo, hero Historia/Servicios, Maestro Ronero, Ron
  Ocumare, fondo Contacto): centralizadas en [`src/imports/assets.ts`](src/imports/assets.ts)
  con placeholders temporales — reemplazar por sus URLs de Cloudinary.
