/**
 * Imágenes locales del diseño original (Figma Make "Cilcca").
 *
 * Estas 6 imágenes vivían como archivos LOCALES dentro del proyecto de Figma
 * Make (no son URLs de Cloudinary como los videos y el portafolio). Mientras el
 * usuario proporciona las URLs reales de Cloudinary, se usan placeholders.
 *
 *  ⇨ PENDIENTE: reemplazar cada constante por su URL de Cloudinary.
 *
 *  Nombre original en el Make          → constante
 *  ----------------------------------    --------------------------------------
 *  Logo_Cilcca.png                      → logoCilcca
 *  CILCCA-1.jpg                         → historyHero   (hero "Nuestra Historia")
 *  MAQUILA2_-_copia.jpg                 → servicesHero  (hero "Servicios")
 *  CORPORACION-...RETOQUE_27_copy.JPG   → maestroImg    (Maestro Ronero)
 *  IMG_0443.JPG                         → ocumareImg    (Ron Ocumare, "Premios")
 *  MAQUILA6.jpg                         → contactBg     (fondo de "Contacto")
 */

// Placeholder evidente (gris oscuro, texto centrado) para no romper el layout.
const ph = (text: string) =>
  `https://placehold.co/1600x1000/111111/c9c9c9?text=${encodeURIComponent(text)}`;

// El logo se sirve como SVG provisional desde /public. Reemplazar por el real.
export const logoCilcca = `${import.meta.env.BASE_URL}logo-cilcca.svg`;

export const historyHero = ph("CILCCA · Instalaciones");
export const servicesHero = ph("CILCCA · Maquila");
export const maestroImg = ph("Maestro Ronero · Andres Contreras");
export const ocumareImg = ph("Ron Ocumare");
export const contactBg = ph("Instalaciones CILCCA");
