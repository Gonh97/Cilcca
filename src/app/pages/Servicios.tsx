// Servicios — qué hace la planta. (Contenido provisional; se rediseña por puntos.)
import { img } from "../lib";

export function Servicios() {
  return (
    <section className="cl-serv cl-pagina">
      <div className="cl-wrap">
        <h1 className="cl-sh rv">Todo el proceso, en una sola planta.</h1>
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
  );
}
