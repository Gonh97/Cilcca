import { servicesHero, video } from "../../imports/assets";
import { Contenedor, Hero, Pastilla } from "../components/Ui";

const servicios = [
  { etiqueta: "Envejecimiento de alcoholes", titulo: "Bodegas de crianza masiva.",
    desc: "Seis inmensas naves de almacenamiento de sólida construcción, con capacidad instalada para albergar entre 156.000 y 200.000 barricas de roble blanco americano. Sistemas de almacenamiento en racks totalmente mecanizados y seguros bajo normativa antiexplosión.",
    clip: video.bodega },
  { etiqueta: "Tonelería y reembarricado", titulo: "El cuidado de la madera.",
    desc: "Maestros toneleros propios arman y reparan las barricas dentro de la planta. Cada barrica se vaporiza para hidratar la madera. A los cuatro años el ron se vacía temporalmente para mezclarse en tanques de acero inoxidable, lo que permite calcular mermas y oxigenar el destilado.",
    clip: video.vaporizador },
  { etiqueta: "Maquila, mezcla y embotellado", titulo: "Co-packing de clase mundial.",
    desc: "Elaboración de líquido, estabilización, filtrado con carbón activado para rones blancos y llenado en seis líneas automatizadas. La capacidad de mezcla asciende hasta 7,15 millones de cajas al año.",
    clip: video.envasado },
  { etiqueta: "Logística y exportación", titulo: "Despacho internacional.",
    desc: "Coordinamos la logística de despacho con estrictos controles del SENIAT. Capacidad de despacho a granel internacional en isotanques sellados, con certificados de origen y cumplimiento de libre venta.",
    clip: video.barricas },
];

export function Services() {
  return (
    <div>
      <Hero img={servicesHero} titulo="Ingeniería y seguridad para su marca."
        bajada="Servicios integrales de maquila y envejecimiento. Resguardamos sus activos líquidos e inventarios con el mayor rigor industrial del mercado." />

      {servicios.map((s, i) => {
        const par = i % 2 === 0;
        return (
          <section key={s.titulo} className={par ? "bg-white" : "bg-[var(--acero-claro)]"}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 lg:py-24 ${par ? "" : "lg:order-2"}`}>
                <div className="flex items-center gap-3">
                  <span className="t-micro text-[var(--azul-cilcca)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t-micro text-[var(--gris-acero)]">{s.etiqueta}</span>
                </div>
                <div className="h-px bg-border mt-3 mb-7 max-w-lg" />
                <h2 className="t-medio text-[var(--navy-profundo)]">{s.titulo}</h2>
                <p className="t-chico text-grafito mt-6 max-w-xl">{s.desc}</p>
                <Pastilla to="/contacto" className="mt-9 w-fit">Solicitar información</Pastilla>
              </div>
              <div className={`relative min-h-[320px] lg:min-h-[470px] ${par ? "" : "lg:order-1"}`}>
                <video src={s.clip} autoPlay loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover saturate-[0.74]" />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
