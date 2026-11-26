// Presentación visual de CILCCA: /presentacion
// Página oculta (no aparece en el menú ni en buscadores). Láminas a pantalla
// completa con el material de los videos Cinemático y Documental; la rueda del
// mouse pasa de una lámina a la siguiente. Al final se descarga el PDF liviano.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Cifra, Icono } from "../ui";
import "../../styles/presentacion.css";

const B = `${import.meta.env.BASE_URL}presentacion/`;
// En el artefacto la descarga directa no funciona: VITE_PDF apunta al PDF publicado.
const PDF = import.meta.env.VITE_PDF || `${B}CILCCA-presentacion-corporativa-2026.pdf`;
const TEL = () => window.matchMedia("(max-width: 760px)").matches;
type Conexion = { saveData?: boolean; effectiveType?: string };
const LIVIANO = () => {
  const c = (navigator as Navigator & { connection?: Conexion }).connection;
  return !!c && (c.saveData === true || /(^|-)2g$/.test(c.effectiveType || ""));
};

/** Desliza la página hasta `top` con una curva suave. Devuelve cuánto dura. */
let corrida = 0;
function deslizar(top: number) {
  const y0 = window.scrollY, d = top - y0;
  if (Math.abs(d) < 2) return 0;
  const dur = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 450 : Math.min(1400, 850 + Math.abs(d) * 0.2);
  const t0 = performance.now(), id = ++corrida;
  const curva = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const paso = (ahora: number) => {
    if (id !== corrida) return;
    const k = Math.min(1, (ahora - t0) / dur);
    window.scrollTo(0, y0 + d * curva(k));
    if (k < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
  return dur;
}

/** Película completa con sonido. Al terminar ofrece seguir a la lámina siguiente. */
function Pelicula({ alTerminar, n = "cinematico", cap = "La película", titulo = "CILCCA en un minuto.", texto = "La planta, su gente y su ron, de principio a fin. Con sonido.", clase = "" }: {
  alTerminar: () => void; n?: string; cap?: string; titulo?: string; texto?: string; clase?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const caja = useRef<HTMLElement>(null);
  const [estado, setEstado] = useState<"quieto" | "corre" | "pausa" | "fin">("quieto");
  const [cerca, setCerca] = useState(false);
  useEffect(() => {
    const el = caja.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      const v = ref.current;
      if (!v) return;
      if (e.isIntersecting) setCerca(true);
      if (!e.isIntersecting && !v.paused) { v.pause(); setEstado("pausa"); }
    }, { rootMargin: "100% 0px", threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const tocar = () => {
    const v = ref.current;
    if (!v) return;
    if (!v.src) v.src = `${B}video/${n}${TEL() ? "-m" : ""}.mp4`;
    if (v.paused) { if (estado === "fin") v.currentTime = 0; v.play().then(() => setEstado("corre")).catch(() => {}); }
    else { v.pause(); setEstado("pausa"); }
  };
  return (
    <section ref={caja} className={"l p-peli " + clase + " " + estado} data-cap={cap}>
      <div className="medio">
        <video ref={ref} poster={cerca ? `${B}video/${n}.jpg` : undefined} playsInline preload="none" onEnded={() => setEstado("fin")} onClick={tocar} />
      </div>
      <div className="velo" />
      <div className="cont">
        <div className="cab">
          <T as="h2" className="p-tit">{titulo}</T>
          <T as="p" d={1} className="p-txt">{texto}</T>
        </div>
        <div className="cue">
          <T d={2}>
            <button type="button" className="p-play" onClick={tocar} aria-label={estado === "corre" ? "Pausar la película" : "Ver la película"}>
              <span className="aro">{estado === "corre"
                ? <svg viewBox="0 0 24 24"><path d="M9 6V18M15 6V18" /></svg>
                : <svg viewBox="0 0 24 24"><path d="M8 5.5L18.5 12L8 18.5Z" /></svg>}</span>
              <span className="lbl">{estado === "corre" ? "Pausar" : estado === "fin" ? "Ver de nuevo" : estado === "pausa" ? "Seguir viendo" : "Ver la película"}</span>
            </button>
          </T>
        </div>
      </div>
      <button type="button" className="p-seguir" onClick={alTerminar} tabIndex={estado === "fin" ? 0 : -1}>
        <span>Seguir a la siguiente lámina</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V19M6 13L12 19L18 13" /></svg>
      </button>
    </section>
  );
}

/** Cuadro sacado de los videos, con versión liviana para el teléfono.
 *  Se pide recién cuando su lámina está a pantalla y media: con mala señal no se baja lo que no se ve. */
function Img({ n, alt = "", pos = "center", ya = false, className = "" }: {
  n: string; alt?: string; pos?: string; ya?: boolean; className?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [cerca, setCerca] = useState(ya);
  useEffect(() => {
    const el = ref.current;
    if (!el || cerca) return;
    // Se observa la lámina y no la foto: hay fotos corridas fuera de la pantalla a propósito
    // (la botella del portafolio) que nunca "entrarían" y no se cargarían.
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setCerca(true); io.disconnect(); } }, { rootMargin: "150% 0px" });
    io.observe(el.closest(".l") ?? el);
    return () => io.disconnect();
  }, [cerca]);
  const src = n.includes(".") ? `${B}${n}` : `${B}f/${n}.webp`;
  const set = n.includes(".") ? undefined : `${B}f/${n}-m.webp 1100w, ${B}f/${n}.webp 2400w`;
  return <img ref={ref} decoding="async" className={className} sizes="100vw" srcSet={cerca ? set : undefined} src={cerca ? src : undefined} alt={alt}
    style={{ objectPosition: pos }} />;
}

/** Clip en bucle. Se carga al acercarse y solo corre cuando se ve y está activo. */
function Vid({ n, activo = true, className = "" }: { n: string; activo?: boolean; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [cerca, setCerca] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const a = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setCerca(true); a.disconnect(); } }, { rootMargin: "150% 0px" });
    const b = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    a.observe(el); b.observe(el);
    return () => { a.disconnect(); b.disconnect(); };
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el || !cerca || LIVIANO()) return;
    if (!el.src) el.src = `${B}video/${n}${TEL() ? "-m" : ""}.mp4`;
    if (visible && activo) el.play().catch(() => {}); else el.pause();
  }, [cerca, visible, activo, n]);
  // Cada vez que su etapa se activa, el video arranca desde el principio.
  useEffect(() => {
    const el = ref.current;
    if (el && activo && el.src) el.currentTime = 0;
  }, [activo]);
  return <video ref={ref} className={className} poster={cerca ? `${B}video/${n}.jpg` : undefined} muted loop playsInline preload="none" aria-hidden="true" />;
}

