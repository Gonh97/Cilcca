// Contacto, v4 (dirección Estudio): datos a la izquierda, formulario a la derecha.
// El envío va por Web3Forms: falta la clave del cliente (WEB3FORMS_KEY).
import { useState, type FormEvent } from "react";
import { Flecha, PageHero } from "../ui";

const WEB3FORMS_KEY = "";

export function Contacto() {
  const [estado, setEstado] = useState<"" | "enviando" | "ok" | "error">("");

  const enviar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) { setEstado("error"); return; }
    setEstado("enviando");
    const datos = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: "Contacto desde cilcca.com", ...datos }),
      });
      setEstado(r.ok ? "ok" : "error");
    } catch { setEstado("error"); }
  };

  return (
    <>
      <PageHero im="cta.webp" alt="" t1="Produce tu marca" t2="con CILCCA."
        tx="Cuéntanos qué quieres producir, en qué volumen y para qué mercado. Te respondemos con una propuesta." />

      <section className="e-sec">
        <div className="e-wrap e-contact">
          <div className="e-datos rv">
            <div className="e-dato"><span className="e-label">Planta</span><p className="e-m">Carretera Ocumare a San Francisco de Yare, sector Aponte. Ocumare del Tuy, Miranda, Venezuela.</p></div>
            <div className="e-dato"><span className="e-label">Distancia</span><p className="e-m">A 45 minutos de Caracas.</p></div>
            <div className="e-dato"><span className="e-label">Teléfono y correo</span><p className="e-m nota">Pendientes del cliente</p></div>
          </div>

          {estado === "ok" ? (
            <div className="rv d1"><h2 className="e-h2 e-t"><span>Gracias.</span><span>Te escribimos pronto.</span></h2></div>
          ) : (
            <form className="e-form rv d1" onSubmit={enviar}>
              <div className="dos">
                <div className="e-field"><label htmlFor="f-nombre">Nombre</label><input id="f-nombre" name="nombre" autoComplete="name" required /></div>
                <div className="e-field"><label htmlFor="f-empresa">Empresa</label><input id="f-empresa" name="empresa" autoComplete="organization" required /></div>
              </div>
              <div className="dos">
                <div className="e-field"><label htmlFor="f-correo">Correo</label><input id="f-correo" name="correo" type="email" autoComplete="email" required /></div>
                <div className="e-field"><label htmlFor="f-pais">País</label><input id="f-pais" name="pais" autoComplete="country-name" /></div>
              </div>
              <div className="e-field"><label htmlFor="f-msj">¿Qué quieres producir?</label><textarea id="f-msj" name="mensaje" required /></div>
              <button className="e-btn" type="submit" disabled={estado === "enviando"}>
                {estado === "enviando" ? "Enviando" : "Enviar"} <Flecha />
              </button>
              {estado === "error" && (
                <p className="e-s nota">{WEB3FORMS_KEY ? "No se pudo enviar. Intenta de nuevo." : "Formulario pendiente: falta la clave de Web3Forms."}</p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  );
}
