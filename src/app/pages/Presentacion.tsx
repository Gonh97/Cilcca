// Presentación corporativa en versión web: /presentacion
// Página oculta (no aparece en el menú ni en buscadores). Recorre la misma
// historia que el PDF, con fotos grandes y animación atada al scroll, y al
// final ofrece descargar el PDF liviano.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Cifra, Icono } from "../ui";
import "../../styles/presentacion.css";

const B = `${import.meta.env.BASE_URL}presentacion/`;
// En el artefacto la descarga directa no funciona: VITE_PDF apunta al PDF publicado.
const PDF = import.meta.env.VITE_PDF || `${B}CILCCA-presentacion-corporativa-2026.pdf`;

/** Foto con versión para teléfono y para pantalla grande. */
function Foto({ n, alt = "", pos = "center", className = "", sizes = "100vw", ya = false, posM }: {
  n: string; alt?: string; pos?: string; className?: string; sizes?: string; ya?: boolean; posM?: string;
}) {
  return (
    <img className={className} src={`${B}${n}.webp`} srcSet={`${B}${n}-m.webp 1100w, ${B}${n}.webp 2400w`}
      sizes={sizes} alt={alt} loading={ya ? "eager" : "lazy"} decoding="async" style={{ objectPosition: pos, ["--pm" as string]: posM ?? pos }} />
  );
}

/** Pieza que entra desenfocada, sube y se enfoca. `d` = orden en la cascada. */
function R({ d = 0, as: Tag = "div", className = "", children }: {
  d?: number; as?: "div" | "p" | "h2" | "h3" | "li" | "span"; className?: string; children: ReactNode;
}) {
  return <Tag className={"rv " + className} style={{ ["--d" as string]: d }}>{children}</Tag>;
}

function Ic({ d }: { d: string }) {
  return <svg className="e-icon" viewBox="0 0 32 32" aria-hidden="true"><path d={d} /></svg>;
}

function BotonPdf({ grande = false }: { grande?: boolean }) {
  return (
    <a className={"p-btn" + (grande ? " grande" : "")} href={PDF} download target={import.meta.env.VITE_PDF ? "_blank" : undefined} rel="noopener">
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3V13M5.5 8.5L10 13L14.5 8.5M4 17H16" /></svg>
      {grande ? "Descargar en PDF" : "PDF"}
    </a>
  );
}

const HITOS = [
  ["1981", "Industrias Pampero funda la planta como la Destilería Pampero."],
  ["United Distillers", "La opera como parte de DIAGEO."],
  ["Ponche Crema", "Consolida estándares operativos de calidad internacional."],
  ["Hoy", "Bajo la administración de Estelar Trading, una plataforma de negocios inigualable."],
];

const VALORES = [
  ["Compromiso", "Dedicación total a los objetivos de la empresa y de nuestros aliados comerciales."],
  ["Calidad", "Excelencia en cada etapa del proceso industrial, del envejecimiento al embotellado."],
  ["Trabajo en equipo", "Sinergia operativa para garantizar eficiencia en 32 hectáreas de instalaciones."],
  ["Responsabilidad", "Cumplimiento riguroso de normativas, seguridad y tiempos de entrega impecables."],
  ["Innovación y mejora", "Optimización constante de procesos, como el sistema mecánico de almacenamiento."],
  ["Ética", "Transparencia y profesionalismo absoluto en el manejo de marcas de terceros y propias."],
];

const DATOS = [
  ["botella", "6 líneas", "automatizadas de llenado y envasado."],
  ["tanque", "2 plantas", "de tratamiento de aguas residuales y potables."],
  ["escudo", "100 % seguro", "instalaciones con sistema eléctrico antiexplosión."],
  ["matraz", "Laboratorio", "de control de calidad y sala computarizada."],
];

const SOLUCIONES = [
  ["botella", "Maquila (co-packing)"], ["reloj", "Envejecimiento"],
  ["toneleria", "Tonelería"], ["despacho", "Despacho internacional"],
];

