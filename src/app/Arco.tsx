// Rueda de etapas: un arco que gira con el scroll y trae cada etapa arriba,
// mientras el centro cuenta qué pasa en ella. La sección queda fija (sticky)
// mientras dura el recorrido; el giro sigue al scroll, no es autónomo.
//
// Solo las etapas que hace CILCCA, de la barrica a la botella. La fermentación
// y la destilación son de CACSA (Corporación Alcoholes del Caribe) y no van acá
// para no confundir las dos empresas.
import { useEffect, useRef, useState } from "react";

export type Etapa = { nm: string; ds: string };

const PASO = 24; // grados entre etapas sobre el arco

export function Arco({ etapas, t1, t2 }: { etapas: Etapa[]; t1: string; t2: string }) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState(0);
  const n = etapas.length;

  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      setPos(p * (n - 1));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(medir); };
    medir();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [n]);

  const act = Math.round(pos);
  const giro = -pos * PASO;

  return (
    <section className="e-arco" ref={ref} style={{ height: `${n * 55 + 70}vh` }}>
      <div className="pin">
        <div className="e-wrap cab">
          <h2 className="e-h2 e-t rv"><span>{t1}</span><span>{t2}</span></h2>
        </div>

        <div className="rueda" aria-hidden="true">
          <svg className="aro" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="arco-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#085184" />
                <stop offset=".5" stopColor="#4E9BD1" />
                <stop offset="1" stopColor="#3FB694" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="49.6" />
          </svg>
          <svg className="marcas" viewBox="0 0 100 100" style={{ transform: `rotate(${giro}deg)` }}>
            <circle cx="50" cy="50" r="46.5" />
          </svg>
          {etapas.map((e, k) => {
            const d = Math.abs(k - pos);
            const ang = k * PASO + giro;
            return (
              <div key={e.nm} className={"et" + (k === act ? " on" : "")}
                style={{
                  transform: `rotate(${ang}deg) translateY(calc(-1 * var(--r))) rotate(${-ang}deg)`,
                  opacity: Math.max(0, 1 - d * 0.32),
                }}>
                <span className="punto" />
                <span className="nm">{e.nm}</span>
              </div>
            );
          })}
        </div>

        <div className="centro">
          <h3 key={act} className="e-arco-t cambia">{etapas[act].nm}</h3>
          <p key={"t" + act} className="e-l cambia">{etapas[act].ds}</p>
        </div>

        <ol className="sr-only">
          {etapas.map((e) => <li key={e.nm}>{e.nm}: {e.ds}</li>)}
        </ol>
      </div>
    </section>
  );
}