/** Texto que entra al llegar a su lámina. `d` = orden en la cascada. */
function T({ d = 0, as: Tag = "div", className = "", children }: {
  d?: number; as?: "div" | "p" | "h1" | "h2" | "h3" | "span" | "ul" | "li"; className?: string; children: ReactNode;
}) {
  return <Tag className={"t " + className} style={{ ["--d" as string]: d }}>{children}</Tag>;
}

function BotonPdf({ grande = false }: { grande?: boolean }) {
  return (
    <a className={"p-pdf" + (grande ? " grande" : "")} href={PDF} download target={import.meta.env.VITE_PDF ? "_blank" : undefined} rel="noopener">
      <span>{grande ? "Descargar la presentación en PDF" : "PDF"}</span>
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3V13M5.5 8.5L10 13L14.5 8.5M4 17H16" /></svg>
    </a>
  );
}

/** Lista que elige qué se ve: pasar el mouse o tocar cambia la selección. */
function Lista({ items, sel, set, className = "" }: { items: string[]; sel: number; set: (k: number) => void; className?: string }) {
  return (
    <ul className={"p-lista " + className}>
      {items.map((n, k) => (
        <li key={n}>
          <button type="button" aria-pressed={k === sel} onMouseEnter={() => set(k)} onFocus={() => set(k)} onClick={() => set(k)}>
            <span className="k">{String(k + 1).padStart(2, "0")}</span>{n}
          </button>
        </li>
      ))}
    </ul>
  );
}

const HITOS = [
  ["1981", "Industrias Pampero funda la planta como la Destilería Pampero."],
  ["United Distillers", "La opera como parte de DIAGEO."],
  ["Ponche Crema", "Consolida estándares operativos de calidad internacional."],
  ["Hoy", "Bajo la administración de Estelar Trading, una plataforma de negocios inigualable."],
];

