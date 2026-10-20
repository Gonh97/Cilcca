// Home — lujo minimalista claro (ref. Clase Azul). Hero oscuro + cuerpo
// luminoso con imagen protagonista, aire y galería de secciones (hooks).
import { base, img } from "../lib";
import { LinkTelon } from "../transicion";

const SECCIONES = [
  { to: "/servicios", nm: "Servicios", ds: "Maquila, añejamiento, tonelería y despacho internacional.", im: "envejecimiento.webp" },
  { to: "/planta", nm: "La planta", ds: "45 años, 32 hectáreas y 156.000 barricas en Ocumare del Tuy.", im: "planta.webp" },
  { to: "/maestro", nm: "El maestro", ds: "Andrés Contreras, Mejor Maestro Ronero 2017 de la IRC.", im: "maestro.webp" },
];

export function Home() {
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

      {/* CUERPO LUMINOSO */}
      <div className="lx">
        <section className="lx-wrap lx-abre">
          <h2 className="rv">Traes tu marca; <b>nosotros ponemos el resto.</b></h2>
          <p className="rv d1">La ingeniería, la madera y el tiempo. La instalación más importante del sector licorero venezolano produce, añeja y exporta a escala para marcas y distribuidores, bajo un mismo techo.</p>
        </section>

        <section className="lx-wrap lx-foto">
          <div className="im parimg rv"><img src={img("barricas.webp")} alt="Barricas de roble en guarda" /></div>
        </section>

        <section className="lx-wrap lx-cifras">
          <div className="rv"><div className="n">45</div><div className="l">años elaborando<br />ron de Venezuela</div></div>
          <div className="rv d1"><div className="n">32<b> ha</b></div><div className="l">de instalación<br />industrial</div></div>
          <div className="rv d2"><div className="n">156<b> mil</b></div><div className="l">barricas de roble<br />blanco americano</div></div>
          <div className="rv d3"><div className="n">6</div><div className="l">líneas automatizadas<br />de envasado</div></div>
        </section>

        <section className="lx-wrap lx-hub">
          <div className="cab rv"><h2>Todo lo que CILCCA hace por tu marca.</h2></div>
          <div className="lx-cards">
            {SECCIONES.map((s, i) => (
              <LinkTelon key={s.to} to={s.to} className={"lx-card rv" + (i ? " d1" : "")}>
                <img src={img(s.im)} alt={s.nm} />
                <div className="ov" />
                <div className="ct">
                  <h3>{s.nm}</h3>
                  <p className="ds">{s.ds}</p>
                  <span className="mas">Descubrir</span>
                </div>
              </LinkTelon>
            ))}
          </div>
        </section>

        <section className="lx-wrap lx-cierre">
          <h2 className="rv">¿Listo para llevar tu marca a escala?</h2>
          <div className="act rv d1"><LinkTelon to="/contacto" className="cl-btn">Hablemos de tu proyecto</LinkTelon></div>
        </section>
      </div>
    </>
  );
}
