import { Link } from "react-router";
import { video } from "../../imports/assets";
import { Contenedor, Pastilla, Regla, Velo } from "../components/Ui";

const servicios = ["Maquila (co-packing)", "Envejecimiento", "Tonelería", "Despacho internacional"];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero: foto a sangre con velo direccional. El momento oscuro de la página. */}
      <section className="relative w-full h-[78vh] min-h-[520px] flex items-end overflow-hidden">
        <video src={video.heroBodega} autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover saturate-[0.78]" />
        <Velo />
        <Contenedor className="relative z-10 pb-16 md:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <h1 className="t-hero text-white">La plataforma industrial detrás de los mejores licores.</h1>
              <Pastilla to="/historia" tono="blanco" className="mt-8">Conoce nuestras capacidades</Pastilla>
            </div>
            <ul className="lg:border-l lg:border-white/25 lg:pl-10 flex flex-col gap-4 shrink-0">
              {servicios.map((s) => (
                <li key={s} className="flex items-center gap-3 t-cuerpo text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--verde-glow)] shrink-0" />{s}
                </li>
              ))}
            </ul>
          </div>
        </Contenedor>
      </section>

      {/* Tres bloques de ancho desigual: la grilla de cajas iguales es el último recurso. */}
      <Contenedor className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <article className="lg:col-span-5 relative h-[340px] rounded-2xl overflow-hidden group">
            <video src={video.tradicion} autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover saturate-[0.7]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-noche)]/95 via-[var(--navy-profundo)]/55 to-transparent" />
            <div className="absolute inset-0 p-9 flex flex-col justify-end">
              <h2 className="t-bloque text-white">Tradición galardonada.</h2>
              <Link to="/portafolio"
                className="t-etiqueta text-white mt-4 w-fit border-b-2 border-[var(--azul-glow)] pb-1">
                Ver portafolio
              </Link>
            </div>
          </article>

          {/* Panel oscuro: el acento del sistema dentro de una página clara. */}
          <article className="lg:col-span-4 relative h-[340px] rounded-2xl overflow-hidden flex flex-col justify-center p-9">
            <video src={video.lineaBotellas} autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover saturate-[0.5]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-noche)]/97 to-[var(--navy-profundo)]/90" />
            <div className="relative">
              <p className="t-cifra text-white">3,25 MM</p>
              <div className="h-[3px] w-16 rounded-full bg-[var(--azul-glow)] mt-5 shadow-[0_0_16px_2px_rgba(78,155,209,0.75)]" />
              <p className="t-micro text-[var(--gris-acero)] mt-5">Cajas al año de capacidad</p>
            </div>
          </article>

          <article className="lg:col-span-3 h-[340px] rounded-2xl border border-border bg-gradient-to-br from-[var(--acero-claro)] to-white p-9 flex flex-col justify-between">
            <div>
              <h2 className="t-bloque text-[var(--navy-profundo)]">¿Tienes un proyecto?</h2>
              <p className="t-chico text-grafito mt-4">
                Descubre cómo escalar tu producción con estándares mundiales de calidad.
              </p>
            </div>
            <Pastilla to="/contacto" className="w-fit">Hablemos</Pastilla>
          </article>
        </div>
      </Contenedor>

      {/* Soluciones a escala: mitad texto sobre acero, mitad imagen a sangre. */}
      <section className="w-full bg-[var(--acero-claro)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 md:px-12 lg:pl-20 lg:pr-16 py-20 lg:py-28 order-2 lg:order-1">
            <Regla />
            <h2 className="t-titulo text-[var(--navy-profundo)] mt-7">Soluciones a escala.</h2>
            <p className="t-cuerpo text-grafito mt-6 max-w-xl">
              Diseñamos nuestra infraestructura con los más altos estándares para la producción por
              contrato. Optimiza tu proceso de añejamiento, agiliza el embotellado y escala tu
              producción con CILCCA.
            </p>
            <Pastilla to="/servicios" className="mt-10 w-fit">Descubrir servicios</Pastilla>
          </div>
          <div className="relative min-h-[380px] lg:min-h-[560px] order-1 lg:order-2">
            <video src={video.aerea360} autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover saturate-[0.8]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--acero-claro)] via-transparent to-transparent lg:block hidden" />
          </div>
        </div>
      </section>
    </div>
  );
}
