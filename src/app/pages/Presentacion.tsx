// Presentación visual de CILCCA: /presentacion
// Página oculta (no aparece en el menú ni en buscadores). Láminas a pantalla
// completa con el material de los videos Cinemático y Documental; la rueda del
// mouse pasa de una lámina a la siguiente. Al final se descarga el PDF liviano.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Cifra } from "../ui";
import "../../styles/presentacion.css";

const B = `${import.meta.env.BASE_URL}presentacion/`;
// En el artefacto la descarga directa no funciona: VITE_PDF apunta al PDF publicado.
const PDF = import.meta.env.VITE_PDF || `${B}CILCCA-presentacion-corporativa-2026.pdf`;
const TEL = () => window.matchMedia("(max-width: 760px)").matches;

/** Cuadro sacado de los videos, con versión liviana para el teléfono. */
function Img({ n, alt = "", pos = "center", ya = false, className = "" }: {
  n: string; alt?: string; pos?: string; ya?: boolean; className?: string;
}) {
  const src = n.includes(".") ? `${B}${n}` : `${B}f/${n}.webp`;
  const set = n.includes(".") ? undefined : `${B}f/${n}-m.webp 1100w, ${B}f/${n}.webp 2400w`;
  return <img className={className} src={src} srcSet={set} sizes="100vw" alt={alt}
    loading={ya ? "eager" : "lazy"} decoding="async" style={{ objectPosition: pos }} />;
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
    if (!el || !cerca) return;
    if (!el.src) el.src = `${B}video/${n}${TEL() ? "-m" : ""}.mp4`;
    if (visible && activo) el.play().catch(() => {}); else el.pause();
  }, [cerca, visible, activo, n]);
  return <video ref={ref} className={className} poster={`${B}video/${n}.jpg`} muted loop playsInline preload="none" aria-hidden="true" />;
}

