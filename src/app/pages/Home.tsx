// Home — portal. Hero + apertura aireada + cifras + lista de secciones (hooks)
// con imagen que cambia al pasar el cursor + cierre a contacto.
import { useState } from "react";
import { base, img } from "../lib";
import { LinkTelon, useTelon } from "../transicion";

const SECCIONES = [
  { to: "/servicios", nm: "Servicios", ds: "Maquila, añejamiento, tonelería y despacho internacional.", im: "envejecimiento.webp" },
  { to: "/planta", nm: "La planta", ds: "45 años, 32 hectáreas y 156.000 barricas en Ocumare del Tuy.", im: "planta.webp" },
  { to: "/maestro", nm: "El maestro", ds: "Andrés Contreras, Mejor Maestro Ronero 2017 de la IRC.", im: "maestro.webp" },
];

export function Home() {
  const { ir } = useTelon();
  const [act, setAct] = useState(0);

  return (
    <>
      {/* HERO */}
      <header id="inicio" className="cl-hero">
        <img className="poster" src={img("hero-poster.webp")} alt="Pasillo de bodega de crianza de CILCCA" />
        <video autoPlay muted playsInline poster={img("hero-poster.webp")}>
          <source src={`${base}video/hero.mp4`} type="video/mp4" />
        </video>
        <div className="scrim" />
        <div className="cl-wrap in">
          <h1 className="rv">Donde nacen las marcas de ron.</h1>
          <p className="lead rv d1">La planta industrial más grande de Venezuela produce, añeja y embotella tu bebida a la escala que tu marca necesita.</p>
          <div className="act rv d2"><LinkTelon to="/contacto" className="cl-btn">Produce con nosotros</LinkTelon></div>
        </div>
      </header>

      {/* APERTURA */}
      <section className="cl-wrap hm-abre">
        <p className="st rv">Traes tu marca; <b>nosotros ponemos la ingeniería, la madera y el tiempo.</b></p>
        <p className="sub rv d1">La instalación más importante del sector licorero venezolano: producimos, añejamos y exportamos a escala para marcas y distribuidores, bajo un mismo techo.</p>
      </section>

      {/* CIFRAS */}
      <section className="cl-wrap hm-cifras">
        <div className="rv"><div className="n">45</div><div className="l">años elaborando<br />ron de Venezuela</div></div>
        <div className="rv d1"><div className="n">32<b> ha</b></div><div className="l">de instalación<br />industrial</div></div>
        <div className="rv d2"><div className="n">156<b> mil</b></div><div className="l">barricas de roble<br />blanco americano</div></div>
        <div className="rv d3"><div className="n">6</div><div className="l">líneas automatizadas<br />de envasado</div></div>
      </section>

      {/* HUB — hooks a las secciones */}
      <section className="cl-wrap hm-hub">
        <h2 className="h rv">Todo lo que CILCCA hace por tu marca.</h2>
        <div className="hub-grid">
          <div className="hub-list">
            {SECCIONES.map((s, i) => (
              <a
                key={s.to}
                href={s.to}
                className={"hub-item rv" + (i === act ? " on" : "")}
                onMouseEnter={() => setAct(i)}
                onFocus={() => setAct(i)}
                onClick={(e) => { e.preventDefault(); ir(s.to); }}
              >
                <div className="hub-shot-m"><img src={img(s.im)} alt={s.nm} /></div>
                <span className="nm">{s.nm}</span>
                <span className="ds">{s.ds}</span>
                <span className="ar" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <div className="hub-stage">
            {SECCIONES.map((s, i) => (
              <div key={s.to} className={"shot" + (i === act ? " on" : "")}>
                <img src={img(s.im)} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="cl-wrap hm-cierre">
        <h2 className="rv">¿Listo para llevar tu marca a escala?</h2>
        <div className="act rv d1"><LinkTelon to="/contacto" className="cl-btn">Hablemos de tu proyecto</LinkTelon></div>
      </section>
    </>
  );
}
