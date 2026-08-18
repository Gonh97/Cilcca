/**
 * Assets reales del sitio. Resueltos el 2026-08-12 con fotografía del banco
 * del proyecto de marca (00_Claude/CILCCA/fotos-reales/), que reemplazó a los
 * placeholders que esperaban URLs de Cloudinary desde junio.
 *
 * Viven en public/ para no depender de ningún servicio externo.
 */
const B = import.meta.env.BASE_URL;

export const logoCilcca  = `${B}logo-cilcca.svg`;        // vectorial real, del .ai del cliente
export const historyHero = `${B}img/historia-hero.jpg`;  // aérea del complejo
export const servicesHero= `${B}img/servicios-hero.jpg`; // barricas apiladas en rack
export const maestroImg  = `${B}img/maestro.jpg`;        // Andrés Contreras, foto real
export const ocumareImg  = `${B}img/ocumare.jpg`;        // botellas del portafolio
export const contactBg   = `${B}img/contacto-bg.jpg`;    // galpón a contraluz

/** Videos de la planta, alojados en Cloudinary (cuenta dcpicxumb). */
const CV = "https://res.cloudinary.com/dcpicxumb/video/upload/q_auto/f_auto";
export const video = {
  heroBodega:   `${CV}/v1779382410/Clip00001548_pwqwdv.mov`,
  tradicion:    `${CV}/v1779376542/hf_20260521_151047_af5a79f8-3456-4f75-86d4-bc250623374d_gpvvo5.mp4`,
  lineaBotellas:`${CV}/v1779370943/hf_20260521_132952_1059d270-ec1f-4be0-aaad-84f059b4510a_jgqp2x.mp4`,
  aerea360:     `${CV}/v1779209394/Video_360_Cilcca_mijgjb.mp4`,
  laboratorio:  `${CV}/v1779382409/Clip00002638_pdgurr.mov`,
  toneleria:    `${CV}/v1779382408/Clip00002906_grolzy.mov`,
  barricas:     `${CV}/v1779382409/Clip00003607_zywvjz.mov`,
  bodega:       `${CV}/v1779382410/Clip00000647_phr6qg.mov`,
  vaporizador:  `${CV}/v1779382412/Clip00000167_spuet9.mov`,
  envasado:     `${CV}/v1779385537/hf_20260521_174024_973a1066-76ea-4097-b6f3-0d1fd09763a5_a5mws4.mp4`,
  marcas:       `${CV}/v1779463995/VIDEO_MP4_coo6qg.mp4`,
};

/** Imágenes de producto del portafolio, también en Cloudinary. */
const CI = "https://res.cloudinary.com/dcpicxumb/image/upload/q_auto/f_auto";
export const portafolio = {
  rones:      `${CI}/v1779463817/IMG_1222.R1_h2mbwk.jpg`,
  licores:    `${CI}/v1779463817/hf_20260522_150458_1cf7aa69-cb93-405d-b303-47968fd7415e_r5vyoh.png`,
  sangrias:   `${CI}/v1779463818/hf_20260522_151128_8b32c7c6-64d6-48a5-a536-bb9eb8539244_g8wqce.png`,
  vodkas:     `${CI}/v1779463936/hf_20260522_151753_7a4761c3-ee07-44f2-ab04-853f2abb5ddf-convertido-a-mediano_gfba2c.jpg`,
  whisky:     `${CI}/v1779463817/hf_20260522_152649_8959712d-7312-4332-b5cd-aa78cc0aadab_cdg0sx.jpg`,
  espumantes: `${CI}/v1779463817/hf_20260522_142712_387308e3-c086-45eb-84d5-c8ea612b9eb8_vsmcz3.jpg`,
  cocina:     `${CI}/v1779463817/5I0A0114_yf0mm8.jpg`,
};