/** Texto que entra al llegar a su lámina. `d` = orden en la cascada. */
function T({ d = 0, as: Tag = "div", className = "", children }: {
  d?: number; as?: "div" | "p" | "h1" | "h2" | "h3" | "span" | "ul"; className?: string; children: ReactNode;
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
  ["Compromiso", "Dedicación total a los objetivos de la empresa y de nuestros aliados comerciales.", "026"],
  ["Calidad", "Excelencia en cada etapa del proceso industrial, del envejecimiento al embotellado.", "058"],
  ["Trabajo en equipo", "Sinergia operativa para garantizar eficiencia en 32 hectáreas de instalaciones.", "086"],
  ["Responsabilidad", "Cumplimiento riguroso de normativas, seguridad y tiempos de entrega impecables.", "041"],
  ["Innovación y mejora", "Optimización constante de procesos, como el sistema mecánico de almacenamiento.", "009"],
  ["Ética", "Transparencia y profesionalismo absoluto en el manejo de marcas de terceros y propias.", "030"],
];

const PROCESO: [string, string, string][] = [
  ["Destilación", "Columnas y alambiques de cobre concentran el destilado, la base de cada ron que sale de la planta.", "destileria"],
  ["Fermentación", "El primer paso del carácter: el mosto fermenta en tanques bajo control permanente.", "fermentacion"],
  ["Tonelería", "Maestros toneleros propios arman y reparan las barricas dentro de la planta. A los cuatro años el ron se vacía a tanques de acero inoxidable para calcular mermas y oxigenar el destilado.", "toneleria"],
  ["Añejamiento", "Seis inmensas naves con capacidad para albergar entre 156.000 y 200.000 barricas de roble blanco americano, en racks mecanizados y seguros bajo normativa antiexplosión.", "anejamiento"],
  ["Envasado", "Elaboración de líquido, estabilización, filtrado con carbón activado para rones blancos y llenado en seis líneas automatizadas, con mezcla de hasta 7,15 millones de cajas al año.", "envasado"],
];

const SOLUCIONES = ["Maquila (co-packing)", "Envejecimiento", "Tonelería", "Despacho internacional"];

const RECORRIDO: [string, string][] = [
  ["001", "La planta desde el aire"], ["006", "Columnas de cobre"], ["007", "Tuberías de la destilería"],
  ["024", "Fermentación"], ["027", "Ron entrando en la barrica"], ["034", "Duela de roble"],
  ["047", "Llenado de barricas"], ["052", "Bodega de añejamiento"], ["059", "Muestras de laboratorio"],
  ["061", "Mezclas en evaluación"], ["074", "Cata del maestro"], ["079", "Línea de envasado"],
  ["080", "Botellas en la línea"], ["082", "Llenado"], ["084", "Llenadora"], ["092", "Control de etiqueta"], ["097", "Producto terminado"],
];

const GENTE: [string, string, string][] = [
  ["031", "Tonelería", "50% center"], ["064", "Laboratorio", "45% center"], ["072", "Maestro ronero", "55% center"],
  ["049", "Bodega", "50% center"], ["083", "Envasado", "40% center"], ["043", "Oficio", "50% center"],
];

const PORTAFOLIO: { n: string; cat: string; d: string; dato: string; fondo: string; bot?: string }[] = [
  { n: "Edición Reservada", cat: "Premium", d: "Rones de 3 a 12 años, cuidadosamente añejados en barricas de roble para alcanzar una notable complejidad e integración de sabores y aromas.", dato: "8 medallas internacionales", fondo: "105" },
  { n: "Extra Añejo", cat: "Edición Reservada", d: "La renovación de un producto que es parte del código genético de la marca. Complejidad y maestría ronera.", dato: "6 medallas internacionales", fondo: "100", bot: "extra-anejo.webp" },
  { n: "Blanco Extra Añejo", cat: "Edición Reservada", d: "Alma clara, esencia compleja: filtrado para conservar su claridad sin renunciar al carácter.", dato: "5 medallas internacionales", fondo: "102", bot: "blanco-extra-anejo.webp" },
  { n: "Alma de Lanza", cat: "Ultra Premium", d: "La ópera prima de nuestro maestro ronero. Rones añejados durante más de veinte años y sometidos a sucesivos reembarricados en distintos tipos de madera.", dato: "Más de 20 años de añejamiento", fondo: "p-alma.webp" },
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
const MEDALLAS: [string, string][] = [
  ["gold-mrf-2013", "Oro · Miami Rum Festival 2013"], ["gold-mrf-2014", "Oro · Miami Rum Festival 2014"],
  ["gold-mrf-2015", "Oro · Miami Rum Festival 2015"], ["gold-mrc", "Oro · Madrid Rum Conference"],
  ["silver-mrc", "Plata · Madrid Rum Conference"], ["bronze-mrc", "Bronce · Madrid Rum Conference"],
];

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
      window.scrollTo({ top: s.offsetTop, behavior: "smooth" });
    };
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
      if (!abajo && window.scrollY > s.offsetTop + 4) { e.preventDefault(); if (Date.now() > bloqueo) { bloqueo = Date.now() + 750; ir(k); } return; }
      e.preventDefault();
      if (Date.now() < bloqueo) return;
      bloqueo = Date.now() + 750;
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
  const [hito, setHito] = useState(0);
  const [valor, setValor] = useState(0);
  const [paso, setPaso] = useState(0);
  const [prod, setProd] = useState(0);
  const [sentido, setSentido] = useState(0);
  const [premio, setPremio] = useState(0);
  const [persona, setPersona] = useState(2);
  const tira = useRef<HTMLDivElement>(null);
  const procRef = useRef<HTMLDivElement>(null);
  const histRef = useRef<HTMLDivElement>(null);
  useLaminas(raiz, setCap, setIdx);
  useAuto(PROCESO.length, 7000, setPaso, procRef);
  useAuto(HITOS.length, 5000, setHito, histRef);

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

  const mover = (dir: number) => {
    const t = tira.current;
    if (t) t.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: "smooth" });
  };
  const TOTAL = 18;
  const irA = (k: number) => {
    const s = raiz.current?.querySelectorAll<HTMLElement>(".l")[k];
    if (s) window.scrollTo({ top: s.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="p" ref={raiz}>
      <header className={"p-bar" + (idx > 0 ? " fija" : "")}>
        <button type="button" className="iso" onClick={() => irA(0)} aria-label="Volver al inicio de la presentación">
          <img src={`${import.meta.env.BASE_URL}isotipo-cilcca.svg`} alt="" />
        </button>
        <span className="cap" aria-live="polite">{cap}</span>
        <span className="cuenta" aria-hidden="true">{String(idx + 1).padStart(2, "0")}<i>/</i>{TOTAL}</span>
        <BotonPdf />
      </header>
      <nav className="p-puntos" aria-label="Láminas">
        {Array.from({ length: TOTAL }, (_, k) => (
          <button key={k} type="button" aria-label={`Ir a la lámina ${k + 1}`} aria-current={k === idx} onClick={() => irA(k)} />
        ))}
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

      {/* 2 · Quiénes somos */}
      <section className="l p-izq abajo" data-cap="Quiénes somos">
        <div className="medio"><Vid n="planta" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-gig">Quiénes<br />somos</T></div>
          <div className="cue">
            <T as="p" d={1} className="p-dec">Una de las instalaciones industriales más importantes de Venezuela y la más grande de todo el sector licorero nacional.</T>
            <T d={2} className="p-pie">Ocumare del Tuy · Estado Miranda</T>
          </div>
        </div>
      </section>

      {/* 3 · Historia */}
      <section className="l p-izq p-hist" data-cap="Historia">
        <div className="medio"><Img n="013" alt="Alambiques de cobre de la destilería" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab">
            <T as="h2" className="p-tit">Más de cuatro décadas<br />de oficio industrial.</T>
          </div>
          <div className="cue" ref={histRef}>
            <T className="p-hito">
              {HITOS.map(([a, b], k) => (
                <div key={a} className={"ver" + (k === hito ? " si" : "")} aria-hidden={k !== hito}>
                  <span className="ano">{a}</span>
                  <p className="p-txt">{b}</p>
                </div>
              ))}
            </T>
            <T d={1} as="div" className="p-linea">
              {HITOS.map(([a], k) => (
                <button key={a} type="button" aria-pressed={k === hito} onMouseEnter={() => setHito(k)} onFocus={() => setHito(k)} onClick={() => setHito(k)}>
                  <i /><span>{a}</span>
                </button>
              ))}
            </T>
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

      {/* 5 · Valores: la lista cambia la foto */}
      <section className="l p-izq p-elige" data-cap="Valores">
        <div className="medio">
          {VALORES.map(([n, , f], k) => <Img key={n} n={f} alt="" className={k === valor ? "si" : ""} />)}
        </div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Nuestros valores.</T></div>
          <div className="cue">
            <T d={1}><Lista items={VALORES.map((v) => v[0])} sel={valor} set={setValor} /></T>
            <T d={2} className="p-lee">
              {VALORES.map(([n, d], k) => <p key={n} className={"p-txt" + (k === valor ? " si" : "")} aria-hidden={k !== valor}>{d}</p>)}
            </T>
          </div>
        </div>
      </section>

      {/* 6 · La planta en cifras */}
      <section className="l p-izq abajo p-cifras" data-cap="La planta">
        <div className="medio"><Img n="002" alt="Vista cenital del complejo de CILCCA con sus lagunas" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Nuestra planta.</T></div>
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
      <section className="l p-der" data-cap="Bodegas de crianza">
        <div className="medio"><Img n="053" alt="Estibas de barricas en la bodega de añejamiento" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab">
            <T className="p-num"><Cifra v={200000} /></T>
            <T as="p" d={1} className="p-eti">barricas de roble blanco americano de capacidad</T>
          </div>
          <div className="cue">
            <T as="p" d={2} className="p-dec">Seis naves de crianza masiva, en racks mecanizados y seguros bajo normativa antiexplosión.</T>
            <T as="p" d={3} className="p-txt">Despacho internacional con estrictos controles del SENIAT, granel en isotanques sellados, certificados de origen y cumplimiento de libre venta.</T>
          </div>
        </div>
      </section>

      {/* 10 · Recorrido: la planta por dentro */}
      <section className="l p-recorrido" data-cap="La planta por dentro">
        <div className="cont">
          <div className="cab">
            <T as="h2" className="p-tit">La planta por dentro.</T>
            <T d={1} className="flechas">
              <button type="button" onClick={() => mover(-1)} aria-label="Fotos anteriores"><svg viewBox="0 0 24 24"><path d="M15 5L8 12L15 19" /></svg></button>
              <button type="button" onClick={() => mover(1)} aria-label="Fotos siguientes"><svg viewBox="0 0 24 24"><path d="M9 5L16 12L9 19" /></svg></button>
            </T>
          </div>
        </div>
        <T d={2} className="p-tira p-desliza">
          <div ref={tira} className="pista">
            {RECORRIDO.map(([n, t]) => (
              <figure key={n}><Img n={n} alt={t} /><figcaption>{t}</figcaption></figure>
            ))}
          </div>
        </T>
      </section>

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

      {/* 13 · Ron Ocumare */}
      <section className="l p-der negro" data-cap="Ron Ocumare">
        <div className="medio"><Img n="104" alt="Botella de Ron Ocumare bajo luz cálida" pos="30% center" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab">
            <T><img className="ocu" src={`${B}ocumare-iso-blanco.svg`} alt="" /></T>
            <T as="h2" d={1} className="p-gig">Ron<br />Ocumare</T>
          </div>
          <div className="cue"><T as="p" d={2} className="p-dec">Nuestra marca bandera y el testimonio líquido de nuestra calidad.</T></div>
        </div>
      </section>

      {/* 14 · Portafolio */}
      <section className="l p-izq p-elige p-port negro" data-cap="Portafolio">
        <div className="medio">
          {PORTAFOLIO.map((p, k) => <Img key={p.n} n={p.fondo} alt="" className={k === prod ? "si" : ""} />)}
        </div>
        <div className="velo" />
        {PORTAFOLIO.map((p, k) => p.bot && <img key={p.n} className={"p-bot" + (k === prod ? " si" : "")} src={`${B}${p.bot}`} alt={`Ron Ocumare ${p.n}`} loading="lazy" />)}
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">El portafolio.</T></div>
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

      {/* 15 · Notas de cata */}
      <section className="l p-der negro" data-cap="Notas de cata">
        <div className="medio"><Img n="077" alt="Ron sirviéndose en una copa de cata" pos="60% center" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Una experiencia<br />sensorial absoluta.</T></div>
          <div className="cue">
            <T d={1} className="p-sentidos" >
              <div role="tablist" aria-label="Notas de cata">
                {CATA.map(([n], k) => (
                  <button key={n} role="tab" type="button" aria-selected={k === sentido} onClick={() => setSentido(k)} onMouseEnter={() => setSentido(k)}>{n}</button>
                ))}
              </div>
            </T>
            <T d={2} className="p-lee" >
              {CATA.map(([n, d], k) => <p key={n} className={"p-dec" + (k === sentido ? " si" : "")} aria-hidden={k !== sentido}>{d}</p>)}
            </T>
          </div>
        </div>
      </section>

      {/* 16 · Premios */}
      <section className="l p-premios negro" data-cap="Premios">
        <div className="medio tenue"><Img n="036" alt="" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab">
            <T className="p-num"><Cifra v={19} /></T>
            <T as="p" d={1} className="p-eti">reconocimientos internacionales</T>
          </div>
          <T d={2} className="p-medallas">
            {MEDALLAS.map(([m, t], k) => (
              <figure key={m} style={{ ["--k" as string]: k }} tabIndex={0}>
                <img src={`${B}medallas/${m}.webp`} alt={t} loading="lazy" />
                <figcaption>{t}</figcaption>
              </figure>
            ))}
          </T>
          <div className="cue">
            <T d={3} className="p-tabs" role="tablist" aria-label="Premios por producto">
              {PREMIOS.map(([ed], k) => (
                <button key={ed} type="button" role="tab" aria-selected={k === premio} onClick={() => setPremio(k)} onMouseEnter={() => setPremio(k)}>{ed}<span>{PREMIOS[k][1].length}</span></button>
              ))}
            </T>
            <T d={4} className="p-lee">
              {PREMIOS.map(([ed, items], k) => (
                <ul key={ed} className={"p-premios-lista" + (k === premio ? " si" : "")} aria-hidden={k !== premio}>
                  {items.map(([a, b], j) => <li key={j}><b>{a}</b><span>{b}</span></li>)}
                </ul>
              ))}
            </T>
          </div>
        </div>
      </section>

      {/* 17 · Contacto y descarga */}
      <section className="l p-izq abajo p-contacto" data-cap="Contacto">
        <div className="medio"><Img n="081" alt="Nave de envasado de CILCCA" /></div>
        <div className="velo" />
        <div className="cont">
          <div className="cab"><T as="h2" className="p-tit">Hagamos crecer<br />su marca.</T></div>
          <div className="cue">
            <T as="p" d={1} className="p-dec">Permita que nuestro talento humano y nuestras instalaciones de 32 hectáreas sean el motor detrás del éxito de su marca.</T>
            <T d={2}><BotonPdf grande /></T>
            <T d={3} className="p-datos-c">
              <p>Carretera Ocumare a San Francisco de Yare, Sector Aponte, Ocumare del Tuy, estado Miranda, Venezuela.</p>
              <p><a href="mailto:contacto@cilcca.com">contacto@cilcca.com</a><a href="https://cilcca.com">www.cilcca.com</a></p>
            </T>
          </div>
        </div>
      </section>

      {/* 18 · Cierre */}
      <section className="l p-cierre" data-cap="">
        <div className="medio tenue"><Vid n="portada" /></div>
        <div className="velo" />
        <div className="cont"><T className="logo"><img src={`${B}logo-vertical-blanco.svg`} alt="CILCCA" /></T></div>
      </section>
    </div>
  );
}
