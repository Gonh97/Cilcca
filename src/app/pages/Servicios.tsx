// Servicios, v4 (dirección Estudio): encabezado de página, imagen ancha, la
// rueda de etapas (Arco) y las capacidades en filas con filete.
// Cifras: presentación institucional del cliente (wiki cilcca-presentacion-fuente).
import { PageHero, ServiciosConImagen } from "../ui";
import { Arco } from "../Arco";

// Solo lo que hace CILCCA. Fermentación y destilación son de CACSA: no van acá.
// Datos técnicos: presentación institucional del cliente (wiki cilcca-presentacion-fuente).
const ETAPAS = [
  { nm: "Tonelería", ic: "toneleria",
    ds: "Maestros toneleros propios arman, reparan y preparan cada barrica dentro de la planta. Antes de llenarla, la barrica se vaporiza para que la madera se hidrate y ajuste contra los aros.",
    datos: [{ n: "190 L", l: "por barrica de roble, quemada por dentro" }] },
  { nm: "Embarricado", ic: "barrica",
    ds: "El ron entra a la barrica a cerca de 60 % de alcohol en volumen. El roble quemado le da color, aroma y carácter durante toda la guarda.",
    datos: [{ n: "158.000", l: "barriles llenados al año" }, { n: "60 % v/v", l: "graduación de llenado" }] },
  { nm: "Envejecimiento", ic: "reloj",
    ds: "Seis bodegas de añejamiento 100 % en racks, de unas 30.000 barricas cada una, de trece de alto por dieciséis de profundidad. La variación entre posiciones es la que asegura lotes homogéneos.",
    datos: [{ n: "156.000", l: "barricas en guarda" }, { n: "4,1 MM", l: "cajas equivalentes" }] },
  { nm: "Reembarricado", ic: "ciclo",
    ds: "A los cuatro años el ron se vacía en tanque, se mide la merma y vuelve a la misma barrica. Entra oxígeno, mejora el añejamiento posterior y se pierde menos producto.",
    datos: [{ n: "250.000", l: "barriles vaciados al año" }, { n: "4 años", l: "ciclo de reembarricado" }] },
  { nm: "Mezcla", ic: "tanque",
    ds: "Tanques de acero inoxidable para mezclar, estabilizar y filtrar; los rones blancos pasan por carbón activado para quitarles el color. El maestro ronero supervisa y aprueba cada mezcla final.",
    datos: [{ n: "7,15 MM", l: "cajas al año en mezcla" }, { n: "3,3 MM L", l: "de capacidad en tanque" }] },
  { nm: "Envasado", ic: "botella",
    ds: "Seis líneas automatizadas de llenado y envasado, con laboratorio de control de calidad y una sala de operaciones computarizada que sigue cada lote.",
    datos: [{ n: "6", l: "líneas automatizadas" }, { n: "3,25 MM", l: "cajas al año en un turno" }] },
  { nm: "Despacho", ic: "despacho",
    ds: "Almacenes de producto terminado y de materia prima dentro del complejo. Tu marca sale en botella o a granel, con certificación de origen para exportar, a 45 minutos de Caracas.",
    datos: [{ n: "2", l: "almacenes de producto terminado" }, { n: "45 min", l: "de Caracas" }] },
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