const VALORES: [string, string, string][] = [
  ["Compromiso", "Dedicación total a los objetivos de la empresa y de nuestros aliados comerciales.", "compromiso"],
  ["Calidad", "Excelencia en cada etapa del proceso industrial, del envejecimiento al embotellado.", "calidad"],
  ["Trabajo en equipo", "Sinergia operativa para garantizar eficiencia en 32 hectáreas de instalaciones.", "equipo"],
  ["Responsabilidad", "Cumplimiento riguroso de normativas, seguridad y tiempos de entrega impecables.", "responsabilidad"],
  ["Innovación y mejora", "Optimización constante de procesos, como el sistema mecánico de almacenamiento.", "innovacion"],
  ["Ética", "Transparencia y profesionalismo absoluto en el manejo de marcas de terceros y propias.", "etica"],
];

const BODEGAS: [string, ReactNode, string][] = [
  ["barrica", <Cifra v={200000} />, "barricas de roble blanco americano de capacidad, en seis naves de crianza masiva."],
  ["escudo", "Antiexplosión", "Racks mecanizados y seguros bajo normativa antiexplosión."],
  ["despacho", "Internacional", "Despacho con estrictos controles del SENIAT y granel en isotanques sellados."],
  ["sello", "Certificados", "De origen y de libre venta para cada exportación."],
];

const GRUPOS: [string, number, number][] = [
  ["Nosotros", 1, 4], ["Capacidad", 5, 7], ["La película", 8, 8], ["Nuestra gente", 9, 10], ["Ron Ocumare", 11, 15], ["Cierre", 16, 16],
];

const PROCESO: [string, string, string][] = [
  ["Destilación", "Columnas y alambiques de cobre concentran el destilado, la base de cada ron que sale de la planta.", "destileria"],
  ["Fermentación", "El primer paso del carácter: el mosto fermenta en tanques bajo control permanente.", "fermentacion"],
  ["Tonelería", "Maestros toneleros propios arman y reparan las barricas dentro de la planta. A los cuatro años el ron se vacía a tanques de acero inoxidable para calcular mermas y oxigenar el destilado.", "toneleria"],
  ["Añejamiento", "Seis inmensas naves con capacidad para albergar entre 156.000 y 200.000 barricas de roble blanco americano, en racks mecanizados y seguros bajo normativa antiexplosión.", "anejamiento"],
  ["Envasado", "Elaboración de líquido, estabilización, filtrado con carbón activado para rones blancos y llenado en seis líneas automatizadas, con mezcla de hasta 7,15 millones de cajas al año.", "envasado"],
];

const SOLUCIONES = ["Maquila (co-packing)", "Envejecimiento", "Tonelería", "Despacho internacional"];


const GENTE: [string, string, string][] = [
  ["043", "Tonelería", "50% center"], ["064", "Laboratorio", "45% center"], ["072", "Maestro ronero", "55% center"],
  ["049", "Bodega", "50% center"], ["083", "Envasado", "40% center"],
];

const PORTAFOLIO: { n: string; cat: string; d: string; dato: string; fondo: string; bot?: string; pos?: string }[] = [
  { n: "Extra Añejo", cat: "Edición Reservada", d: "La renovación de un producto que es parte del código genético de la marca. Complejidad y maestría ronera.", dato: "6 medallas internacionales", fondo: "ocu-extra", pos: "right center" },
  { n: "Blanco Extra Añejo", cat: "Edición Reservada", d: "Alma clara, esencia compleja: filtrado para conservar su claridad sin renunciar al carácter.", dato: "5 medallas internacionales", fondo: "ocu-blanco", pos: "right center" },
  { n: "Alma de Lanza", cat: "Ultra Premium", d: "La ópera prima de nuestro maestro ronero. Rones añejados durante más de veinte años y sometidos a sucesivos reembarricados en distintos tipos de madera.", dato: "Más de 20 años de añejamiento", fondo: "ocu-alma", pos: "right center" },
];

