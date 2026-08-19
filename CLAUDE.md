# CILCCA — Web

Ficha del proyecto para cualquier sesión de Claude abierta en esta carpeta.

## Qué es
Sitio comercial **B2B** del **Complejo Industrial Licorero del Centro (CILCCA)**,
planta licorera más grande de Venezuela (Ocumare del Tuy, Miranda). Presenta
servicios de maquila, envejecimiento, tonelería, exportación y el portafolio de
productos. Réplica desplegable del prototipo de **Figma Make**.

## Despliegue
- **Repo:** Gonh97/Cilcca
- **URL:** https://gonh97.github.io/Cilcca/ (GitHub Pages)
- `base` de Vite y `basename` del router = `/Cilcca/`. Si algún día se usa un
  dominio propio (CNAME), cambiar `BASE` en `vite.config.ts` a `/` y quitar el
  basename.
- **Método actual: rama `gh-pages`** (el build se sube a esa rama). El token de
  `gh` no tenía scope `workflow`, por eso no se usa Actions todavía. El workflow
  queda en `ci/deploy.yml.disabled`; para activarlo: moverlo a
  `.github/workflows/deploy.yml`, cambiar la fuente de Pages a "GitHub Actions"
  y dar scope `workflow` al token. Republicar manualmente: ver README.

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

## Memoria del proyecto (wiki personal)
El estado, decisiones aprobadas y pendientes de este proyecto viven en la wiki personal:
`C:\Users\GONZA\Streaming de Google Drive\Mi unidad\Memoria Claude\Cerebro\wiki\proyectos\cilcca.md`
Detalle técnico extendido: `C:\Users\GONZA\Streaming de Google Drive\Mi unidad\Memoria Claude\Cerebro\wiki\fuentes\cilcca-fuente.md`

Leer esa página al empezar a trabajar acá. Al cerrar la sesión, actualizarla con lo avanzado.
Comando de referencia: "Actualiza el proyecto cilcca en la wiki con lo de hoy."

## Si el usuario pregunta por otro proyecto o algo no relacionado a este

Este es uno de varios proyectos (de distintos clientes) trackeados centralmente en una wiki
personal. Si en esta sesión el usuario pregunta por un tema, proyecto o cliente que no es este, o
no está seguro de en qué proyecto está buscando algo, buscar primero en:
`C:\Users\GONZA\Streaming de Google Drive\Mi unidad\Memoria Claude\Cerebro\wiki\index.md`
Si no es suficiente, ampliar la búsqueda a `wiki/proyectos/*.md` y `wiki/fuentes/*.md` en esa misma
carpeta, antes de responder que no se encuentra. Proceso completo de búsqueda difusa documentado en
el `CLAUDE.md` raíz de ese vault (sección "Comandos disponibles").

## Dónde guardar el contenido generado
Además de este repo (y del OneDrive de Moca si aplica), copiar los assets puntuales que se generen (imágenes sueltas, íconos, logos) también a —
NUNCA el export completo de una página o documento:
`C:\Users\GONZA\Streaming de Google Drive\Mi unidad\Memoria Claude\Cerebro\contenido\jeme\cilcca`
Esa carpeta es el repositorio central de respaldo del usuario — no reemplaza el repo/deploy, lo complementa.

**No exportar automáticamente la versión final** (PNG, PDF, etc.) del diseño/documento que se está
editando — el usuario prefiere exportar manualmente cuando lo necesite. Solo copiar acá los assets
puntuales que se generen durante el trabajo (imágenes sueltas, logos, etc.), no "la pieza completa"
sin que se pida.

## Rediseño con el manual de marca (2026-08-12)

El sitio dejó de ser la réplica literal del prototipo de Figma Make: ahora aplica el **sistema de
marca de CILCCA** definido en el manual (ver skill `cilcca-design-system` y
`wiki/conceptos/estilo-cilcca.md`).

Mesa de trabajo de diseño: archivo de Figma **`Cilcca Web`** (`wMEtfmAiW3JH6ctCGc5XYS`), página
`Web`, con los seis frames de 1440 px. **Ese archivo es la fuente de la verdad del diseño**: los
cambios se hacen ahí y después se reflejan acá.

Reglas del sistema que el código respeta y no hay que romper:

- **Sora** en titulares, **Inter Medium** en cuerpo. Sora no tiene Medium, por eso el cuerpo es Inter.
- **70% claro / 30% oscuro.** El claro es el modo base; el oscuro es acento de heroes, cifras,
  paneles y cierre. Una página clara lleva su momento oscuro dentro.
- **Nunca superficies de color planas**: todo lleva degradé, también los velos sobre foto.
- **Nada de tipografía de color**: el azul y el verde viven en fondos, reglas de acento y subrayados,
  nunca en el texto.
- **Sin eyebrows**, sin guion largo, español neutro de Latinoamérica.
- La escala tipográfica está cerrada en las clases `.t-*` de `src/styles/theme.css`. Si hace falta
  un tamaño nuevo, casi siempre el bloque está mal jerarquizado.

Las 6 imágenes que estaban en placeholder desde junio se resolvieron con fotografía real del banco
de marca y viven en `public/img/`. Los videos siguen en Cloudinary (cuenta `dcpicxumb`).

## Dónde se publica (2026-08-12)

**Vercel**, proyecto `cilcca` en la cuenta **GONH97**, conectado a este repo. **Cada push a `main`
publica solo.** No hay que correr nada a mano.

Regla del usuario: toda página web va a Vercel, que es el link con el que muestra su trabajo.
GitHub queda solo como repositorio del código. Detalle en
`wiki/conceptos/despliegue-estatico-vercel.md`.

- `base` de Vite es `'/'`. **No volver a ponerlo en `'/Cilcca/'`**: eso era del subpath de GitHub
  Pages y deja el sitio sin estilos ni imágenes en Vercel.
- `vercel.json` tiene el rewrite de SPA y la cache larga de assets. Reemplaza al truco de duplicar
  `index.html` como `404.html`.
- La rama `gh-pages` y `ci/deploy.yml.disabled` quedan como historia; el sitio ya no se publica ahí.
