import { historyHero, video } from "../../imports/assets";
import { Contenedor, Hero, Regla } from "../components/Ui";

const valores = [
  ["Compromiso", "Dedicación total a los objetivos de la empresa y de nuestros aliados comerciales."],
  ["Calidad", "Excelencia en cada etapa del proceso industrial, del envejecimiento al embotellado."],
  ["Trabajo en equipo", "Sinergia operativa para garantizar eficiencia en 32 hectáreas de instalaciones."],
  ["Responsabilidad", "Cumplimiento riguroso de normativas, seguridad y tiempos de entrega impecables."],
  ["Innovación y mejora", "Optimización constante de procesos, como el sistema mecánico de almacenamiento."],
  ["Ética", "Transparencia y profesionalismo absoluto en el manejo de marcas de terceros y propias."],
];

const ficha = [
  ["6 líneas", "automatizadas de llenado y envasado."],
  ["2 plantas", "de tratamiento de aguas residuales y potables."],
  ["100% seguro", "instalaciones con sistema eléctrico antiexplosión."],
  ["Laboratorio", "control de calidad y sala computarizada."],
];

const panelesMV = [
  ["Nuestra misión.", "«Ser la primera empresa nacional del sector licorero, generando valor a los accionistas, reconocida como un excelente empleador y socialmente responsable.»", video.laboratorio],
  ["Nuestra visión.", "«Brindar a nuestros clientes y aliados la mejor plataforma de negocios en el sector comercial de alcoholes y rones venezolanos.»", video.toneleria],
];

export function History() {
  return (
    <div>
      <Hero img={historyHero} titulo="Nuestra historia."
        bajada="CILCCA representa una de las instalaciones industriales más importantes de Venezuela y la más grande de todo el sector licorero nacional." />

      <Contenedor className="py-24 lg:py-28">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Regla />
          <h2 className="t-titulo text-[var(--navy-profundo)] mt-7">Excelencia industrial desde 1981.</h2>
          <p className="t-cuerpo text-grafito mt-8">
            El Complejo Industrial Licorero del Centro representa la instalación industrial más
            importante del país y la más grande de todo el sector licorero venezolano.
          </p>
          <p className="t-cuerpo text-[var(--gris-acero)] mt-5">
            Fundada en 1981 por Industrias Pampero como la Destilería Pampero, la planta ha sido un
            pilar histórico del sector. A lo largo de las décadas fue operada por United Distillers
            (DIAGEO) y después por Ponche Crema, consolidando estándares operativos de calidad
            internacional. Hoy, bajo la administración de Estelar Trading, CILCCA ofrece una
            plataforma de negocios inigualable.
          </p>
        </div>
      </Contenedor>

      <section className="grid grid-cols-1 md:grid-cols-2">
        {panelesMV.map(([tit, txt, src], i) => (
          <div key={tit} className="relative min-h-[440px] flex items-center overflow-hidden">
            <video src={src} autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover saturate-[0.6]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-noche)]/95 to-[var(--negro-tinta)]/85" />
            <div className={`relative z-10 w-full py-16 ${i === 0 ? "al-izq pr-8 md:pr-12" : "pl-8 md:pl-12 al-der"}`}>
              <Regla tono="glow" />
              <h3 className="t-medio text-white mt-6">{tit}</h3>
              <p className="t-cuerpo text-white/80 mt-6 max-w-md">{txt}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[var(--acero-claro)] py-24 lg:py-28">
        <Contenedor>
          <Regla />
          <h2 className="t-titulo text-[var(--navy-profundo)] mt-7">Valores corporativos</h2>
          <p className="t-cuerpo text-[var(--gris-acero)] mt-5 max-w-xl">
            Los principios que rigen nuestra excelencia operativa y compromiso industrial.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-16">
            {valores.map(([tit, desc], i) => (
              <div key={tit}>
                <p className="t-micro text-[var(--azul-cilcca)]">{String(i + 1).padStart(2, "0")}</p>
                <div className="h-px bg-border my-3" />
                <h3 className="t-menor text-[var(--navy-profundo)]">{tit}</h3>
                <p className="t-chico text-grafito mt-3">{desc}</p>
              </div>
            ))}
          </div>
        </Contenedor>
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <video src={video.barricas} autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover saturate-[0.64]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-noche)]/96 via-[var(--navy-profundo)]/80 to-[var(--negro-tinta)]/45" />
        <Contenedor className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Regla tono="glow" />
              <h2 className="t-titulo text-white mt-7">Escala monumental.</h2>
              <p className="t-cuerpo text-white/80 mt-6 max-w-md">
                32 hectáreas de extensión territorial con capacidad de producción de 3,25 millones de
                cajas al año, en Ocumare del Tuy, estado Miranda.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {ficha.map(([tit, desc]) => (
                <div key={tit} className="flex gap-4">
                  <span className="w-[7px] h-[7px] rounded-full bg-[var(--verde-glow)] shrink-0 mt-3 shadow-[0_0_12px_1px_rgba(63,182,148,0.7)]" />
                  <div>
                    <h3 className="t-menor text-white">{tit}</h3>
                    <p className="t-chico text-[var(--gris-acero)] mt-2">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Contenedor>
      </section>
    </div>
  );
}
