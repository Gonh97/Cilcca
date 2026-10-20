// Helpers compartidos entre páginas.
export const base = import.meta.env.BASE_URL;
export const img = (n: string) => `${base}img/${n}`;
export const logo = `${base}logo-cilcca.svg`;
export const logoNav = `${base}logo-cilcca-nav.svg`; // letras agrandadas para que se lean en la barra
