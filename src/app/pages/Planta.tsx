// Planta — especificaciones e historia. (Contenido provisional; se rediseña por puntos.)
import { img } from "../lib";

export function Planta() {
  return (
    <div className="cl-pagina">
      <section className="cl-sobre">
        <div className="cl-wrap">
          <div className="grid">
            <div>
              <h1 className="rv">De la barrica al despacho.</h1>
              <p className="st rv d1">Traes tu marca; nosotros ponemos la ingeniería, la madera y el tiempo.</p>
              <p className="body rv d2">Del primer destilado al despacho, bajo un mismo techo: la instalación más importante del sector licorero venezolano, con capacidad para producir, añejar y exportar a escala.</p>
            </div>
            <div className="im parimg rv d2"><img src={img("barricas.webp")} alt="Barricas de roble en guarda" /></div>
          </div>
          <div className="cl-cifras">
            <div className="rv"><div className="n">45</div><div className="l">años elaborando<br />ron de Venezuela</div></div>
            <div className="rv d1"><div className="n">32 ha</div><div className="l">de instalación<br />industrial</div></div>
            <div className="rv d2"><div className="n">156.000+</div><div className="l">barricas de roble<br />blanco americano</div></div>
            <div className="rv d3"><div className="n">6</div><div className="l">líneas automatizadas<br />de envasado</div></div>
          </div>
        </div>
      </section>

      <section className="cl-hist">
        <div className="cl-wrap">
          <div className="grid">
            <div>
              <div className="big rv">45<span>años elaborando el ron de Venezuela</span></div>
              <p className="rv d1">Nacimos en 1981 como la Destilería Pampero. Pasamos por manos de United Distillers (DIAGEO) y Ponche Crema, y hoy operamos bajo Estelar Trading, como la instalación más grande del sector licorero del país.</p>
              <p className="ubi rv d2">Carretera Ocumare a San Francisco de Yare, Sector Aponte. Ocumare del Tuy, Estado Miranda.</p>
            </div>
            <div className="im parimg rv d1"><img src={img("planta.webp")} alt="Planta CILCCA en Ocumare del Tuy" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