const INGENIERIA = [
  ["ing-bodega", "Bodegas de crianza masiva", "Seis inmensas naves con capacidad para albergar entre 156.000 y 200.000 barricas de roble blanco americano, en racks mecanizados y seguros bajo normativa antiexplosión."],
  ["ing-toneleria", "El cuidado de la madera", "Maestros toneleros propios arman y reparan las barricas dentro de la planta. A los cuatro años el ron se vacía a tanques de acero inoxidable para calcular mermas y oxigenar el destilado."],
  ["ing-envasado", "Co-packing de clase mundial", "Elaboración de líquido, estabilización, filtrado con carbón activado para rones blancos y llenado en seis líneas automatizadas, con mezcla de hasta 7,15 millones de cajas al año."],
  ["ing-despacho", "Despacho internacional", "Logística de despacho con estrictos controles del SENIAT, despacho a granel en isotanques sellados, certificados de origen y cumplimiento de libre venta."],
];

const CATA = [
  ["Vista", "Color cobrizo profundo con destellos rojizos, herencia de su reposo en barricas ex-sherry, y una lágrima densa."],
  ["Nariz", "Notas intensas de madera con destellos frutales y florales; al fondo, vainilla, chocolate, café y frutos secos."],
  ["Boca", "Suave y balanceado, de carácter maderizado, con un retrogusto intenso que hace de cada sorbo una experiencia."],
];

const PREMIOS: [string, [string, string][]][] = [
  ["Edición Reservada", [["Oro 2013", "Madrid Rum Conference"], ["Oro 2013", "Miami Rum Festival"], ["Oro 2014", "Miami Rum Festival"],
    ["Oro 2015", "Miami Rum Festival"], ["Oro 2017", "Madrid Rum Conference"], ["Plata 2018", "Madrid Rum Conference"],
    ["Bronce 2012", "Madrid Rum Conference"], ["Bronce 2012", "Madrid Rum Conference"]]],
  ["Extra Añejo", [["Doble oro 2012", "I Congreso Internacional del Ron"], ["Oro 2013", "Miami Rum Festival"],
    ["Oro 2014", "III Congreso Internacional del Ron"], ["Doble oro 2016", "V Congreso Internacional del Ron"],
    ["Oro 2018", "Madrid Rum Conference"], ["Plata 2015", "IV Congreso Internacional del Ron"]]],
  ["Blanco Extra Añejo", [["Oro 2014", "Miami Rum Festival"], ["Oro 2017", "Madrid Rum Conference"], ["Plata 2018", "Madrid Rum Conference"],
    ["Plata 2018", "Madrid Rum Conference"], ["Bronce 2012", "Madrid Rum Conference"]]],
];
const MEDALLAS = ["gold-mrf-2013", "gold-mrf-2014", "gold-mrf-2015", "gold-mrc", "silver-mrc", "bronze-mrc"];

/** Motor de la página: entradas en cascada, progreso de las escenas y capítulo actual. */
function useEscenas(raiz: React.RefObject<HTMLDivElement | null>, setCap: (c: string) => void, setTono: (t: string) => void) {
  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    document.documentElement.classList.add("p-html");

    // Entradas: se animan una sola vez al aparecer.
    const piezas = el.querySelectorAll<HTMLElement>(".rv");
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    piezas.forEach((p) => io.observe(p));

    // Capítulo y tono de la barra según la sección que ocupa el centro.
    const caps = el.querySelectorAll<HTMLElement>("[data-cap]");
    const ioc = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const t = e.target as HTMLElement;
          setCap(t.dataset.cap || ""); setTono(t.dataset.tono || "d");
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" });
    caps.forEach((c) => ioc.observe(c));

    // Escenas atadas al scroll: cada [data-sc] recibe --p de 0 a 1.
    const escenas = Array.from(el.querySelectorAll<HTMLElement>("[data-sc]"));
    const barra = el.querySelector<HTMLElement>(".p-prog i");
    let raf = 0;
    const medir = () => {
      raf = 0;
      const vh = window.innerHeight;
      const tot = document.documentElement.scrollHeight - vh;
      if (barra) barra.style.transform = `scaleX(${tot > 0 ? window.scrollY / tot : 0})`;
      el.classList.toggle("scrolled", window.scrollY > 40);
      for (const s of escenas) {
        const r = s.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        let p: number;
        if (s.dataset.sc === "pin") p = -r.top / Math.max(1, r.height - vh);      // sección fijada: 0 al fijarse, 1 al soltarse
        else p = (vh - r.top) / (r.height + vh);                                    // de paso: 0 al asomar, 1 al irse
        p = Math.min(1, Math.max(0, p));
        s.style.setProperty("--p", p.toFixed(4));
        if (s.dataset.dx !== undefined) {
          const pista = s.querySelector<HTMLElement>(".p-pista");
          if (pista) s.style.setProperty("--dx", `${Math.max(0, pista.scrollWidth - pista.parentElement!.clientWidth)}px`);
        }
      }
    };
    const pedir = () => { if (!raf) raf = requestAnimationFrame(medir); };
    medir();
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", pedir);
    return () => {
      io.disconnect(); ioc.disconnect(); cancelAnimationFrame(raf);
      window.removeEventListener("scroll", pedir); window.removeEventListener("resize", pedir);
      document.documentElement.classList.remove("p-html");
    };
  }, [raiz, setCap, setTono]);
}

