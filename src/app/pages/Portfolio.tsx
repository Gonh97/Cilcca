import { Link } from "react-router";
import { portafolio, video } from "../../imports/assets";
import { Contenedor, Hero } from "../components/Ui";

const categorias = [
  ["Rones", "Añejos, premium y standard. Denominación de origen, envejecidos entre 2 y 12 años en barricas de roble.", portafolio.rones],
  ["Licores de ron", "Mezclas especiales y licores derivados del mejor ron venezolano.", portafolio.licores],
  ["Sangrías", "Bebidas refrescantes de alta demanda con estándares premium.", portafolio.sangrias],
  ["Vodkas y ginebras", "Destilados cristalinos y botánicos de alta pureza y calidad consistente.", portafolio.vodkas],
  ["Licores de whisky", "Formulaciones especializadas para el mercado de licores oscuros.", portafolio.whisky],
  ["Vinos espumantes", "Producción meticulosa para celebraciones y momentos especiales.", portafolio.espumantes],
  ["Vinos de cocina", "Soluciones culinarias para el mercado gastronómico.", portafolio.cocina],
];

export function Portfolio() {
  return (
    <div className="pb-24">
      <Hero video={video.marcas} titulo="Nuestro catálogo."
        bajada="La versatilidad de nuestra planta nos permite elaborar toda la gama de productos nacionales en diversas categorías." />

      <Contenedor className="pt-16 pb-6">
        <p className="t-micro text-[var(--gris-acero)]">Desliza para ver todas las categorías</p>
      </Contenedor>

      {/* Carrusel: se desliza en horizontal, con la tarjeta siguiente asomando. */}
      <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory
                      [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 px-6 md:px-12 lg:px-20 pb-6">
          {categorias.map(([tit, desc, img]) => (
            <article key={tit}
              className="snap-start shrink-0 w-[280px] md:w-[336px] rounded-2xl border border-border
                         bg-white overflow-hidden flex flex-col">
              <div className="h-[240px] overflow-hidden bg-[var(--acero-claro)]">
                <img src={img} alt={tit} loading="lazy"
                  className="w-full h-full object-cover saturate-[0.88]" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="t-sub text-[var(--navy-profundo)]">{tit}</h2>
                <p className="t-chico text-[var(--gris-acero)] mt-2 flex-grow">{desc}</p>
                <Link to="/contacto"
                  className="t-micro text-[var(--navy-profundo)] mt-6 w-fit border-b-2 border-[var(--azul-cilcca)] pb-1">
                  Solicitar información
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
