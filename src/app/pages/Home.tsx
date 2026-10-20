// Home — solo el hero. El video del pasillo (estación 0 a 5s) y el hook B2B.
import { base, img } from "../lib";
import { LinkTelon } from "../transicion";

export function Home() {
  return (
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
  );
}
