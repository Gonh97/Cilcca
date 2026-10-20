// Servicios, v4 (dirección Estudio): encabezado de página, imagen ancha, la
// rueda de etapas (Arco) y las capacidades en filas con filete.
// Cifras: presentación institucional del cliente (wiki cilcca-presentacion-fuente).
import { PageHero, ServiciosConImagen } from "../ui";
import { Arco } from "../Arco";

// Solo lo que hace CILCCA. Fermentación y destilación son de CACSA: no van acá.
const ETAPAS = [
  { nm: "Tonelería", ic: "toneleria", ds: "Los maestros toneleros arman y reparan cada barrica dentro de la planta." },
  { nm: "Embarricado", ic: "barrica", ds: "Roble de 190 litros, quemado por dentro y vaporizado antes de llenarse." },
  { nm: "Envejecimiento", ic: "reloj", ds: "Seis bodegas en racks guardan el ron el tiempo que pide tu marca." },
  { nm: "Reembarricado", ic: "ciclo", ds: "A los cuatro años se vacía, se mide la merma y se vuelve a llenar la misma barrica." },
  { nm: "Mezcla", ic: "tanque", ds: "El maestro ronero aprueba cada mezcla en tanques de acero inoxidable." },
  { nm: "Envasado", ic: "botella", ds: "Seis líneas automatizadas embotellan tu marca a escala." },
  { nm: "Despacho", ic: "despacho", ds: "Producto terminado o a granel, listo para salir dentro y fuera del país." },
];

const CAPACIDADES = [
  { nm: "Crianza", im: "barricas.webp", ds: "Seis bodegas de añejamiento con racks mecanizados para guardar tu ron el tiempo que tu marca necesita.", cap: "156.000", u: "barricas · 4,1 MM de cajas" },
  { nm: "Llenado de barril", im: "sv-toneleria.webp", ds: "Barricas vaporizadas antes de llenarse para que la madera se hidrate y ajuste contra los aros.", cap: "158.000", u: "barriles al año" },
  { nm: "Vaciado de barril", im: "toneleria.webp", ds: "Vaciado, medición de merma y reembarricado para oxigenar el ron y perder menos.", cap: "250.000", u: "barriles al año" },
  { nm: "Mezcla", im: "sv-mezcla.webp", ds: "Tanques de acero inoxidable y filtrado con carbón activado para los rones blancos.", cap: "7,15 MM", u: "cajas al año" },
  { nm: "Envasado", im: "sv-envasado.webp", ds: "Seis líneas automatizadas de llenado. Tu marca, embotellada y lista para despachar.", cap: "3,25 MM", u: "cajas al año en un turno" },
];

export function Servicios() {
  return (
    <>
      <PageHero im="envejecimiento.webp" alt="Bodega de crianza con barricas en racks" t1="Todo el proceso," t2="en una sola planta."
        tx="Traes tu marca; nosotros ponemos la ingeniería, la madera y el tiempo. De la barrica al despacho internacional." />

      <Arco etapas={ETAPAS} t1="De la barrica" t2="a la botella." />

      <section className="e-sec alt">
        <div className="e-wrap">
          <h2 className="e-h2 e-t rv"><span>Capacidad</span><span>a escala industrial.</span></h2>
          <ServiciosConImagen items={CAPACIDADES} />
        </div>
      </section>
    </>
  );
}
