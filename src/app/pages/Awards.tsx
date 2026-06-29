import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { maestroImg, ocumareImg } from "../../imports/assets";

export function Awards() {
  return (
    <div className="animate-in fade-in duration-700 bg-background">

      {/* Master Section - Split layout edge-to-edge */}
      <section className="flex flex-col lg:flex-row min-h-[60vh] max-w-[1400px] w-full mx-auto">
        <div className="w-full lg:w-1/2 px-6 py-12 lg:py-24 lg:pr-12 xl:pr-16 flex flex-col justify-center">
          <span className="uppercase tracking-widest text-primary text-sm font-semibold mb-6">
            El Maestro Ronero
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-10 leading-tight tracking-tight">
            El Arte Detrás de Cada Gota.
          </h1>
          <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              En CILCCA, la monumental escala industrial se equilibra con la delicadeza del trabajo artesanal. Este proceso está bajo la batuta de nuestro Maestro Ronero, <strong className="font-semibold text-foreground">Andrés Contreras</strong>.
            </p>
            <div className="pl-6 border-l-2 border-primary">
              <p className="mb-4">
                Químico con más de 30 años de experiencia creando rones de alto prestigio. Fue galardonado con el premio al <strong>"Mejor Maestro Ronero 2017"</strong> por la International Rum Conference (IRC).
              </p>
            </div>
            <p>
              Dedicado a entender los intrincados procesos dentro de la barrica, su paciencia para añejar, la selección meticulosa de madera y la supervisión de la destilación le permiten lograr mezclas suaves, complejas y excepcionalmente equilibradas.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto px-6 py-12 lg:py-24 lg:pl-12 xl:pl-16">
          <ImageWithFallback
            src={maestroImg}
            alt="Maestro Ronero"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      {/* Brand Pride - Edge to edge imagery */}
      <section className="relative min-h-[80vh] flex items-center justify-center py-32 text-center">
        <div className="absolute inset-0 w-full h-full">
          <ImageWithFallback
            src={ocumareImg}
            alt="Ron Ocumare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 text-center lg:text-left">
          <span className="uppercase tracking-widest text-white/60 text-sm font-semibold mb-6 block">
            El Orgullo de la Casa
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white tracking-tight">
            Ron Ocumare: Excelencia Internacional.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl">
            Como nuestra marca bandera, Ron Ocumare es el testimonio líquido de nuestra calidad. Elaborado con alcoholes pesados y ligeros, ha representado a Venezuela obteniendo medallas en las competiciones más exigentes del mundo.
          </p>
        </div>
      </section>
    </div>
  );
}