const CATA_IC = ["vista", "nariz", "boca"];
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
const MEDALLAS: [string, string][] = [
  ["gold-mrf-2013", "Oro · Miami Rum Festival 2013"], ["gold-mrf-2014", "Oro · Miami Rum Festival 2014"],
  ["gold-mrf-2015", "Oro · Miami Rum Festival 2015"], ["gold-mrc", "Oro · Madrid Rum Conference"],
  ["silver-mrc", "Plata · Madrid Rum Conference"], ["bronze-mrc", "Bronce · Madrid Rum Conference"],
];

/** Medalla de cada premio, con la misma regla que la web de Ron Ocumare. */
function medallas(premio: string, lugar: string): string[] {
  const ano = premio.match(/\d{4}/)?.[0] ?? "";
  if (lugar.includes("Miami")) return [`gold-mrf-${ano}`];
  const tipo = /plata/i.test(premio) ? "silver-mrc" : /bronce/i.test(premio) ? "bronze-mrc" : "gold-mrc";
  return /doble/i.test(premio) ? [tipo, tipo] : [tipo];
}

/** Motor: lámina activa (entradas), capítulo de la barra y la rueda que salta de lámina en lámina. */
function useLaminas(raiz: React.RefObject<HTMLDivElement | null>, setCap: (c: string) => void, setIdx: (i: number) => void) {
  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    document.documentElement.classList.add("p-html");
    const laminas = Array.from(el.querySelectorAll<HTMLElement>(".l"));

    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        const s = e.target as HTMLElement;
        if (e.intersectionRatio >= 0.5) {
          s.classList.add("on");
          setCap(s.dataset.cap || ""); setIdx(laminas.indexOf(s));
        } else if (!e.isIntersecting) s.classList.remove("on");
      });
    }, { threshold: [0, 0.5] });
    laminas.forEach((s) => io.observe(s));

    // Rueda con muescas: una muesca = una lámina. Trackpad y ruedas finas bajan normal.
    let bloqueo = 0;
    const actual = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let k = 0;
      laminas.forEach((s, i) => { if (s.offsetTop <= y) k = i; });
      return k;
    };
    const ir = (k: number) => {
      const s = laminas[Math.max(0, Math.min(laminas.length - 1, k))];
      bloqueo = Date.now() + deslizar(s.offsetTop) + 120;
    };
    // Paralaje: cada lámina sabe dónde está respecto de la pantalla (--o de -1 a 1).
    let pedido = 0;
    const medir = () => {
      pedido = 0;
      const vh = window.innerHeight, y = window.scrollY;
      for (const s of laminas) {
        const o = (s.offsetTop - y) / vh;
        if (o > -1.3 && o < 1.3) s.style.setProperty("--o", o.toFixed(4));
      }
    };
    const alMover = () => { if (!pedido) pedido = requestAnimationFrame(medir); };
    medir();
    window.addEventListener("scroll", alMover, { passive: true });
    window.addEventListener("resize", alMover);
    const rueda = (e: WheelEvent) => {
      if (e.ctrlKey || TEL()) return;
      if ((e.target as HTMLElement).closest(".p-desliza") && Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const muesca = e.deltaMode === 1 || Math.abs(e.deltaY) >= 50;
      if (!muesca) return;
      const k = actual(), s = laminas[k];
      // Si la lámina es más alta que la pantalla, se recorre normal hasta su borde.
      const abajo = e.deltaY > 0;
      const fin = s.offsetTop + s.offsetHeight - window.innerHeight;
      if (abajo && window.scrollY < fin - 4) return;
      e.preventDefault();
      if (Date.now() < bloqueo) return;
      if (!abajo && window.scrollY > s.offsetTop + 4) { ir(k); return; }
      ir(k + (abajo ? 1 : -1));
    };
    const tecla = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest("input, textarea")) return;
      const k = actual();
      if (["PageDown", "ArrowDown", " "].includes(e.key)) { e.preventDefault(); ir(k + 1); }
      if (["PageUp", "ArrowUp"].includes(e.key)) { e.preventDefault(); ir(k - 1); }
    };
    window.addEventListener("wheel", rueda, { passive: false });
    window.addEventListener("keydown", tecla);
    return () => {
      io.disconnect();
      window.removeEventListener("wheel", rueda);
      window.removeEventListener("keydown", tecla);
      window.removeEventListener("scroll", alMover);
      window.removeEventListener("resize", alMover);
      document.documentElement.classList.remove("p-html");
    };
  }, [raiz, setCap, setIdx]);
}

