// Home, v4 (dirección Estudio). Hero conservado + cuatro bloques que enganchan
// a las páginas: la propuesta con cifras, los servicios, la planta por dentro
// (galería oscura) y el maestro. Un solo llamado a la acción: el del nav.
import { useState } from "react";
import { base, img } from "../lib";
import { Icono, LinkCirculo } from "../ui";

const SERVICIOS = [
  { ic: "barrica", nm: "Envejecimiento", ds: "Seis bodegas en racks para 156.000 barricas de roble, en guarda controlada para cada marca." },
  { ic: "toneleria", nm: "Tonelería", ds: "Maestros toneleros propios arman, reparan y vaporizan las barricas dentro de la planta." },
  { ic: "botella", nm: "Mezcla y envasado", ds: "Seis líneas automatizadas de llenado. Tu marca, embotellada a escala y lista para salir." },
  { ic: "despacho", nm: "Exportación", ds: "Despacho a granel en isotanques sellados, con certificados de origen y de libre venta." },
];

const PLANTA = [
  { nm: "Bodegas", im: "envejecimiento.webp", tx: "Seis bodegas de añejamiento, cada una con cerca de 30.000 barricas en racks de trece de alto." },
  { nm: "Tonelería", im: "toneleria.webp", tx: "Barricas de roble de 190 litros, quemadas por dentro y vaporizadas antes de llenarse." },
  { nm: "Envasado", im: "maquila.webp", tx: "Seis líneas automatizadas y capacidad para 3,25 millones de cajas al año en un turno." },
  { nm: "Despacho", im: "logistica.webp", tx: "Almacenes de producto terminado y salida a granel para marcas dentro y fuera del país." },
];

function Galeria() {
  const [i, setI] = useState(0);
  const act = PLANTA[i];
  return (
    <section className="e-gal">
      <div className="bgs" aria-hidden="true">
        {PLANTA.map((p, k) => <img key={p.im} className={k === i ? "on" : ""} src={img(p.im)} alt="" />)}
      </div>
      <div className="velo" />
      <div className="e-wrap">
        <div className="txt">
          <h2 key={act.nm} className="e-display cambia">{act.nm}</h2>
          <div className="det">
            <p key={act.tx} className="e-m cambia">{act.tx}</p>
            <div><LinkCirculo to="/planta">Conoce la planta</LinkCirculo></div>
          </div>
        </div>
        <div className="e-thumbs" role="group" aria-label="Elige un área de la planta">
          {PLANTA.map((p, k) => (
            <button key={p.nm} className="e-thumb" aria-pressed={k === i} aria-label={p.nm}
              onClick={() => setI(k)} onMouseEnter={() => setI(k)}>
              <img src={img(p.im)} alt="" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      {/* HERO: se conserva (video del pasillo, texto al tercio inferior) */}
      <header id="inicio" className="cl-hero">
        <img className="poster" src={img("hero-poster.webp")} alt="Pasillo de bodega de crianza de CILCCA" />
        <video autoPlay muted playsInline poster={img("hero-poster.webp")}>
          <source src={`${base}video/hero.mp4`} type="video/mp4" />
        </video>
        <div className="scrim" />
        <div className="cl-wrap in">
          <h1 className="rv">Donde nacen las marcas de ron.</h1>
          <p className="lead rv d1">La planta industrial más grande de Venezuela produce, añeja y embotella tu bebida a la escala que tu marca necesita.</p>
          <div className="act rv d2">
            <LinkCirculo onClick={() => document.getElementById("propuesta")?.scrollIntoView({ behavior: "smooth" })}>
              Descubre cómo
            </LinkCirculo>
          </div>
        </div>
      </header>

      {/* PROPUESTA + CIFRAS */}
      <section id="propuesta" className="e-sec">
        <div className="e-wrap">
          <div className="e-open">
            <h2 className="e-display e-t rv"><span>Traes tu marca.</span><span>Nosotros ponemos el resto.</span></h2>
            <div className="txt">
              <p className="e-l rv d1">La ingeniería, la madera y el tiempo. Producimos, añejamos y envasamos para marcas y distribuidores, del primer destilado al despacho, bajo un mismo techo.</p>
            </div>
          </div>
          <div className="e-stats">
            <div className="e-stat rv"><div className="n">32<small>ha</small></div><div className="u" /><div className="l">de instalación industrial en Ocumare del Tuy</div></div>
            <div className="e-stat rv d1"><div className="n">156<small>mil</small></div><div className="u" /><div className="l">barricas de roble en seis bodegas</div></div>
            <div className="e-stat rv d2"><div className="n">3,25<small>MM</small></div><div className="u" /><div className="l">cajas al año en un solo turno</div></div>
            <div className="e-stat rv d3"><div className="n">6</div><div className="u" /><div className="l">líneas automatizadas de llenado</div></div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="e-sec alt">
        <div className="e-wrap">
          <div className="e-head">
            <h2 className="e-h2 e-t rv"><span>Todo el proceso,</span><span>en una sola planta.</span></h2>
            <div className="rv d1"><LinkCirculo to="/servicios">Ver servicios</LinkCirculo></div>
          </div>
          <div className="e-features">
            {SERVICIOS.map((s, k) => (
              <div key={s.nm} className={"e-feature rv" + (k ? ` d${k}` : "")}>
                <Icono n={s.ic} />
                <h3 className="e-h4">{s.nm}</h3>
                <p className="e-s">{s.ds}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA PLANTA POR DENTRO: el momento oscuro */}
      <Galeria />

      {/* EL MAESTRO */}
      <section className="e-sec">
        <div className="e-wrap e-split">
          <div className="ph rv"><img src={img("maestro.webp")} alt="Andrés Contreras, maestro ronero de CILCCA" /></div>
          <div className="txt">
            <h2 className="e-h2 e-t rv"><span>Cada mezcla pasa</span><span>por las manos de un maestro.</span></h2>
            <p className="e-l rv d1">Andrés Contreras lleva treinta años creando rones de prestigio. Escoge la madera, sigue cada lote dentro de la barrica y supervisa las mezclas finales.</p>
            <div className="e-premio rv d2">
              <span className="n">2017</span>
              <span className="k"><b>Mejor Maestro Ronero</b><span className="e-s">International Rum Conference</span></span>
            </div>
            <div className="rv d3"><LinkCirculo to="/maestro">Conoce al maestro</LinkCirculo></div>
          </div>
        </div>
      </section>
    </>
  );
}
