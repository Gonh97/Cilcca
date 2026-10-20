// Piezas de interfaz compartidas: flecha, enlace de círculo e iconos de línea.
// Los iconos siguen el set de la marca (barrica, tonelería, botella, despacho,
// matraz, galpón), trazo de 1,5 con cap y join redondos.
import type { ReactNode } from "react";
import { LinkTelon } from "./transicion";

export function Flecha() {
  return (
    <svg className="e-arrow" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10H17M12 5L17 10L12 15" />
    </svg>
  );
}

/** Enlace de Estudio: círculo con flecha + texto en versalitas. */
export function LinkCirculo({ to, children, onClick }: { to?: string; children: ReactNode; onClick?: () => void }) {
  const inner = (
    <>
      <span className="c"><Flecha /></span>
      <span className="e-label">{children}</span>
    </>
  );
  if (!to) return <button type="button" className="e-link" onClick={onClick}>{inner}</button>;
  return <LinkTelon to={to} className="e-link">{inner}</LinkTelon>;
}

const ICONOS: Record<string, ReactNode> = {
  barrica: (
    <>
      <path d="M10 4H22C24.2 8 24.2 24 22 28H10C7.8 24 7.8 8 10 4Z" />
      <path d="M8.6 11H23.4M8.6 21H23.4" />
    </>
  ),
  toneleria: (
    <>
      <path d="M11 11H21C22.8 14 22.8 25 21 28H11C9.2 25 9.2 14 11 11Z" />
      <path d="M9.9 16.5H22.1M9.9 23H22.1" />
      <path d="M16 3C18 5 18.4 6.8 17 8.2C16.4 7.4 15.6 7.4 15.2 8.2C13.8 6.8 14.2 5 16 3Z" />
    </>
  ),
  botella: (
    <>
      <path d="M13.5 3H18.5V8.5C18.5 9.6 22.5 11.2 22.5 15.5V27.5C22.5 28.3 21.8 29 21 29H11C10.2 29 9.5 28.3 9.5 27.5V15.5C9.5 11.2 13.5 9.6 13.5 8.5Z" />
      <path d="M9.5 18H22.5M9.5 24.5H22.5" />
    </>
  ),
  despacho: (
    <>
      <path d="M3 9H20V22H3Z" />
      <path d="M20 13H25L29 17.5V22H20" />
      <circle cx="9" cy="25" r="2.5" />
      <circle cx="24" cy="25" r="2.5" />
    </>
  ),
  matraz: (
    <>
      <path d="M13 3H19M14 3V12L7 25C6.3 26.6 7.4 28.5 9.2 28.5H22.8C24.6 28.5 25.7 26.6 25 25L18 12V3" />
      <path d="M10 20H22" />
    </>
  ),
  pantalla: (
    <>
      <path d="M4 6H28V22H4Z" />
      <path d="M12 27H20M16 22V27" />
      <path d="M8 17L12 13L15 15.5L20 10.5L24 13" />
    </>
  ),
  escudo: (
    <>
      <path d="M16 4L26 8V15C26 21 22 26 16 28C10 26 6 21 6 15V8Z" />
      <path d="M12 16L15 19L20 13" />
    </>
  ),
  sello: (
    <>
      <circle cx="16" cy="13" r="8" />
      <path d="M11.5 19.5L10 29L16 26L22 29L20.5 19.5" />
      <path d="M13 13L15 15L19.5 10.5" />
    </>
  ),
};

export function Icono({ n }: { n: keyof typeof ICONOS | string }) {
  return (
    <svg className="e-icon" viewBox="0 0 32 32" aria-hidden="true">
      {ICONOS[n]}
    </svg>
  );
}
