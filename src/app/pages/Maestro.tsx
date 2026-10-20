// Maestro, v4 (dirección Estudio): Andrés Contreras y lo que sale de la casa.
import { img } from "../lib";
import { PageHero } from "../ui";

const PRODUCTOS = [
  { im: "prod-rones.webp", nm: "Rones con D.O.", ds: "Añejados de 2 a 12 años en roble." },
  { im: "prod-seleccion.webp", nm: "Selección de la casa", ds: "Mezclas de edición limitada." },
  { im: "prod-copacking.webp", nm: "Co-packing de marcas", ds: "Tu fórmula, producida y envasada en la planta." },
];

export function Maestro() {
  return (
    <>
      <PageHero im="maestro.webp" alt="Andrés Contreras, maestro ronero" lado="der" pos="45% 30%" apila mitad t1="El maestro" t2="detrás de cada mezcla."
        tx="Andrés Contreras, químico con treinta años creando rones de alto prestigio, entre ellos Ron Ocumare. Su método es la paciencia: escoger la barrica, seguir cada lote y no apurar el tiempo." />


      <section className="e-sec alt">
        <div className="e-wrap">
          <div className="e-premio grande rv">
            <span className="n">2017</span>
            <span className="k"><b>Mejor Maestro Ronero</b><span className="e-s">International Rum Conference (IRC)</span></span>
          </div>
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
