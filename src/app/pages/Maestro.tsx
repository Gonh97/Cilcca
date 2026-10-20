// Maestro — Andrés Contreras y lo que produce la casa. (Provisional; se rediseña por puntos.)
import { img } from "../lib";

export function Maestro() {
  return (
    <div className="cl-pagina">
      <section className="cl-maestro">
        <div className="cl-wrap">
          <div className="grid">
            <div>
              <h1 className="rv">El maestro detrás de cada mezcla.</h1>
              <p className="rv d1">Andrés Contreras, químico con más de treinta años de experiencia. Su paciencia para añejar, la selección meticulosa de la madera y la supervisión de la destilación logran mezclas suaves, complejas y excepcionalmente equilibradas.</p>
              <div className="premio rv d2">Mejor Maestro Ronero 2017<span>International Rum Conference (IRC)</span></div>
            </div>
            <div className="ph parimg rv d1"><img src={img("maestro.webp")} alt="Andrés Contreras, maestro ronero" /></div>
          </div>
        </div>
      </section>

      <section className="cl-prods">
        <div className="cl-wrap">
          <h2 className="cl-sh rv">Lo que sale de la casa.</h2>
          <div className="cl-prodrow">
            <div className="p rv"><div className="im"><img src={img("prod-rones.webp")} alt="Rones con denominación de origen" /></div><div className="cap">Rones con D.O.<span>Añejados de 2 a 12 años en roble</span></div></div>
            <div className="p rv d1"><div className="im"><img src={img("prod-seleccion.webp")} alt="Selección de la casa" /></div><div className="cap">Selección de la casa<span>Mezclas de edición limitada</span></div></div>
            <div className="p rv d2"><div className="im"><img src={img("prod-copacking.webp")} alt="Co-packing de marcas" /></div><div className="cap">Co-packing de marcas<span>Más de 7 millones de cajas al año</span></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
