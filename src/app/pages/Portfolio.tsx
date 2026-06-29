import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export function Portfolio() {
  const categories = [
    {
      title: "Rones",
      subtitle: "Añejos, Premium y Standard",
      description: "Denominación de origen, envejecidos entre 2 y 12 años en barricas de roble.",
      image: "https://res.cloudinary.com/dcpicxumb/image/upload/q_auto/f_auto/v1779463817/IMG_1222.R1_h2mbwk.jpg"
    },
    {
      title: "Licores de Ron",
      description: "Mezclas especiales y licores derivados del mejor ron venezolano.",
      image: "https://res.cloudinary.com/dcpicxumb/image/upload/q_auto/f_auto/v1779463817/hf_20260522_150458_1cf7aa69-cb93-405d-b303-47968fd7415e_r5vyoh.png"
    },
    {
      title: "Sangrías",
      description: "Bebidas refrescantes de alta demanda con estándares premium.",
      image: "https://res.cloudinary.com/dcpicxumb/image/upload/q_auto/f_auto/v1779463818/hf_20260522_151128_8b32c7c6-64d6-48a5-a536-bb9eb8539244_g8wqce.png"
    },
    {
      title: "Vodkas y Ginebras",
      description: "Destilados cristalinos y botánicos de alta pureza y calidad consistente.",
      image: "https://res.cloudinary.com/dcpicxumb/image/upload/q_auto/f_auto/v1779463936/hf_20260522_151753_7a4761c3-ee07-44f2-ab04-853f2abb5ddf-convertido-a-mediano_gfba2c.jpg"
    },
    {
      title: "Licores de Whisky",
      description: "Formulaciones especializadas para el mercado de licores oscuros.",
      image: "https://res.cloudinary.com/dcpicxumb/image/upload/q_auto/f_auto/v1779463817/hf_20260522_152649_8959712d-7312-4332-b5cd-aa78cc0aadab_cdg0sx.jpg"
    },
    {
      title: "Vinos Espumantes",
      description: "Producción meticulosa para celebraciones y momentos especiales.",
      image: "https://res.cloudinary.com/dcpicxumb/image/upload/q_auto/f_auto/v1779463817/hf_20260522_142712_387308e3-c086-45eb-84d5-c8ea612b9eb8_vsmcz3.jpg"
    },
    {
      title: "Vinos de Cocina",
      description: "Soluciones culinarias para el mercado gastronómico.",
      image: "https://res.cloudinary.com/dcpicxumb/image/upload/q_auto/f_auto/v1779463817/5I0A0114_yf0mm8.jpg"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasDragged(false);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Multiplicador para velocidad de arrastre

      // Si el movimiento es mayor a 5px, lo consideramos un "arrastre" (drag) real y no un clic accidental.
      if (Math.abs(walk) > 5) {
        setHasDragged(true);
      }

      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    // Si el usuario estaba arrastrando el carrusel, prevenimos que se active el enlace
    if (hasDragged) {
      e.preventDefault();
    }
  };

  return (
    <div className="animate-in fade-in duration-700 bg-background text-foreground pb-32">
      {/* 1. HERO - ANCHO COMPLETO OSCURECIDO */}
      <section className="relative w-full h-[60vh] flex items-center bg-black mb-20 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto/v1779463995/VIDEO_MP4_coo6qg.mp4"
            className="w-full h-full object-cover opacity-60"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 pt-20">
          <span className="uppercase tracking-widest text-white/80 text-sm font-bold block mb-4">
            Portafolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 text-white">
            Nuestro Catálogo.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl">
            La versatilidad de nuestra planta nos permite elaborar toda la gama de productos nacionales en diversas categorías.
          </p>
        </div>
      </section>

      {/* Carrusel Arrastrable Manualmente */}
      <div className="w-full relative">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`
            w-full overflow-x-auto select-none flex gap-6 px-6 lg:px-12 pb-8 pt-4
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[400px] shrink-0 group/card relative flex flex-col h-[500px] overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Contenedor de la Imagen Superior */}
              <div className="h-[55%] w-full overflow-hidden relative bg-muted pointer-events-none">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  draggable="false"
                />
              </div>

              {/* Contenedor de Texto Inferior */}
              <div className="h-[45%] flex flex-col justify-between p-6 md:p-8 bg-card pointer-events-none">
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tight text-card-foreground">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pointer-events-auto">
                  <Link
                    to="/contacto"
                    onClick={handleLinkClick}
                    className="inline-flex items-center text-xs uppercase tracking-wider font-bold text-primary hover:opacity-70 transition-opacity mt-4 group/btn w-fit py-2"
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
