import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground pb-0">

      {/* Full-width Hero Container */}
      <motion.section
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        className="w-full relative overflow-hidden h-[60vh] bg-card flex flex-col justify-end border-b border-border"
      >
        <video
          src="https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779382410/Clip00001548_pwqwdv.mov"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
        />
        {/* Lowered gradient: Restricted height and softer fade to let the video shine at 100% opacity above it */}
        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

        {/* Content pinned to the bottom */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end pb-12 pt-20 gap-6 md:gap-12">

          {/* Left side: Title & CTA */}
          <div className="flex flex-col w-full md:w-3/5 lg:w-2/3">
            <h1 className="font-bold leading-[1.1] tracking-tight mb-5 md:mb-6 text-foreground drop-shadow-lg max-w-xl text-[40px]">
              La plataforma industrial detrás de los mejores licores.
            </h1>
            <Link
              to="/historia"
              className="inline-flex items-center justify-center md:justify-start w-full md:w-fit px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity text-sm font-bold shadow-xl"
            >
              Conoce nuestras capacidades
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right side: Services */}
          <div className="w-full md:w-2/5 lg:w-1/3 md:border-l border-border/30 pb-5 md:pb-0 mb-2 md:mb-0 border-b md:border-b-0 md:pl-8 flex flex-col justify-end">
            <ul className="space-y-3 md:space-y-4">
              {["Maquila (Co-packing)", "Envejecimiento", "Tonelería", "Despacho Internacional"].map((service, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base md:text-lg font-light text-foreground group/item">
                  <CheckCircle className="h-4 w-4 text-muted-foreground group-hover/item:text-foreground transition-colors shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 3 Horizontal Boxes Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)] md:auto-rows-[340px]">

          {/* Box 1: Tradición Galardonada (Legacy Video) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border group bg-card"
          >
            <video
              src="https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779376542/hf_20260521_151047_af5a79f8-3456-4f75-86d4-bc250623374d_gpvvo5.mp4"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
              autoPlay loop muted playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight drop-shadow-md">
                Tradición Galardonada.
              </h3>
              <Link
                to="/portafolio"
                className="w-fit text-sm font-bold text-muted-foreground border-b border-muted-foreground hover:text-foreground hover:border-foreground transition-colors pb-1"
              >
                Ver Portafolio
              </Link>
            </div>
          </motion.div>

          {/* Box 2: Cajas al año de capacidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-card flex flex-col justify-center p-8 md:p-10 group"
          >
            <video
              src="https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779370943/hf_20260521_132952_1059d270-ec1f-4be0-aaad-84f059b4510a_jgqp2x.mp4"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
              autoPlay loop muted playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 tracking-tighter drop-shadow-md">
                3.25M<span className="text-muted-foreground font-light">+</span>
              </h3>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium mt-2 drop-shadow-sm">
                Cajas al año de capacidad
              </p>
            </div>
          </motion.div>

          {/* Box 3: ¿Tienes un Proyecto? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-card flex flex-col justify-between p-8 md:p-10 group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-foreground/5 via-transparent to-transparent" />
            <div className="relative z-10 mb-6">
              <h3 className="text-3xl font-bold mb-3 tracking-tight text-foreground">¿Tienes un proyecto?</h3>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Descubre cómo podemos escalar tu producción con estándares mundiales de calidad.
              </p>
            </div>
            <Link
              to="/contacto"
              className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-full hover:scale-105 transition-transform text-base font-bold w-full sm:w-fit shadow-xl"
            >
              Hablemos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Soluciones a Escala - Full Bleed Edge-to-Edge Section */}
      <section className="w-full bg-card border-t border-border overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full lg:h-[500px] xl:h-[600px]">
          {/* Text Content Block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="uppercase tracking-widest text-muted-foreground text-xs md:text-sm font-bold mb-4 block">
                Plataforma B2B
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 tracking-tight leading-[1.1]">
                Soluciones a <br className="hidden md:block" />Escala.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-10 md:mb-12 max-w-xl leading-relaxed font-light">
                Diseñamos nuestra infraestructura con los más altos estándares. Optimiza tu proceso de añejamiento, agiliza el embotellado y escala tu producción con CILCCA.
              </p>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center w-full sm:w-fit px-8 py-4 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity text-sm font-bold shadow-xl"
              >
                Descubrir Servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Video Block */}
          <div className="w-full lg:w-1/2 min-h-[45vh] lg:min-h-full relative order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-border">
            <video
              src="https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779209394/Video_360_Cilcca_mijgjb.mp4"
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle inner shadow for depth against the video */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
