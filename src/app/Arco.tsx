// Rueda de etapas lateral: un círculo grande asoma por la izquierda y sus
// iconos van girando por el borde; la etapa que llega al frente (las 3 en
// punto) se enciende y su información aparece al lado, a la derecha.
// La sección queda fija (sticky) mientras dura el recorrido; el giro sigue al
// scroll por estaciones: cada tramo de scroll es una etapa, y la rueda gira
// suave hasta dejar ese icono exactamente al frente.
//
// Solo las etapas que hace CILCCA, de la barrica a la botella. La fermentación
// y la destilación son de CACSA (Corporación Alcoholes del Caribe) y no van acá
// para no confundir las dos empresas.
import { useEffect, useRef, useState } from "react";
import { Icono } from "./ui";

export type Etapa = { nm: string; ds: string; ic: string; datos?: { n: string; l: string }[] };

const PASO = 24; // grados entre etapas sobre el borde

export function Arco({ etapas, t1, t2 }: { etapas: Etapa[]; t1: string; t2: string }) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState(0);
  const n = etapas.length;

  useEffect(() => {
    let raf = 0;
    let actual = 0;
    let meta = 0;
    const leerMeta = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      // por estaciones: la meta es siempre una etapa entera, así la rueda se
      // detiene con el icono centrado al frente y su información al lado
      meta = Math.round(Math.min(1, Math.max(0, -r.top / total)) * (n - 1));
    };
    // la rueda persigue al scroll con una curva suave en vez de copiarlo
    const cuadro = () => {
      const d = meta - actual;
      actual = Math.abs(d) < 0.001 ? meta : actual + d * 0.11;
      setPos(actual);
      raf = actual === meta ? 0 : requestAnimationFrame(cuadro);
    };
    const onScroll = () => { leerMeta(); if (!raf) raf = requestAnimationFrame(cuadro); };
    leerMeta();
    actual = meta;
    setPos(actual);

    // Rueda del ratón: un gesto = una etapa. Mientras la sección está fija se
    // toma el control del scroll y se salta exactamente a la etapa siguiente o
    // anterior. La inercia del touchpad o un giro rápido de varios clics cuentan
    // como un solo gesto: hay que soltar (pausa corta) para pasar a otra.
    let bloqueado = false;
    let inicioBloqueo = 0;
    let ultimoEvento = 0;
    const irA = (k: number) => {
      const el = ref.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + (k / (n - 1)) * total, behavior: "instant" as ScrollBehavior });
    };
    const onWheel = (e: WheelEvent) => {
      const el = ref.current;
      if (!el || e.ctrlKey || Math.abs(e.deltaY) < 1) return;
      const ahora = performance.now();
      if (bloqueado && ahora - ultimoEvento > 180 && ahora - inicioBloqueo > 650) bloqueado = false;
      ultimoEvento = ahora;
      const r = el.getBoundingClientRect();
      const dir = e.deltaY > 0 ? 1 : -1;
      const vh = window.innerHeight;
      const fijo = r.top <= 1 && r.bottom >= vh - 1;
      // entrando a la sección: no dejar que un gesto largo se salte etapas
      const entraArriba = dir > 0 && r.top > 1 && r.top <= Math.abs(e.deltaY) + 2;
      const entraAbajo = dir < 0 && r.bottom < vh - 1 && vh - r.bottom <= Math.abs(e.deltaY) + 2;
      if (!fijo && !entraArriba && !entraAbajo) return;
      if (entraArriba) { e.preventDefault(); irA(0); bloqueado = true; inicioBloqueo = ahora; return; }
      if (entraAbajo) { e.preventDefault(); irA(n - 1); bloqueado = true; inicioBloqueo = ahora; return; }
      leerMeta(); // posición real en este instante, sin esperar al evento de scroll
      const actualEtapa = Math.round(meta);
      const sig = actualEtapa + dir;
      if (sig < 0 || sig > n - 1) return; // en los extremos el scroll sigue normal
      e.preventDefault();
      if (bloqueado) return;
      bloqueado = true;
      inicioBloqueo = ahora;
      irA(sig);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(raf);
    };
  }, [n]);

  const act = Math.round(pos);
  const giro = -pos * PASO;

  return (
    <section className="e-arco" ref={ref} style={{ height: `${n * 50 + 70}vh` }}>
      <div className="pin">
        {/* el título no se muestra (la escena va centrada en la pantalla); queda para lectores de pantalla */}
        <h2 className="sr-only">{t1} {t2}</h2>

        <div className="escena">
          <div className="rueda" aria-hidden="true">
            <svg className="aro" viewBox="0 0 100 100" overflow="visible">
              <defs>
                <linearGradient id="arco-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#085184" />
                  <stop offset=".5" stopColor="#4E9BD1" />
                  <stop offset="1" stopColor="#3FB694" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg className="marcas" viewBox="0 0 100 100" style={{ transform: `rotate(${giro}deg)` }}>
              <circle cx="50" cy="50" r="46" pathLength="360" />
            </svg>
            {etapas.map((e, k) => {
              const d = Math.abs(k - pos);
              const ang = k * PASO + giro; // se suma a --base: 90° = las 3 en punto (escritorio), 180° = abajo (teléfono)
              const cerca = Math.max(0, 1 - d);
              return (
                <div key={e.nm} className={"et" + (k === act ? " on" : "")}
                  style={{
                    transform: `rotate(calc(var(--base) + ${ang}deg)) translateY(calc(-1 * var(--r))) rotate(calc(-1 * (var(--base) + ${ang}deg)))`,
                    opacity: Math.max(0, 1 - d * 0.28),
                  }}>
                  <span className="nodo" style={{ transform: `translate(-50%, -50%) scale(${1 + cerca * 0.28})` }}>
                    <Icono n={e.ic} />
                  </span>
                </div>
              );
            })}
          </div>

          <div className="info">
            <h3 key={act} className="e-arco-t cambia">{etapas[act].nm}</h3>
            <p key={"t" + act} className="e-m cambia">{etapas[act].ds}</p>
            {etapas[act].datos && (
              <div key={"d" + act} className="datos cambia">
                {etapas[act].datos!.map((d) => (
                  <div key={d.l}><span className="n">{d.n}</span><span className="l">{d.l}</span></div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ol className="sr-only">
          {etapas.map((e) => <li key={e.nm}>{e.nm}: {e.ds}</li>)}
        </ol>
      </div>
    </section>
  );
}
