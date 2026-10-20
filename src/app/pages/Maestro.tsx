// Maestro, v4 (dirección Estudio): Andrés Contreras y lo que sale de la casa.
import { img } from "../lib";

const PRODUCTOS = [
  { im: "prod-rones.webp", nm: "Rones con D.O.", ds: "Añejados de 2 a 12 años en roble." },
  { im: "prod-seleccion.webp", nm: "Selección de la casa", ds: "Mezclas de edición limitada." },
  { im: "prod-copacking.webp", nm: "Co-packing de marcas", ds: "Tu fórmula, producida y envasada en la planta." },
];

export function Maestro() {
  return (
    <>
      <section className="e-page-head">
        <div className="e-wrap e-split">
          <div className="txt">
            <h1 className="e-display e-t rv"><span>El maestro</span><span>detrás de cada mezcla.</span></h1>
            <p className="e-l rv d1">Andrés Contreras, químico con treinta años creando rones de alto prestigio, entre ellos Ron Ocumare. Su método es la paciencia: escoger la barrica, seguir cada lote y no apurar el tiempo.</p>
            <div className="e-premio rv d2">
              <span className="n">2017</span>
              <span className="k"><b>Mejor Maestro Ronero</b><span className="e-s">International Rum Conference (IRC)</span></span>
            </div>
          </div>
          <div className="ph rv d1"><img src={img("maestro.webp")} alt="Andrés Contreras, maestro ronero" /></div>
        </div>
      </section>

      <section className="e-sec alt">
        <div className="e-wrap">
          <h2 className="e-h2 e-t rv"><span>Lo que sale</span><span>de la casa.</span></h2>
          <div className="e-prods">
            {PRODUCTOS.map((p, k) => (
              <div key={p.nm} className={"e-prod rv" + (k ? ` d${k}` : "")}>
                <div className="im"><img src={img(p.im)} alt={p.nm} /></div>
                <div className="k"><h3 className="e-h4">{p.nm}</h3><p className="e-s">{p.ds}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
