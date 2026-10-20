// Planta, v4 (dirección Estudio): la escala, la calidad y la historia.
import { img } from "../lib";
import { Cifra, Icono, PageHero } from "../ui";

const CALIDAD = [
  { ic: "matraz", nm: "Laboratorio propio", ds: "Control de calidad de primera línea sobre cada lote, del destilado a la botella." },
  { ic: "pantalla", nm: "Operación computarizada", ds: "Una sala de operaciones que sigue la producción en tiempo real." },
  { ic: "escudo", nm: "Seguridad industrial", ds: "Sistemas avanzados y bodegas bajo normativa antiexplosión." },
  { ic: "sello", nm: "Denominación de origen", ds: "Rones con D.O.C. y certificación de origen al exportar." },
];

export function Planta() {
  return (
    <>
      <PageHero im="planta.webp" alt="Planta de CILCCA en Ocumare del Tuy" t1="La planta más grande" t2="del sector licorero."
        tx="Treinta y dos hectáreas en Ocumare del Tuy, a 45 minutos de Caracas, pensadas para producir, añejar y despachar a escala." />

      <section className="e-sec">
        <div className="e-wrap">
          <div className="e-stats sin-margen">
            <div className="e-stat rv"><div className="n"><Cifra v={6} /></div><div className="u" /><div className="l">bodegas de añejamiento en racks</div></div>
            <div className="e-stat rv d1"><div className="n"><Cifra v={2} /></div><div className="u" /><div className="l">instalaciones de mezcla y envejecimiento</div></div>
            <div className="e-stat rv d2"><div className="n"><Cifra v={2} /></div><div className="u" /><div className="l">plantas de tratamiento de aguas</div></div>
            <div className="e-stat rv d3"><div className="n"><Cifra v={3} /></div><div className="u" /><div className="l">almacenes de producto y materia prima</div></div>
          </div>
        </div>
      </section>

      <section className="e-sec alt">
        <div className="e-wrap e-split">
          <div className="txt">
            <h2 className="e-h2 e-t rv"><span>La calidad</span><span>se controla en casa.</span></h2>
            <p className="e-l rv d1">Cada barrica ocupa una posición distinta en el rack, y esa variación es justamente lo que asegura lotes homogéneos.</p>
          </div>
          <div className="e-stack">
            {CALIDAD.map((c, k) => (
              <div key={c.nm} className={"e-feature rv" + (k ? ` d${k}` : "")}>
                <Icono n={c.ic} />
                <h3 className="e-h4">{c.nm}</h3>
                <p className="e-s">{c.ds}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="e-sec">
        <div className="e-wrap e-split inv">
          <div className="ph ancha rv"><img src={img("barricas.webp")} alt="Barricas de roble en guarda" /></div>
          <div className="txt">
            <h2 className="e-h2 e-t rv"><span>Desde 1981</span><span>elaborando ron de Venezuela.</span></h2>
            <p className="e-l rv d1">Nacimos como la Destilería Pampero. Pasamos por United Distillers (Diageo) y Ponche Crema, y hoy operamos bajo Estelar Trading como la instalación más grande del sector licorero del país.</p>
            <p className="e-s rv d2">Carretera Ocumare a San Francisco de Yare, sector Aponte. Ocumare del Tuy, Miranda.</p>
          </div>
        </div>
      </section>
    </>
  );
}
