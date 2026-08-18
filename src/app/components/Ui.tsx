import { Link } from "react-router";
import type { ReactNode } from "react";

/** Ancho de contenido del sistema: 1280 px con márgenes de 80. */
export function Contenedor({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 ${className}`}>{children}</div>;
}

/**
 * Pastilla: el botón del sistema. Contorno de radio 999, nunca cuadrado.
 * Sobre claro va navy pleno; sobre oscuro, blanco.
 */
export function Pastilla({ to, children, tono = "navy", className = "" }:
  { to: string; children: ReactNode; tono?: "navy" | "blanco"; className?: string }) {
  const estilos = tono === "navy"
    ? "bg-[var(--navy-profundo)] text-white hover:bg-[var(--navy-noche)]"
    : "bg-white text-[var(--navy-profundo)] hover:bg-[var(--acero-claro)]";
  return (
    <Link to={to}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.02em] transition-colors ${estilos} ${className}`}>
      {children}<span aria-hidden>→</span>
    </Link>
  );
}

/** Regla de acento: el filete corto que abre cada sección. */
export function Regla({ tono = "azul" }: { tono?: "azul" | "glow" }) {
  return <div className={`h-1 w-14 rounded-full ${tono === "azul" ? "bg-[var(--azul-cilcca)]" : "bg-[var(--azul-glow)]"}`} />;
}

/**
 * Velo direccional sobre fotografía: profundo del lado del texto, abierto del
 * lado de la imagen, más una segunda capa en diagonal. Una sola dirección deja
 * una zona de valor constante que se lee plana.
 */
export function Velo({ claro = false }: { claro?: boolean }) {
  if (claro) return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--acero-claro)] via-[var(--acero-claro)]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/45 to-transparent" />
    </>
  );
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy-noche)]/95 via-[var(--navy-profundo)]/65 to-[var(--negro-tinta)]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--negro-tinta)]/55 via-transparent to-transparent" />
    </>
  );
}

/** Hero de página interior: foto a sangre, velo y titular anclado abajo. */
export function Hero({ img, video: src, titulo, bajada }:
  { img?: string; video?: string; titulo: string; bajada?: string }) {
  return (
    <section className="relative w-full h-[62vh] min-h-[440px] flex items-end overflow-hidden">
      {src
        ? <video src={src} autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover saturate-[0.7]" />
        : <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover saturate-[0.75]" />}
      <Velo />
      <Contenedor className="relative z-10 pb-16 md:pb-20">
        <h1 className="t-hero text-white max-w-3xl">{titulo}</h1>
        {bajada && <p className="t-sub text-white/85 max-w-2xl mt-6 font-normal">{bajada}</p>}
      </Contenedor>
    </section>
  );
}