/** Avanza solo mientras su lámina está a la vista y nadie la está usando. */
function useAuto(n: number, ms: number, set: (f: (k: number) => number) => void, ref: React.RefObject<HTMLElement | null>) {
  const quieto = useRef(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const pausa = () => { quieto.current = false; };
    const sigue = () => { quieto.current = true; };
    el.addEventListener("pointerenter", pausa); el.addEventListener("pointerleave", sigue);
    const t = window.setInterval(() => {
      if (quieto.current && el.closest(".l")?.classList.contains("on")) set((k) => (k + 1) % n);
    }, ms);
    return () => { window.clearInterval(t); el.removeEventListener("pointerenter", pausa); el.removeEventListener("pointerleave", sigue); };
  }, [n, ms, set, ref]);
}

export function Presentacion() {
  const raiz = useRef<HTMLDivElement>(null);
  const [cap, setCap] = useState("");
  const [idx, setIdx] = useState(0);
  const [paso, setPaso] = useState(0);
  const [prod, setProd] = useState(0);
  const [sentido, setSentido] = useState(0);
  const [premio, setPremio] = useState(0);
  const [persona, setPersona] = useState(2);
  const procRef = useRef<HTMLDivElement>(null);
  useLaminas(raiz, setCap, setIdx);
  useAuto(PROCESO.length, 4000, setPaso, procRef);

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

  const TOTAL = 17;
  const irA = (k: number) => {
    const s = raiz.current?.querySelectorAll<HTMLElement>(".l")[k];
    if (s) deslizar(s.offsetTop);
  };

  return (
    <div className="p" ref={raiz}>
      <header className={"p-bar" + (idx > 0 ? " fija" : "")}>
        <button type="button" className="iso" onClick={() => irA(0)} aria-label="Volver al inicio de la presentación">
          <img src={`${import.meta.env.BASE_URL}isotipo-cilcca.svg`} alt="" />
        </button>
        <span className="cap">Complejo Industrial Licorero del Centro</span>
        <span className="cuenta" aria-hidden="true">{String(idx + 1).padStart(2, "0")}<i>/</i>{TOTAL}</span>
        <BotonPdf />
      </header>
      <nav className={"p-grupos" + (idx >= 11 && idx <= 15 ? " ron" : "")} aria-label="Capítulos">
        {GRUPOS.map(([n, a, z]) => {
          const dentro = idx >= a && idx <= z;
          const lleno = dentro ? (idx - a + 1) / (z - a + 1) : idx > z ? 1 : 0;
          return (
            <button key={n} type="button" className={dentro ? "si" : ""} onClick={() => irA(a)} aria-current={dentro}>
              <span className="n">{n}{dentro && z > a ? <small>{idx - a + 1} / {z - a + 1}</small> : null}</span>
              <i style={{ height: `${(z - a + 1) * 14}px`, ["--f" as string]: lleno }} />
            </button>
          );
        })}
      </nav>

      {/* 1 · Portada */}
      <section className="l p-portada" data-cap="">
        <div className="medio"><Vid n="portada" /></div>
        <div className="velo" />
        <div className="cont">
          <T as="h1" className="logo"><img src={`${B}logo-vertical-blanco.svg`} alt="CILCCA, Complejo Industrial Licorero del Centro" /></T>
          <T as="p" d={2} className="p-sub c">Presentación corporativa 2026</T>
        </div>
        <span className="p-bajar" aria-hidden="true"><i /></span>
      </section>


      {/* 2 · La planta en cifras (antes Quiénes somos) */}
      <section className="l p-cifras" data-cap="La planta">
        <div className="medio"><Img n="002" alt="Vista cenital del complejo de CILCCA con sus lagunas" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab">
            <T as="h2" className="p-tit">Nuestra planta.</T>
            <T as="p" d={1} className="p-txt">Una de las instalaciones industriales más importantes de Venezuela y la más grande de todo el sector licorero nacional, en Ocumare del Tuy, estado Miranda.</T>
          </div>
          <div className="cue">
            <div className="p-datos">
              <T as="span" d={1} className="dato"><b><Cifra v={32} /></b><span>hectáreas de extensión</span></T>
              <T as="span" d={2} className="dato"><b><Cifra v={3.25} dec={2} /><small> MM</small></b><span>cajas al año de capacidad</span></T>
              <T as="span" d={3} className="dato"><b><Cifra v={6} /></b><span>líneas automatizadas de llenado</span></T>
              <T as="span" d={4} className="dato"><b><Cifra v={2} /></b><span>plantas de tratamiento de aguas</span></T>
              <T as="span" d={5} className="dato"><b><Cifra v={100} /><small> %</small></b><span>sistema eléctrico antiexplosión</span></T>
            </div>
          </div>
        </div>
      </section>
      {/* 3 · Historia: línea de tiempo fija, todo a la vista */}
      <section className="l p-hist" data-cap="Historia">
        <div className="medio"><Img n="013" alt="Alambiques de cobre de la destilería" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab">
            <T as="h2" className="p-tit">Más de cuatro décadas<br />de oficio industrial.</T>
          </div>
          <div className="cue">
            <ol className="p-crono">
              <span className="hilo" aria-hidden="true" />
              {HITOS.map(([a, b], k) => (
                <T as="li" key={a} d={k + 1}>
                  <h3>{a}</h3>
                  <p className="p-txt">{b}</p>
                </T>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4 · Filosofía */}
      <section className="l p-der" data-cap="Filosofía">
        <div className="medio"><Img n="054" alt="Mano sobre una barrica a contraluz" pos="40% center" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Nuestra filosofía.</T></div>
          <div className="cue">
            <T as="p" d={1} className="p-dec">Brindar a nuestros clientes y aliados la mejor plataforma de negocios en el sector comercial de alcoholes y rones venezolanos.</T>
            <T d={2} className="p-mini">
              <h3 className="p-eti">Misión</h3>
              <p className="p-txt">Ser la primera empresa nacional del sector licorero, generando valor a los accionistas, reconocida como un excelente empleador y socialmente responsable.</p>
            </T>
          </div>
        </div>
      </section>

      {/* 5 · Valores: iconos, sin fotos */}
      <section className="l p-valores" data-cap="Valores">
        <div className="cont">
          <div className="cab">
            <T as="h2" className="p-tit">Nuestros valores.</T>
            <T as="p" d={1} className="p-txt">Los principios que rigen nuestra excelencia operativa y compromiso industrial.</T>
          </div>
          <div className="rejilla">
            {VALORES.map(([n, d, ic], k) => (
              <T key={n} d={k + 2} className="valor">
                <span className="ico" aria-hidden="true" style={{ ["--ic" as string]: `url(${new URL(`${B}iconos/${ic}.png`, document.baseURI).href})` }} />
                <h3>{n}</h3>
                <p className="p-txt">{d}</p>
              </T>
            ))}
          </div>
        </div>
      </section>


      {/* 7 · Proceso: cada etapa con su video */}
      <section className="l p-izq p-elige p-proc" data-cap="Proceso">
        <div className="medio">
          {PROCESO.map(([n, , v], k) => <Vid key={n} n={v} activo={k === paso} className={k === paso ? "si" : ""} />)}
        </div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Del cobre<br />a la botella.</T></div>
          <div className="cue" ref={procRef}>
            <T d={1}><Lista items={PROCESO.map((p) => p[0])} sel={paso} set={setPaso} className="con-barra" /></T>
            <T d={2} className="p-lee">
              {PROCESO.map(([n, d], k) => <p key={n} className={"p-txt" + (k === paso ? " si" : "")} aria-hidden={k !== paso}>{d}</p>)}
            </T>
          </div>
        </div>
      </section>

      {/* 8 · Soluciones a escala */}
      <section className="l p-izq abajo" data-cap="Servicios">
        <div className="medio"><Vid n="chorro" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Infraestructura para<br />la producción por contrato.</T></div>
          <div className="cue">
            <T as="p" d={1} className="p-dec">Optimiza tu proceso de añejamiento, agiliza el embotellado y escala tu producción con CILCCA.</T>
            <T d={2} as="ul" className="p-fila">{SOLUCIONES.map((s) => <li key={s}>{s}</li>)}</T>
          </div>
        </div>
      </section>

      {/* 9 · Bodegas */}
      <section className="l p-izq p-bodegas" data-cap="Bodegas de crianza">
        <div className="medio"><Img n="053" alt="Estibas de barricas en la bodega de añejamiento" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Bodegas de crianza.</T></div>
          <div className="cue">
            <div className="p-iconos">
              {BODEGAS.map(([ic, n, d], k) => (
                <T key={ic} d={k + 1} className="it">
                  <Icono n={ic} />
                  <b>{n}</b>
                  <p className="p-txt">{d}</p>
                </T>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 · La película: el video completo, con sonido */}
      <Pelicula alTerminar={() => irA(9)} />

      {/* 11 · Nuestra gente: franjas que se abren */}
      <section className="l p-gente" data-cap="Nuestra gente">
        <div className="cont">
          <div className="cab">
            <T as="h2" className="p-tit">Nuestra gente.</T>
            <T as="p" d={1} className="p-txt">Maestros toneleros, operadores, laboratoristas y personal de despacho sostienen cada etapa, de la barrica a la botella.</T>
          </div>
        </div>
        <T d={2} className="p-franjas p-desliza">
          {GENTE.map(([n, t, pos], k) => (
            <button key={n} type="button" className={k === persona ? "si" : ""} onMouseEnter={() => setPersona(k)} onFocus={() => setPersona(k)} onClick={() => setPersona(k)} aria-pressed={k === persona}>
              <Img n={n} alt={t} pos={pos} />
              <span>{t}</span>
            </button>
          ))}
        </T>
      </section>

      {/* 12 · El maestro ronero */}
      <section className="l p-izq abajo" data-cap="El maestro ronero">
        <div className="medio"><Vid n="cata" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">El arte detrás<br />de cada gota.</T></div>
          <div className="cue">
            <T as="p" d={1} className="p-dec">La escala industrial se equilibra con la delicadeza del trabajo artesanal, bajo la batuta de nuestro Maestro Ronero, Andrés Contreras.</T>
            <T d={2} className="p-mini">
              <h3 className="p-eti">Mejor Maestro Ronero 2017 · Madrid International Rum Conference</h3>
              <p className="p-txt">Químico con más de 30 años de experiencia en la selección de la madera, el añejamiento y la supervisión de la destilación.</p>
            </T>
          </div>
        </div>
      </section>

      {/* 12 · Apertura de Ron Ocumare: el logotipo en grande */}
      <section className="l p-ocu-abre rocu" data-cap="Ron Ocumare">
        <div className="medio tenue"><Vid n="ocumare" /></div>
        <div className="velo" />
        <div className="cont">
          <T as="h2" className="logo"><img src={`${B}ocumare-logo-blanco.svg`} alt="Ron Ocumare" /></T>
          <p className="ocu-palabras" aria-label="Tradición, carácter, maestría">
            {["Tradición", "Carácter", "Maestría"].map((w, k) => <T as="span" key={w} d={k * 2 + 3}>{w}</T>)}
          </p>
          <T as="p" d={10} className="p-dec c">Nuestra marca bandera y el testimonio líquido de nuestra calidad.</T>
        </div>
      </section>

      {/* 14 · Portafolio */}
      <section className="l p-izq p-elige p-port negro rocu" data-cap="Portafolio">
        <div className="medio">
          {PORTAFOLIO.map((p, k) => <Img key={p.n} n={p.fondo} alt={`Ron Ocumare ${p.n}`} pos={p.pos} className={k === prod ? "si" : ""} />)}
        </div>
        <div className="velo" />
        {PORTAFOLIO.map((p, k) => p.bot && <img key={p.n} className={"p-bot" + (k === prod ? " si" : "")} src={`${B}${p.bot}`} alt={`Ron Ocumare ${p.n}`} loading="lazy" />)}
        <div className="cont">
          <div className="cab">
            <T as="h2" className="p-tit">Tres expresiones.<br />Un mismo legado.</T>
            <T as="p" d={1} className="p-txt">La línea Edición Reservada reúne rones de 3 a 12 años, añejados en barricas de roble. Alma de Lanza es nuestra expresión ultra premium.</T>
          </div>
          <div className="cue">
            <T d={1}><Lista items={PORTAFOLIO.map((p) => p.n)} sel={prod} set={setProd} /></T>
            <T d={2} className="p-lee">
              {PORTAFOLIO.map((p, k) => (
                <div key={p.n} className={"p-ficha" + (k === prod ? " si" : "")} aria-hidden={k !== prod}>
                  <span className="p-eti">{p.cat}</span>
                  <p className="p-txt">{p.d}</p>
                  <span className="p-pie">{p.dato}</span>
                </div>
              ))}
            </T>
          </div>
        </div>
      </section>

      {/* Alma de Lanza: el video del producto */}
      <Pelicula alTerminar={() => irA(14)} n="alma" cap="Alma de Lanza" clase="rocu" titulo="Alma de Lanza." texto="La ópera prima de nuestro maestro ronero, en su propio video. Con sonido." />

      {/* 15 · Notas de cata */}
      <section className="l p-der negro rocu" data-cap="Notas de cata">
        <div className="medio"><Vid n="llenado" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Una experiencia<br />sensorial absoluta.</T></div>
          <div className="cue">
            <T d={1} className="p-sentidos" >
              <div role="tablist" aria-label="Notas de cata">
                {CATA.map(([n], k) => (
                  <button key={n} role="tab" type="button" aria-selected={k === sentido} onClick={() => setSentido(k)} onMouseEnter={() => setSentido(k)}>
                    <span className="ico" aria-hidden="true" style={{ ["--ic" as string]: `url(${new URL(`${B}iconos/${CATA_IC[k]}.png`, document.baseURI).href})` }} />{n}
                  </button>
                ))}
              </div>
            </T>
            <T d={2} className="p-lee" >
              {CATA.map(([n, d], k) => <p key={n} className={"p-dec" + (k === sentido ? " si" : "")} aria-hidden={k !== sentido}>{d}</p>)}
            </T>
          </div>
        </div>
      </section>

      {/* 16 · Premios, como la lista de premios de ronocumare.com */}
      <section className="l p-premios negro rocu" data-cap="Premios">
        <div className="medio tenue"><Img n="036" alt="" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab">
            <T as="span" className="p-eti">Reconocimientos internacionales</T>
            <T d={1} className="p-num"><Cifra v={19} /></T>
            <T as="h2" d={2} className="p-tit">Excelencia premiada en Madrid y Miami.</T>
          </div>
          <div className="cue">
            <T d={3} className="p-tabs" role="tablist" aria-label="Premios por producto">
              {PREMIOS.map(([ed], k) => (
                <button key={ed} type="button" role="tab" aria-selected={k === premio} onClick={() => setPremio(k)} onMouseEnter={() => setPremio(k)}>{ed}<span>{PREMIOS[k][1].length}</span></button>
              ))}
            </T>
            <T d={4} className="p-lee">
              {PREMIOS.map(([ed, items], k) => (
                <ul key={ed} className={"ocu-premios" + (k === premio ? " si" : "")} aria-hidden={k !== premio}>
                  {items.map(([a, b], j) => (
                    <li key={j}>
                      <span className={"med" + (medallas(a, b).length > 1 ? " doble" : "")}>
                        {medallas(a, b).map((m, q) => <img key={q} src={`${B}medallas/${m}.webp`} alt="" loading="lazy" />)}
                      </span>
                      <span className="txt"><b>{a.startsWith("Doble") ? a.replace("Doble oro", "Doble medalla de oro") : "Medalla de " + a.toLowerCase()}</b><span>{b}</span></span>
                    </li>
                  ))}
                </ul>
              ))}
            </T>
          </div>
        </div>
      </section>


      {/* Cierre: el logotipo y la descarga del PDF */}
      <section className="l p-cierre" data-cap="">
        <div className="medio tenue"><Vid n="portada" /></div>
        <div className="velo" />
        <div className="cont">
          <T className="logo"><img src={`${B}logo-vertical-blanco.svg`} alt="CILCCA, Complejo Industrial Licorero del Centro" /></T>
          <T d={2} className="baja"><BotonPdf grande /></T>
        </div>
      </section>
    </div>
  );
}
