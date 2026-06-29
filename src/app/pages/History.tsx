import { useEffect } from "react";
import { Microscope, MapPin, Box, Zap, Settings, Target, Eye, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { historyHero } from "../../imports/assets";

export function History() {
  useEffect(() => {
    // Reset scroll on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-background text-foreground overflow-x-hidden pb-0">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img
            src={historyHero}
            alt="CILCCA Instalaciones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-6 text-center mx-auto lg:text-left lg:mx-0"
          >
            <span className="uppercase tracking-widest text-white/80 text-sm font-bold block">
              Historia y Origen
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] text-white">
              Nuestra<br />Historia.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-snug">
              CILCCA representa una de las instalaciones industriales más importantes de Venezuela y la más grande de todo el sector licorero nacional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TEXTO DE LA HISTORIA (Origen - Centrado Superior) */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 lg:mt-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="uppercase tracking-widest text-primary text-sm font-bold block mb-4">
            El Origen
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
            Excelencia Industrial desde 1981.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              El Complejo Industrial Licorero del Centro (CILCCA) representa la instalación industrial más importante del país y la más grande de todo el sector licorero venezolano.
            </p>
            <p>
              Fundada originalmente en 1981 por Industrias Pampero como la "Destilería Pampero", nuestra planta ha sido un pilar histórico. A lo largo de las décadas, nuestras instalaciones fueron operadas por gigantes globales como United Distillers (DIAGEO) y posteriormente por Ponche Crema, consolidando estándares operativos de calidad internacional. Hoy, bajo la administración de Estelar Trading, CILCCA ofrece una plataforma de negocios inigualable.
            </p>
          </div>
        </div>
      </section>

      {/* 3. GALERÍA DE VIDEOS + MISIÓN/VISIÓN */}
      <section className="w-full mt-20 lg:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Misión Overlay Video */}
          <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black flex items-center justify-center p-8 lg:p-16">
            <video
              src="https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779382409/Clip00002638_pdgurr.mov"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Misión Content */}
            <div className="relative z-10 flex flex-col items-center text-center text-white max-w-lg">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20">
                <Target className="w-6 h-6 opacity-80" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Nuestra Misión.</h3>
              <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed">
                "Ser la primera empresa nacional del sector licorero, generando valor a los accionistas, reconocida como un excelente empleador y socialmente responsable."
              </p>
            </div>
          </div>

          {/* Visión Overlay Video */}
          <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black flex items-center justify-center p-8 lg:p-16">
            <video
              src="https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779382408/Clip00002906_grolzy.mov"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Visión Content */}
            <div className="relative z-10 flex flex-col items-center text-center text-white max-w-lg">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20">
                <Eye className="w-6 h-6 opacity-80" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Nuestra Visión.</h3>
              <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed">
                "Brindar a nuestros clientes y aliados la mejor plataforma de negocios en el sector comercial de alcoholes y rones venezolanos."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Valores Corporativos */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 lg:mt-32">
        <section className="border-t border-border/40 pt-20 lg:pt-32">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="uppercase tracking-widest text-muted-foreground text-sm font-medium">Fundamentos</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">Valores Corporativos</h2>
            <p className="text-xl text-muted-foreground font-light">
              Los principios que rigen nuestra excelencia operativa y compromiso industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-20">
            {[
              { title: "Compromiso", desc: "Dedicación total a los objetivos de la empresa y de nuestros aliados comerciales." },
              { title: "Calidad", desc: "Excelencia en cada etapa del proceso industrial, desde el envejecimiento hasta el embotellado." },
              { title: "Trabajo en Equipo", desc: "Sinergia operativa para garantizar eficiencia en nuestras instalaciones de 32 hectáreas." },
              { title: "Responsabilidad", desc: "Cumplimiento riguroso de normativas, seguridad y tiempos de entrega impecables." },
              { title: "Innovación y Mejora", desc: "Optimización constante de procesos, como el sistema mecánico de almacenamiento." },
              { title: "Ética", desc: "Transparencia y profesionalismo absoluto en el manejo de marcas de terceros y propias." }
            ].map((val, i) => (
              <div key={i} className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">{val.title}</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 6. Ficha Técnica (Escala Monumental) - Ancho completo con Video */}
      <section className="relative w-full mt-20 lg:mt-32 py-24 lg:py-32 min-h-[70vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779382409/Clip00003607_zywvjz.mov"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro para lectura del texto */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">

            {/* Ficha Principal Text */}
            <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left text-white">
              <span className="uppercase tracking-widest text-white/70 text-sm font-bold mb-4 block">
                Ficha Técnica
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                Escala Monumental.
              </h2>
              <p className="text-lg font-light text-gray-200 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                32 Hectáreas de extensión territorial con capacidad de producción de 3.25 millones de cajas al año.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 text-white border border-white/20 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-none">
                <MapPin className="w-5 h-5 flex-shrink-0 opacity-80" />
                <span className="font-medium text-center sm:text-left text-sm">Ocumare del Tuy, Estado Miranda</span>
              </div>
            </div>

            {/* Stats Grid - Íconos e info reducidos para ver el video */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-x-8 gap-y-12 text-white w-full">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Settings className="w-7 h-7 mb-4 opacity-70" />
                <h4 className="text-xl md:text-2xl font-bold mb-2">6 Líneas</h4>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">automatizadas de llenado y envasado.</p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Box className="w-7 h-7 mb-4 opacity-70" />
                <h4 className="text-xl md:text-2xl font-bold mb-2">2 Plantas</h4>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">de tratamiento de aguas residuales y potables.</p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Zap className="w-7 h-7 mb-4 opacity-70" />
                <h4 className="text-xl md:text-2xl font-bold mb-2">100% Seguro</h4>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">Instalaciones con sistema eléctrico antiexplosión.</p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Microscope className="w-7 h-7 mb-4 opacity-70" />
                <h4 className="text-xl md:text-2xl font-bold mb-2">Laboratorio</h4>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">Moderno control de calidad y sala computarizada.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