export function Presentacion() {
  const raiz = useRef<HTMLDivElement>(null);
  const [cap, setCap] = useState("");
  const [tono, setTono] = useState("d");
  const [sentido, setSentido] = useState(0);
  useEscenas(raiz, setCap, setTono);

  // Oculta para buscadores: no se indexa ni se sigue.
  useEffect(() => {
    const m = document.querySelector('meta[name="robots"]');
    const antes = m?.getAttribute("content");
    m?.setAttribute("content", "noindex, nofollow");
    const titulo = document.title;
    document.title = "CILCCA · Presentación corporativa 2026";
    window.scrollTo(0, 0);
    return () => { if (antes) m?.setAttribute("content", antes); document.title = titulo; };
  }, []);

  return (
    <div className="p" ref={raiz}>
      {/* Barra: isotipo, capítulo actual y descarga */}
      <header className={"p-bar " + tono}>
        <a href="#portada" className="iso" aria-label="Volver al inicio de la presentación">
          <img src={`${import.meta.env.BASE_URL}isotipo-cilcca.svg`} alt="" />
        </a>
        <span className="cap" aria-live="polite">{cap}</span>
        <BotonPdf />
        <div className="p-prog" aria-hidden="true"><i /></div>
      </header>

      {/* 1 · Portada: solo el logotipo */}
      <section id="portada" className="p-portada" data-cap="" data-tono="d" data-sc="">
        <video className="fondo" src={`${import.meta.env.BASE_URL}video/hero.mp4`} poster={`${import.meta.env.BASE_URL}img/hero-poster.webp`}
          autoPlay muted loop playsInline aria-hidden="true" />
        <div className="velo" />
        <div className="luz a" /><div className="luz b" />
        <h1 className="logo"><img src={`${B}logo-vertical-blanco.svg`} alt="CILCCA, Complejo Industrial Licorero del Centro" /></h1>
        <p className="sub">Presentación corporativa 2026</p>
        <a className="bajar" href="#quienes" aria-label="Comenzar"><span /></a>
      </section>

      {/* 2 · Quiénes somos: la planta entera */}
      <section id="quienes" className="p-abre" data-cap="Quiénes somos" data-tono="d" data-sc="pin">
        <div className="fijo">
          <div className="zoom"><Foto n="sep1" alt="Vista aérea del complejo industrial de CILCCA en Ocumare del Tuy" pos="center 58%" ya /></div>
          <div className="velo" />
          <div className="p-wrap txt">
            <h2 className="p-gigante">Quiénes<br />somos.</h2>
            <p className="p-dec">CILCCA representa una de las instalaciones industriales más importantes de Venezuela y la más grande de todo el sector licorero nacional.</p>
          </div>
        </div>
      </section>

      {/* 3 · Historia */}
      <section className="p-claro p-hist" data-cap="Historia" data-tono="l" data-sc="">
        <div className="p-wrap dos">
          <div>
            <R as="h2" className="p-tit">Nuestra historia.</R>
            <R as="p" d={1} className="p-cuerpo">Más de cuatro décadas de oficio industrial, desde la Destilería Pampero hasta la plataforma de negocios que es hoy.</R>
          </div>
          <R d={1} className="p-panel foto">
            <Foto n="historia" alt="" sizes="(max-width: 760px) 100vw, 50vw" pos="center 55%" />
            <div className="pv" />
            <div className="cifra">
              <span className="n">1981</span><i /><span className="lab">Excelencia industrial desde</span>
            </div>
          </R>
        </div>
        <div className="p-wrap">
          <ol className="p-linea">
            <span className="hilo" aria-hidden="true"><i /></span>
            {HITOS.map(([a, b], k) => (
              <li key={a} style={{ ["--k" as string]: k }}>
                <span className="nodo" aria-hidden="true" />
                <R as="h3" d={k} className="p-h">{a}</R>
                <R as="p" d={k + 0.5} className="p-chico">{b}</R>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 · Filosofía */}
      <section className="p-claro p-filo" data-cap="Filosofía" data-tono="l" data-sc="">
        <div className="p-wrap dos">
          <div className="col">
            <R as="h2" className="p-tit">Nuestra filosofía.</R>
            <R as="p" d={1} className="p-cuerpo">Brindar a nuestros clientes y aliados la mejor plataforma de negocios en el sector comercial de alcoholes y rones venezolanos.</R>
            <R d={2} className="p-panel">
              <h3 className="p-h w">Nuestra misión</h3>
              <p className="p-chico w8">Ser la primera empresa nacional del sector licorero, generando valor a los accionistas, reconocida como un excelente empleador y socialmente responsable.</p>
            </R>
          </div>
          <div className="p-cortina"><Foto n="filosofia" alt="Operarios en la planta de CILCCA" sizes="(max-width: 760px) 100vw, 50vw" pos="38% center" /></div>
        </div>
      </section>

      {/* 5 · Valores */}
      <section className="p-claro p-val" data-cap="Valores" data-tono="l">
        <div className="p-wrap dos">
          <div className="p-pegado"><div className="p-cortina alta"><Foto n="valores" alt="" sizes="(max-width: 760px) 100vw, 40vw" pos="42% center" /></div></div>
          <div>
            <R as="h2" className="p-tit">Nuestros valores.</R>
            <R as="p" d={1} className="p-cuerpo">Los principios que rigen nuestra excelencia operativa y compromiso industrial.</R>
            <ul className="p-valores">
              {VALORES.map(([n, d], k) => (
                <R as="li" key={n} d={k % 2}>
                  <h3 className="p-h">{n}</h3>
                  <p className="p-chico">{d}</p>
                </R>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 · La planta */}
      <section className="p-claro p-planta" data-cap="La planta" data-tono="l" data-sc="">
        <div className="p-wrap dos">
          <R className="p-panel foto alto">
            <Foto n="planta" alt="Instalaciones de la planta" sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="pv" />
            <div className="ha">
              <span className="n"><Cifra v={32} /></span>
              <p className="p-sub w">hectáreas de extensión territorial en Ocumare del Tuy, estado Miranda.</p>
            </div>
          </R>
          <div>
            <R as="h2" className="p-tit">Nuestra planta.</R>
            <R d={1} className="p-cifra l">
              <span className="n"><Cifra v={3.25} dec={2} /> MM</span><i /><span className="lab">cajas al año de capacidad de producción</span>
            </R>
            <ul className="p-datos">
              {DATOS.map(([ic, n, d], k) => (
                <R as="li" key={n} d={k}>
                  <Icono n={ic} />
                  <div><h3 className="p-h">{n}</h3><p className="p-chico">{d}</p></div>
                </R>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 · Servicios: la foto se abre hasta llenar la pantalla */}
      <section className="p-expande" data-cap="Servicios" data-tono="d" data-sc="pin">
        <div className="fijo">
          <div className="marco"><Foto n="sep2" alt="Tonelero armando una barrica" pos="22% center" posM="58% center" /></div>
          <div className="velo" />
          <div className="p-wrap txt">
            <h2 className="p-gigante">Servicios</h2>
            <ul className="temas">
              {SOLUCIONES.map(([, n]) => <li key={n}>{n}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* 8 · Soluciones a escala */}
      <section className="p-oscuro p-sol" data-cap="Soluciones a escala" data-tono="d" data-sc="">
        <div className="lado"><Foto n="soluciones" alt="Línea de envasado" sizes="(max-width: 760px) 100vw, 55vw" /></div>
        <div className="p-wrap">
          <div className="col">
            <R as="h2" className="p-decl">Diseñamos nuestra infraestructura con los más altos estándares para la producción por contrato.</R>
            <R as="p" d={1} className="p-cuerpo w8">Optimiza tu proceso de añejamiento, agiliza el embotellado y escala tu producción con CILCCA.</R>
            <ul className="p-sol-lista">
              {SOLUCIONES.map(([ic, n], k) => (
                <R as="li" key={n} d={k + 2}><Icono n={ic} /><span className="p-h w">{n}</span></R>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9 · Ingeniería y seguridad: recorrido horizontal */}
      <section className="p-oscuro p-ing" data-cap="Ingeniería y seguridad" data-tono="d" data-sc="pin" data-dx="">
        <div className="fijo">
          <div className="fondo"><Foto n="ingenieria" alt="" /></div>
          <div className="p-wrap cab">
            <R as="h2" className="p-tit w">Ingeniería y seguridad para su marca.</R>
            <R as="p" d={1} className="p-cuerpo w8">Servicios integrales de maquila y envejecimiento. Resguardamos sus activos líquidos e inventarios con el mayor rigor industrial del mercado.</R>
          </div>
          <div className="ventana">
            <div className="p-pista">
              {INGENIERIA.map(([im, n, d]) => (
                <article key={n} className="p-vidrio">
                  <Foto n={im} alt={n} sizes="(max-width: 760px) 85vw, 34vw" />
                  <div className="in"><h3 className="p-h w">{n}</h3><p className="p-chico w8">{d}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 · Nuestra gente */}
      <section className="p-abre claro" data-cap="Nuestra gente" data-tono="l" data-sc="pin">
        <div className="fijo">
          <div className="zoom"><Foto n="sep3" alt="Operarias en la línea de envasado" pos="35% center" /></div>
          <div className="velo" />
          <div className="p-wrap txt">
            <h2 className="p-gigante">Nuestra<br />gente.</h2>
            <p className="p-dec">El talento que sostiene cada etapa, de la barrica al despacho.</p>
          </div>
        </div>
      </section>

      {/* 11 · El maestro */}
      <section className="p-claro p-maestro" data-cap="El maestro ronero" data-tono="l" data-sc="">
        <div className="lado"><Foto n="maestro-cata" alt="El Maestro Ronero Andrés Contreras catando ron" sizes="(max-width: 760px) 100vw, 60vw" pos="62% center" /></div>
        <div className="p-wrap">
          <div className="col">
            <R as="h2" className="p-tit">El arte detrás de cada gota.</R>
            <R as="p" d={1} className="p-cuerpo">En CILCCA la escala industrial se equilibra con la delicadeza del trabajo artesanal. Ese proceso está bajo la batuta de nuestro Maestro Ronero, Andrés Contreras.</R>
            <R d={2} className="p-panel">
              <h3 className="p-h w">Mejor Maestro Ronero 2017</h3>
              <p className="p-nota">Madrid International Rum Conference</p>
              <p className="p-chico w8">Químico con más de 30 años de experiencia. Su paciencia para añejar, la selección meticulosa de la madera y la supervisión de la destilación le permiten lograr mezclas suaves, complejas y equilibradas.</p>
            </R>
          </div>
        </div>
      </section>

      {/* 12 · Nuestro equipo */}
      <section className="p-claro p-equipo" data-cap="Nuestro equipo" data-tono="l" data-sc="">
        <div className="p-wrap dos">
          <div>
            <R as="h2" className="p-tit">Nuestro equipo.</R>
            <R as="p" d={1} className="p-cuerpo">Maestros toneleros, operadores, laboratoristas y personal de despacho sostienen cada etapa del proceso, de la barrica al despacho.</R>
          </div>
          <div className="mosaico">
            {[["eq13", "Tonelería", "55% center"], ["eq100", "Bodega de crianza", "45% center"], ["eq148", "Línea de envasado", "center"]].map(([n, t, pos], k) => (
              <figure key={n} className={"m" + k}>
                <div className="lento"><Foto n={n} alt={t} sizes="(max-width: 760px) 100vw, 40vw" pos={pos} /></div>
                <figcaption>{t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 13 · Ron Ocumare */}
      <section className="p-abre negro" data-cap="Ron Ocumare" data-tono="k" data-sc="pin">
        <div className="fijo">
          <div className="zoom"><Foto n="p-sep" alt="Ron Ocumare" pos="28% center" posM="50% center" /></div>
          <div className="velo" />
          <div className="p-wrap txt">
            <img className="ocu" src={`${B}ocumare-iso-blanco.svg`} alt="" />
            <h2 className="p-gigante">Ron<br />Ocumare.</h2>
            <p className="p-dec">Nuestra marca bandera y el testimonio líquido de nuestra calidad.</p>
          </div>
        </div>
      </section>

      {/* 14 · Edición Reservada */}
      <section className="p-negro p-res" data-cap="Edición Reservada" data-tono="k">
        <div className="p-wrap dos">
          <div>
            <R as="h2" className="p-tit w">Edición Reservada.</R>
            <R as="p" d={1} className="p-cuerpo w8">Rones de 3 a 12 años, cuidadosamente añejados en barricas de roble para alcanzar una notable complejidad e integración de sabores y aromas.</R>
            <div className="cifras">
              <R d={2} className="p-cifra d"><span className="n">3 a 12</span><i /><span className="lab">años de añejamiento</span></R>
              <R d={3} className="p-cifra d"><span className="n chica">Premium</span><i /><span className="lab">categoría</span></R>
            </div>
          </div>
          <div className="botellas">
            {[["extra-anejo", "Extra Añejo", "La renovación de un producto que es parte del código genético de la marca. Complejidad y maestría ronera.", "6 medallas internacionales"],
              ["blanco-extra-anejo", "Blanco Extra Añejo", "Alma clara, esencia compleja: filtrado para conservar su claridad sin renunciar al carácter.", "5 medallas internacionales"]].map(([im, n, d, m], k) => (
              <R key={n} d={k + 1} className="p-vidrio botella">
                <img src={`${B}${im}.webp`} alt={`Ron Ocumare ${n}`} loading="lazy" />
                <div className="in"><h3 className="p-h w">{n}</h3><p className="p-chico w8">{d}</p><p className="p-nota">{m}</p></div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* 15 · Alma de Lanza */}
      <section className="p-negro p-alma" data-cap="Alma de Lanza" data-tono="k" data-sc="">
        <div className="lado"><Foto n="p-alma" alt="Ron Ocumare Alma de Lanza" sizes="(max-width: 760px) 100vw, 60vw" pos="55% center" /></div>
        <div className="p-wrap">
          <div className="col">
            <R as="h2" className="p-tit w">Alma de Lanza.</R>
            <R as="p" d={1} className="p-cuerpo w8">La ópera prima de nuestro maestro ronero. Rones añejados durante más de veinte años y sometidos a sucesivos reembarricados en distintos tipos de madera.</R>
            <R as="p" d={2} className="p-chico w8">Su botella, inspirada en la punta de una lanza, relata la historia de valentía y fuerza de los Quiriquires.</R>
            <div className="cifras">
              <R d={3} className="p-cifra d"><span className="n">+<Cifra v={20} /></span><i /><span className="lab">años de añejamiento</span></R>
              <R d={4} className="p-cifra d"><span className="n chica">Ultra Premium</span><i /><span className="lab">categoría</span></R>
            </div>
          </div>
        </div>
      </section>

      {/* 16 · Notas de cata: se elige el sentido */}
      <section className="p-negro p-cata" data-cap="Notas de cata" data-tono="k">
        <div className="p-wrap dos">
          <R className="foto"><img src={`${B}notas-cata.webp`} alt="Estuche y botella de Alma de Lanza" loading="lazy" /></R>
          <div>
            <R as="h2" className="p-tit w">Una experiencia sensorial absoluta.</R>
            <R d={1} className="sentidos" >
              <div role="tablist" aria-label="Notas de cata">
                {CATA.map(([n], k) => (
                  <button key={n} role="tab" type="button" aria-selected={k === sentido} onClick={() => setSentido(k)}>{n}</button>
                ))}
              </div>
              <div className="lectura" role="tabpanel">
                {CATA.map(([n, d], k) => <p key={n} className={"p-cuerpo w8" + (k === sentido ? " on" : "")} aria-hidden={k !== sentido}>{d}</p>)}
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* 17 · Premios */}
      <section className="p-negro p-premios" data-cap="Premios" data-tono="k">
        <div className="p-wrap dos">
          <R className="foto">
            <Foto n="p-tapon" alt="Tapón de Ron Ocumare" sizes="(max-width: 760px) 100vw, 40vw" pos="55% center" />
            <div className="pv" />
            <div className="p-cifra d"><span className="n grande"><Cifra v={19} /></span><i /><span className="lab">reconocimientos internacionales</span></div>
          </R>
          <div>
            <R as="h2" className="p-tit w">Excelencia internacional.</R>
            <div className="medallas">
              {MEDALLAS.map((m, k) => <R key={m} d={k * 0.6} as="span"><img src={`${B}medallas/${m}.webp`} alt="" loading="lazy" /></R>)}
            </div>
            <div className="columnas">
              {PREMIOS.map(([ed, items], k) => (
                <R key={ed} d={k} className="col">
                  <h3 className="p-h w">{ed}</h3>
                  <ul>{items.map(([a, b], j) => <li key={j}><b>{a}</b>{b}</li>)}</ul>
                </R>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 18 · Contacto y descarga */}
      <section className="p-contacto" data-cap="Contacto" data-tono="d" data-sc="">
        <div className="fondo"><Foto n="contacto" alt="" pos="60% center" /></div>
        <div className="velo" />
        <div className="p-wrap dos">
          <div>
            <R as="h2" className="p-tit w">Contacto.</R>
            <R as="p" d={1} className="p-dec">Permita que nuestro talento humano y nuestras instalaciones de 32 hectáreas sean el motor detrás del éxito de su marca.</R>
            <R d={2} className="acciones"><BotonPdf grande /></R>
          </div>
          <R d={1} className="p-vidrio datos">
            <div className="fila"><Ic d="M16 29C16 29 25 20.5 25 13A9 9 0 0 0 7 13C7 20.5 16 29 16 29ZM16 16.5A3.5 3.5 0 1 0 16 9.5A3.5 3.5 0 0 0 16 16.5Z" /><div><h3 className="p-h w">Dirección de la planta</h3><p className="p-chico w8">Carretera Ocumare a San Francisco de Yare, Sector Aponte, Ocumare del Tuy, estado Miranda, Venezuela.</p></div></div>
            <div className="fila"><Ic d="M4 8H28V24H4ZM4 8L16 17L28 8" /><div><a className="p-h w" href="mailto:contacto@cilcca.com">contacto@cilcca.com</a></div></div>
            <div className="fila"><Ic d="M16 4A12 12 0 1 0 16 28A12 12 0 1 0 16 4ZM4 16H28M16 4C12.5 8 12.5 24 16 28M16 4C19.5 8 19.5 24 16 28" /><div><a className="p-h w" href="https://cilcca.com">www.cilcca.com</a></div></div>
          </R>
        </div>
      </section>

      {/* 19 · Cierre: solo el logotipo */}
      <section className="p-cierre" data-cap="" data-tono="d">
        <div className="luz a" /><div className="luz b" />
        <R className="logo"><img src={`${B}logo-vertical-blanco.svg`} alt="CILCCA" /></R>
      </section>
    </div>
  );
}
