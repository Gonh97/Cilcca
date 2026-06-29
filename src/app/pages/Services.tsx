import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { servicesHero } from "../../imports/assets";

export function Services() {
  const services = [
    {
      title: "Bodegas de Crianza Masiva.",
      subtitle: "Envejecimiento de Alcoholes",
      description: "Contamos con 6 inmensas naves de almacenamiento de sólida construcción. Capacidad instalada para albergar entre 156.000 y 200.000 barricas de roble blanco americano. Utilizamos sistemas de almacenamiento en Racks totalmente mecanizados y seguros bajo normativas antiexplosión.",
      video: "https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779382410/Clip00000647_phr6qg.mov"
    },
    {
      title: "El Cuidado de la Madera.",
      subtitle: "Tonelería y Re-embarricado",
      description: "Maestros Toneleros propios arman y reparan barricas in-house. Cada barrica es vaporizada para hidratar la madera. A los 4 años, el ron es vaciado temporalmente para ser mezclado en tanques de acero inoxidable, permitiendo calcular mermas y oxigenar el destilado.",
      video: "https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779382412/Clip00000167_spuet9.mov"
    },
    {
      title: "Co-Packing de Clase Mundial.",
      subtitle: "Maquila, Mezcla y Embotellado",
      description: "Proveemos elaboración de líquido, estabilización, filtrado (incluyendo filtros de carbón activado para rones blancos) y llenado en nuestras 6 líneas automatizadas. Nuestra capacidad de mezcla asciende hasta 7.15 millones de cajas al año.",
      video: "https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779385537/hf_20260521_174024_973a1066-76ea-4097-b6f3-0d1fd09763a5_a5mws4.mp4"
    },
    {
      title: "Despacho Internacional.",
      subtitle: "Logística y Exportación",
      description: "Coordinamos la logística de despacho con estrictos controles del SENIAT. Capacidad de despacho a granel internacional utilizando Isotanques sellados, garantizando Certificados de Origen y cumplimiento de Libre Venta.",
      video: "https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779382409/Clip00003607_zywvjz.mov"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-background">
      {/* 1. HERO - ANCHO COMPLETO OSCURECIDO (ESTILO HISTORY) */}
      <section className="relative w-full h-[60vh] flex items-center bg-black">
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt="Servicios CILCCA - Maquila y Envejecimiento"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Oscurecimiento para texto */}
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 text-white text-center lg:text-left pt-20">
          <span className="uppercase tracking-widest text-white/80 text-sm font-bold block mb-4">
            Operaciones Industriales
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
            Ingeniería y Seguridad <br className="hidden lg:block"/> para su Marca.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl">
            Servicios integrales de Maquila y Envejecimiento. Resguardamos sus activos líquidos e inventarios con el mayor rigor industrial del mercado.
          </p>
        </div>
      </section>

      {/* Services List - Edge to edge alternating */}
      <div className="flex flex-col">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={index} className={`flex flex-col-reverse ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[70vh] border-t border-border`}>
              {/* Text Side */}
              <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                <span className="uppercase tracking-widest text-primary text-sm font-semibold mb-4">
                  {service.subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-xl">
                  {service.description}
                </p>
                <div>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-lg font-bold text-base"
                  >
                    Solicitar información
                    <ArrowRight className="ml-3 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Media Side */}
              <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto bg-black relative overflow-hidden">
                <video
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
