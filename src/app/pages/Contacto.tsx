// Contacto. (Provisional; se rediseña por puntos.)
import { img } from "../lib";

export function Contacto() {
  return (
    <section className="cl-cta cl-pagina">
      <img className="bg" src={img("cta.webp")} alt="" />
      <div className="scrim" />
      <div className="cl-wrap in">
        <h1 className="rv">Produce tu marca con CILCCA.</h1>
        <p className="rv d1">Soluciones a escala para marcas y distribuidores que buscan dónde producir su licor con estándar industrial.</p>
        <p className="dir rv d2">Carretera Ocumare a San Francisco de Yare, Sector Aponte. Ocumare del Tuy, Miranda. <span className="pend">Teléfono y correo por confirmar.</span></p>
      </div>
    </section>
  );
}
