// Servicios, v4 (dirección Estudio): encabezado de página, imagen ancha, la
// línea de proceso de la marca y las capacidades en filas con filete.
// Cifras: presentación institucional del cliente (wiki cilcca-presentacion-fuente).
import { img } from "../lib";

const ETAPAS = [
  { nm: "Fermentación", ds: "La levadura transforma los azúcares en alcohol." },
  { nm: "Destilación", ds: "En alambique para rones premium o continua para alcoholes ligeros." },
  { nm: "Tonelería", ds: "Las barricas se arman, reparan y vaporizan en casa." },
  { nm: "Embarricado", ds: "Roble de 190 litros, quemado por dentro." },
  { nm: "Envejecimiento", ds: "Seis bodegas en racks, con guarda controlada." },
  { nm: "Reembarricado", ds: "A los cuatro años se vacía, se mide la merma y se vuelve a llenar." },
  { nm: "Mezcla y envasado", ds: "El maestro ronero aprueba la mezcla; seis líneas la embotellan." },
];

const CAPACIDADES = [
  { nm: "Crianza", ds: "Seis bodegas de añejamiento con racks mecanizados para guardar tu ron el tiempo que tu marca necesita.", cap: "156.000", u: "barricas · 4,1 MM de cajas" },
  { nm: "Llenado de barril", ds: "Barricas vaporizadas antes de llenarse para que la madera se hidrate y ajuste contra los aros.", cap: "158.000", u: "barriles al año" },
  { nm: "Vaciado de barril", ds: "Vaciado, medición de merma y reembarricado para oxigenar el destilado y perder menos.", cap: "250.000", u: "barriles al año" },
  { nm: "Mezcla", ds: "Tanques de acero inoxidable y filtrado con carbón activado para los rones blancos.", cap: "7,15 MM", u: "cajas al año" },
  { nm: "Envasado", ds: "Seis líneas automatizadas de llenado. Tu marca, embotellada y lista para despachar.", cap: "3,25 MM", u: "cajas al año en un turno" },
];

export function Servicios() {
  return (
    <>
      <section className="e-page-head">
        <div className="e-wrap">
          <h1 className="e-display e-t rv"><span>Todo el proceso,</span><span>en una sola planta.</span></h1>
          <p className="e-l rv d1">Traes tu marca; nosotros ponemos la ingeniería, la madera y el tiempo. Del primer destilado al despacho internacional.</p>
        </div>
      </section>

      <section className="e-sec pegada">
        <div className="e-wrap">
          <div className="e-wide rv"><img src={img("envejecimiento.webp")} alt="Bodega de crianza con barricas en racks" /></div>
        </div>
      </section>

      <section className="e-sec">
        <div className="e-wrap">
          <h2 className="e-h2 e-t rv"><span>De la fermentación</span><span>a la botella.</span></h2>
          <div className="e-proc">
            {ETAPAS.map((e, k) => (
              <div key={e.nm} className={"e-step rv" + (k ? ` d${Math.min(k, 4)}` : "")}>
                <h3 className="e-h4">{e.nm}</h3>
                <p className="e-s">{e.ds}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="e-sec alt">
        <div className="e-wrap">
          <h2 className="e-h2 e-t rv"><span>Capacidad</span><span>a escala industrial.</span></h2>
          <div className="e-rows">
            {CAPACIDADES.map((c) => (
              <div key={c.nm} className="e-row rv">
                <h3 className="e-h4">{c.nm}</h3>
                <p className="e-m">{c.ds}</p>
                <div className="cap">{c.cap}<small>{c.u}</small></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
