// CILCCA — one-pager B2B. Dirección 2026-10 v2 (editorial + movimiento).
// Método design-taste-frontend: escala grande, imágenes a sangre, video real
// en el hero y capa de movimiento. Datos reales de la fuente de marca.
import { useEffect } from "react";

const base = import.meta.env.BASE_URL;
const img = (n: string) => `${base}img/${n}`;
const logo = `${base}logo-cilcca.svg`;

export function Home() {
  // Movimiento: cada elemento con .rv entra (desenfoque -> nitidez + subida)
  // cuando aparece en pantalla. Una sola vez.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    const reveal = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.filter = "none";
    };
    if (!("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            reveal(en.target as HTMLElement);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <div className="cl">
      {/* NAV */}
      <nav className="cl-nav">
        <div className="cl-wrap in">
          <a className="cl-logo" href="#inicio"><img src={logo} alt="CILCCA" /></a>
          <div className="cl-menu">
            <a href="#servicios">Servicios</a>
            <a href="#planta">Planta</a>
            <a href="#maestro">Maestro</a>
            <a href="#contacto" className="cl-btn">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO — estación 0 a 5s: el video se reproduce una vez y queda fijo en el cuadro final */}
      <header id="inicio" className="cl-hero">
        <img className="poster" src={img("hero-poster.webp")} alt="Pasillo de bodega de crianza de CILCCA" />
        <video autoPlay muted playsInline poster={img("hero-poster.webp")}>
          <source src={`${base}video/hero.mp4`} type="video/mp4" />
        </video>
        <div className="scrim" />
        <div className="cl-wrap in">
          <h1 className="rv">Donde nacen las marcas de ron.</h1>
          <p className="lead rv d1">La planta industrial más grande de Venezuela produce, añeja y embotella tu bebida a la escala que tu marca necesita.</p>
          <div className="act rv d2"><a href="#contacto" className="cl-btn">Produce con nosotros</a></div>
        </div>
      </header>

      {/* SOBRE + CIFRAS */}
      <section className="cl-sobre">
        <div className="cl-wrap">
          <div className="grid">
            <div>
              <h2 className="rv">De la barrica al despacho.</h2>
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

      {/* SERVICIOS */}
      <section id="servicios" className="cl-serv">
        <div className="cl-wrap">
          <h2 className="cl-sh rv">Todo el proceso, en una sola planta.</h2>
          <p className="cl-note rv d1">Del añejamiento al despacho internacional, con maestros, madera y líneas propias.</p>

          <div className="cl-feat">
            <div className="im parimg rv"><img src={img("envejecimiento.webp")} alt="Bodegas de crianza masiva" /></div>
            <div>
              <h3 className="rv d1">Bodegas de crianza masiva</h3>
              <p className="rv d2">Seis naves con racks mecanizados y normativa antiexplosión. El ron reposa en roble blanco americano entre dos y doce años, en guarda controlada para cada marca que producimos.</p>
              <div className="fig rv d3">
                <div><div className="n">2–12</div><div className="k">años en roble</div></div>
                <div><div className="n">6</div><div className="k">naves de guarda</div></div>
              </div>
            </div>
          </div>

          <div className="cl-tira">
            <div className="cl-card rv" tabIndex={0}>
              <img src={img("toneleria.webp")} alt="Tonelería y re-embarricado" />
              <div className="cap"><h4>Tonelería y re-embarricado</h4><p>Maestros toneleros propios arman y reparan las barricas in-house. A los cuatro años el ron se mezcla en tanques de acero inoxidable.</p></div>
            </div>
            <div className="cl-card rv d1" tabIndex={0}>
              <img src={img("maquila.webp")} alt="Maquila, mezcla y envasado" />
              <div className="cap"><h4>Maquila, mezcla y envasado</h4><p>Co-packing completo: elaboración del líquido, estabilización, filtrado con carbón activado y seis líneas automatizadas de llenado.</p></div>
            </div>
            <div className="cl-card rv d2" tabIndex={0}>
              <img src={img("logistica.webp")} alt="Logística y exportación" />
              <div className="cap"><h4>Logística y exportación</h4><p>Despacho a granel internacional con isotanques sellados, controles del SENIAT, Certificados de Origen y de Libre Venta.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA / PLANTA */}
      <section id="planta" className="cl-hist">
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

      {/* MAESTRO */}
      <section id="maestro" className="cl-maestro">
        <div className="cl-wrap">
          <div className="grid">
            <div>
              <h2 className="rv">El maestro detrás de cada mezcla.</h2>
              <p className="rv d1">Andrés Contreras, químico con más de treinta años de experiencia. Su paciencia para añejar, la selección meticulosa de la madera y la supervisión de la destilación logran mezclas suaves, complejas y excepcionalmente equilibradas.</p>
              <div className="premio rv d2">Mejor Maestro Ronero 2017<span>International Rum Conference (IRC)</span></div>
            </div>
            <div className="ph parimg rv d1"><img src={img("maestro.webp")} alt="Andrés Contreras, maestro ronero" /></div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="cl-prods">
        <div className="cl-wrap">
          <h2 className="cl-sh rv">Lo que sale de la casa.</h2>
          <div className="cl-prodrow">
            <div className="p rv"><div className="im"><img src={img("prod-rones.webp")} alt="Rones con denominación de origen" /></div><div className="cap">Rones con D.O.<span>Añejados de 2 a 12 años en roble</span></div></div>
            <div className="p rv d1"><div className="im"><img src={img("prod-seleccion.webp")} alt="Selección de la casa" /></div><div className="cap">Selección de la casa<span>Mezclas de edición limitada</span></div></div>
            <div className="p rv d2"><div className="im"><img src={img("prod-copacking.webp")} alt="Co-packing de marcas" /></div><div className="cap">Co-packing de marcas<span>Más de 7 millones de cajas al año</span></div></div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="cl-cta">
        <img className="bg" src={img("cta.webp")} alt="" />
        <div className="scrim" />
        <div className="cl-wrap in">
          <h2 className="rv">Produce tu marca con CILCCA.</h2>
          <p className="rv d1">Soluciones a escala para marcas y distribuidores que buscan dónde producir su licor con estándar industrial.</p>
          <p className="dir rv d2">Carretera Ocumare a San Francisco de Yare, Sector Aponte. Ocumare del Tuy, Miranda. <span className="pend">Teléfono y correo por confirmar.</span></p>
          <div className="act rv d3"><a href="#contacto" className="cl-btn">Hablemos de tu proyecto</a></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cl-foot">
        <div className="cl-wrap">
          <div className="name rv">CILCCA</div>
          <div className="row">
            <div className="links">
              <a href="#servicios">Servicios</a>
              <a href="#planta">Planta</a>
              <a href="#maestro">Maestro</a>
              <a href="#contacto">Contacto</a>
            </div>
            <div className="fdir">Complejo Industrial Licorero del Centro · Ocumare del Tuy, Estado Miranda, Venezuela</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
