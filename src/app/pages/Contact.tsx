import { useState } from "react";
import type { FormEvent } from "react";
import { contactBg } from "../../imports/assets";
import { Regla } from "../components/Ui";

/**
 * Clave de Web3Forms. Mientras esté vacía el formulario NO envía a ningún lado:
 * simula el envío para que la maqueta se pueda probar. Al pegar la clave real
 * (https://web3forms.com, misma cuenta que los otros sitios) empieza a enviar
 * de verdad sin tocar nada más.
 */
const WEB3FORMS_KEY = "";

const campos = [
  { id: "name",    label: "Nombre completo",   type: "text",  ph: "Carlos Mendoza",          medio: true },
  { id: "company", label: "Empresa / marca",   type: "text",  ph: "Licores del Centro C.A.", medio: true },
  { id: "phone",   label: "Teléfono",          type: "tel",   ph: "+58 414 1234567",         medio: true },
  { id: "email",   label: "Correo electrónico",type: "email", ph: "carlos@empresa.com",      medio: true },
];

const servicios = ["Maquila y embotellado", "Envejecimiento de barricas",
                   "Exportación e isotanques", "Distribución del portafolio"];

const claseCampo =
  "w-full bg-transparent border-b-2 border-border py-3 t-cuerpo text-grafito " +
  "placeholder:text-[var(--gris-acero)]/70 focus:outline-none focus:border-[var(--azul-cilcca)] transition-colors";

export function Contact() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    if (WEB3FORMS_KEY) {
      const datos = new FormData(e.currentTarget);
      datos.append("access_key", WEB3FORMS_KEY);
      datos.append("subject", "Nueva solicitud desde cilcca.com");
      await fetch("https://api.web3forms.com/submit", { method: "POST", body: datos });
    } else {
      await new Promise((r) => setTimeout(r, 1200));
    }
    setEnviando(false);
    setEnviado(true);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
      {/* Lado oscuro: la información, sobre foto de la planta. */}
      <aside className="lg:col-span-5 relative flex flex-col justify-between overflow-hidden
                        px-6 md:px-12 lg:px-16 py-16 lg:py-20">
        <img src={contactBg} alt="" className="absolute inset-0 w-full h-full object-cover saturate-[0.7]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-noche)]/96 to-[var(--negro-tinta)]/88" />
        <div className="relative z-10">
          <Regla tono="glow" />
          <h1 className="t-titulo text-white mt-7">Escale su producción.</h1>
          <p className="t-cuerpo text-white/82 mt-6 max-w-md">
            Permita que nuestras instalaciones de 32 hectáreas sean el motor detrás del éxito de su marca.
          </p>
        </div>
        <div className="relative z-10 mt-14">
          <h2 className="t-micro text-white/55">Sede principal</h2>
          <address className="t-chico text-white/80 not-italic leading-relaxed mt-3">
            Carretera Ocumare a San Francisco de Yare,<br />
            Sector Aponte, Ocumare del Tuy,<br />
            Estado Miranda, Venezuela.
          </address>
          <div className="h-px bg-white/18 my-6 max-w-xs" />
          <p className="t-micro text-white/85">www.cilcca.com</p>
        </div>
      </aside>

      {/* Lado claro: el formulario. */}
      <div className="lg:col-span-7 px-6 md:px-12 lg:px-20 py-16 lg:py-20 flex flex-col justify-center">
        {enviado ? (
          <div className="max-w-xl">
            <Regla />
            <h2 className="t-medio text-[var(--navy-profundo)] mt-7">Solicitud enviada.</h2>
            <p className="t-cuerpo text-grafito mt-5">
              Gracias por contactarnos. Un ejecutivo comercial se comunicará con usted a la brevedad.
            </p>
            <button onClick={() => setEnviado(false)}
              className="t-etiqueta text-[var(--navy-profundo)] mt-8 border-b-2 border-[var(--azul-cilcca)] pb-1">
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="max-w-2xl w-full">
            <h2 className="t-bloque text-[var(--navy-profundo)]">Cuéntanos de tu proyecto</h2>
            <p className="t-chico text-[var(--gris-acero)] mt-3">
              Un ejecutivo comercial responde en menos de 48 horas hábiles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mt-10">
              {campos.map((c) => (
                <div key={c.id}>
                  <label htmlFor={c.id} className="t-micro text-[var(--gris-acero)] block mb-1">{c.label}</label>
                  <input id={c.id} name={c.id} type={c.type} required placeholder={c.ph} className={claseCampo} />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <label htmlFor="service" className="t-micro text-[var(--gris-acero)] block mb-1">Servicio de interés</label>
              <select id="service" name="service" required defaultValue="" className={claseCampo + " appearance-none"}>
                <option value="" disabled>Seleccione un servicio...</option>
                {servicios.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="mt-8">
              <label htmlFor="message" className="t-micro text-[var(--gris-acero)] block mb-1">Mensaje o requerimientos</label>
              <textarea id="message" name="message" required rows={3}
                placeholder="Detalle sus necesidades de producción..." className={claseCampo + " resize-none"} />
            </div>

            <button type="submit" disabled={enviando}
              className="mt-12 w-full rounded-full bg-[var(--navy-profundo)] text-white py-5 t-etiqueta
                         hover:bg-[var(--navy-noche)] transition-colors disabled:opacity-60">
              {enviando ? "Procesando..." : "Enviar solicitud"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
