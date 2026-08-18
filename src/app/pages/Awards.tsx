import { maestroImg, ocumareImg } from "../../imports/assets";
import { Contenedor, Regla } from "../components/Ui";

export function Awards() {
  return (
    <div>
      {/* El Maestro Ronero: retrato a la derecha con su placa de nombre. */}
      <Contenedor className="py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Regla />
            <h1 className="t-titulo text-[var(--navy-profundo)] mt-7">El arte detrás de cada gota.</h1>
            <p className="t-cuerpo text-grafito mt-7">
              En CILCCA la escala industrial se equilibra con la delicadeza del trabajo artesanal. Ese
              proceso está bajo la batuta de nuestro Maestro Ronero, Andrés Contreras.
            </p>

            {/* Panel oscuro: el premio es el dato que sostiene la página. */}
            <div className="mt-9 rounded-2xl p-8 bg-gradient-to-br from-[var(--navy-noche)] to-[var(--navy-profundo)]">
              <h2 className="t-menor text-white">Mejor Maestro Ronero 2017</h2>
              <div className="h-[3px] w-14 rounded-full bg-[var(--azul-glow)] mt-4 shadow-[0_0_14px_1px_rgba(78,155,209,0.8)]" />
              <p className="t-micro text-[var(--gris-acero)] mt-4">International Rum Conference</p>
            </div>

            <p className="t-chico text-[var(--gris-acero)] mt-8">
              Químico con más de 30 años de experiencia creando rones de alto prestigio. Su paciencia
              para añejar, la selección meticulosa de la madera y la supervisión de la destilación le
              permiten lograr mezclas suaves, complejas y equilibradas.
            </p>
          </div>

          <figure className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px]">
            <img src={maestroImg} alt="Andrés Contreras, Maestro Ronero de CILCCA"
              className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--navy-noche)]/90 to-transparent" />
            <figcaption className="absolute bottom-8 left-8">
              <p className="t-sub text-white">Andrés Contreras</p>
              <p className="t-micro text-white/65 mt-1">Maestro Ronero</p>
            </figcaption>
          </figure>
        </div>
      </Contenedor>

      {/* Ron Ocumare a sangre: el cierre oscuro de la página. */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        <img src={ocumareImg} alt="Ron Ocumare"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.82]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy-noche)]/95 via-[var(--navy-profundo)]/72 to-[var(--negro-tinta)]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--negro-tinta)]/50 to-transparent" />
        <Contenedor className="relative z-10 py-20">
          <Regla tono="glow" />
          <h2 className="t-titulo text-white mt-7 max-w-3xl">Ron Ocumare: excelencia internacional.</h2>
          <p className="t-cuerpo text-white/85 mt-7 max-w-2xl">
            Como nuestra marca bandera, Ron Ocumare es el testimonio líquido de nuestra calidad.
            Elaborado con alcoholes pesados y ligeros, ha representado a Venezuela obteniendo medallas
            en las competiciones más exigentes del mundo.
          </p>
        </Contenedor>
      </section>
    </div>
  );
}
