// CILCCA — one-pager B2B. Dirección 2026-10.
// Diagramación editorial sin tarjetas; fondo navy; fotos reales de la planta.
// Datos tomados de la fuente de marca (nada inventado).

const img = (n: string) => `${import.meta.env.BASE_URL}img/${n}`;
const logo = `${import.meta.env.BASE_URL}logo-cilcca.svg`;

export function Home() {
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

      {/* HERO */}
      <header id="inicio" className="cl-wrap cl-hero">
        <div className="tx">
          <h1>La plataforma industrial detrás de <em>los mejores licores de Venezuela.</em></h1>
          <p className="lead">Optimiza tu añejamiento, agiliza el embotellado y escala tu producción. Tu marca, elaborada a escala industrial en una sola planta.</p>
          <div className="meta"><span className="b" /> La instalación licorera más grande del país · Ocumare del Tuy</div>
        </div>
        <div className="im"><img src={img("hero.webp")} alt="Bodega de crianza CILCCA" /></div>
      </header>

      {/* CIFRAS */}
      <section className="cl-cifras">
        <div className="cl-wrap g">
          <div><div className="n">1981</div><div className="u" /><div className="l">fundada como<br />Destilería Pampero</div></div>
          <div><div className="n">32 ha</div><div className="u" /><div className="l">de instalación<br />industrial</div></div>
          <div><div className="n">156.000+</div><div className="u" /><div className="l">barricas de roble<br />blanco americano</div></div>
          <div><div className="n">6</div><div className="u" /><div className="l">líneas automatizadas<br />de envasado</div></div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="cl-sec">
        <div className="cl-wrap">
          <div className="cl-head">
            <h2>Todo el proceso del ron,<br />en una sola planta.</h2>
            <p>Traes tu marca; nosotros ponemos la ingeniería, la madera y el tiempo. Del añejamiento al despacho, bajo un mismo techo.</p>
          </div>

          <div className="cl-feat">
            <div className="im"><img src={img("envejecimiento.webp")} alt="Bodegas de crianza" /></div>
            <div className="pd">
              <h3>Envejecimiento</h3>
              <div className="sub">Bodegas de crianza masiva</div>
              <p>Seis naves con racks mecanizados y normativa antiexplosión. El ron reposa en roble blanco americano entre dos y doce años, en guarda controlada para cada marca que producimos.</p>
              <div className="fig">
                <div><div className="n">2–12</div><div className="k">años en roble</div></div>
                <div><div className="n">6</div><div className="k">naves de guarda</div></div>
              </div>
            </div>
          </div>

          <div className="cl-cols">
            <div className="cl-col">
              <div className="im"><img src={img("toneleria.webp")} alt="Tonelería" />
                <div className="pi"><svg viewBox="0 0 24 24"><path d="M5 4h14M5 20h14M6 4c-1 5-1 11 0 16M18 4c1 5 1 11 0 16M4 9h16M4 15h16" /></svg></div>
              </div>
              <h3>Tonelería y re-embarricado</h3>
              <p>Maestros toneleros propios arman y reparan las barricas in-house. A los cuatro años el ron se vacía y mezcla en tanques de acero inoxidable.</p>
            </div>
            <div className="cl-col">
              <div className="im"><img src={img("maquila.webp")} alt="Maquila y envasado" />
                <div className="pi"><svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v4l-2 3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V10l-2-3V3M8 13h8" /></svg></div>
              </div>
              <h3>Maquila, mezcla y envasado</h3>
              <p>Co-packing completo: elaboración del líquido, estabilización, filtrado con carbón activado y seis líneas automatizadas de llenado.</p>
            </div>
            <div className="cl-col">
              <div className="im"><img src={img("logistica.webp")} alt="Logística y exportación" />
                <div className="pi"><svg viewBox="0 0 24 24"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg></div>
              </div>
              <h3>Logística y exportación</h3>
              <p>Despacho a granel internacional con isotanques sellados, controles del SENIAT, Certificados de Origen y de Libre Venta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANTA / HISTORIA */}
      <section id="planta" className="cl-sec">
        <div className="cl-wrap cl-split">
          <div className="lx">
            <h2>45 años elaborando el ron de Venezuela.</h2>
            <p>Nacimos en 1981 como la Destilería Pampero. Pasamos por manos de United Distillers (DIAGEO) y Ponche Crema, y hoy operamos bajo Estelar Trading, como la instalación industrial más importante del sector licorero del país.</p>
            <div className="mini">
              <div className="im"><img src={img("barricas.webp")} alt="Barricas" /></div>
              <div className="im"><img src={img("logistica.webp")} alt="Racks mecanizados" /></div>
            </div>
          </div>
          <div className="rx">
            <div className="im"><img src={img("planta.webp")} alt="Planta CILCCA" /></div>
            <div className="ubi">
              <div className="t">UBICACIÓN</div>
              <div className="d">Carretera Ocumare a San Francisco de Yare, Sector Aponte · Ocumare del Tuy, Miranda</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAESTRO / PREMIOS */}
      <section id="maestro" className="cl-sec">
        <div className="cl-wrap">
          <div className="cl-maestro">
            <div className="mx">
              <h2>El maestro detrás de cada mezcla.</h2>
              <p>Andrés Contreras, químico con más de treinta años de experiencia. Su paciencia para añejar, la selección meticulosa de la madera y la supervisión de la destilación logran mezclas suaves, complejas y excepcionalmente equilibradas.</p>
              <div className="cl-sello">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6" /><path d="M8.5 14l-2 7 5.5-3 5.5 3-2-7" /></svg>
                <div><div className="st">Mejor Maestro Ronero 2017</div><div className="ss">International Rum Conference (IRC)</div></div>
              </div>
            </div>
            <div className="ph"><img src={img("maestro.webp")} alt="Maestro ronero Andrés Contreras" /></div>
          </div>

          <div className="cl-prods">
            <div className="pt">Lo que sale de la casa</div>
            <div className="cl-prodrow">
              <div><div className="im"><img src={img("prod-rones.webp")} alt="Rones con denominación de origen" /></div><div className="cap">Rones con D.O.<span>Añejados de 2 a 12 años en roble</span></div></div>
              <div><div className="im"><img src={img("prod-seleccion.webp")} alt="Selección de la casa" /></div><div className="cap">Selección de la casa<span>Mezclas de edición limitada</span></div></div>
              <div><div className="im"><img src={img("prod-copacking.webp")} alt="Co-packing de marcas" /></div><div className="cap">Co-packing de marcas<span>Más de 7 millones de cajas al año</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="cl-wrap">
        <div className="cl-cta">
          <img src={img("cta.webp")} alt="" />
          <div className="v" />
          <div className="cl-wrap in">
            <h2>Produce tu marca con CILCCA.</h2>
            <p>Soluciones a escala para marcas y distribuidores que buscan dónde producir su licor con estándar industrial.</p>
            <div className="row">
              <a href="#contacto" className="cl-btn">Hablemos de tu proyecto</a>
              <div className="dir">Carretera Ocumare a San Francisco de Yare, Sector Aponte, Ocumare del Tuy, Miranda · <span className="cl-pend">tel. y correo por confirmar</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cl-foot">
        <div className="cl-wrap in">
          <a className="cl-logo" href="#inicio"><img src={logo} alt="CILCCA" /></a>
          <div className="links">
            <a href="#servicios">Servicios</a>
            <a href="#planta">Planta</a>
            <a href="#maestro">Maestro</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="fdir">Complejo Industrial Licorero del Centro · Ocumare del Tuy, Estado Miranda, Venezuela</div>
        </div>
      </footer>
    </div>
  );
}
