import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { contactBg } from "../../imports/assets";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="animate-in fade-in duration-700 bg-background min-h-[60vh] flex flex-col lg:flex-row max-w-[1400px] w-full mx-auto">

      {/* Information Side */}
      <div className="relative w-full lg:w-5/12 px-6 py-12 lg:pl-12 lg:pr-16 lg:py-24 flex flex-col justify-between text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={contactBg}
            alt="Instalaciones CILCCA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10">
          <span className="uppercase tracking-widest text-white/60 text-sm font-semibold mb-6 block">
            B2B Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
            Escale su Producción.
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
            Permita que nuestras instalaciones de 32 hectáreas sean el motor detrás del éxito de su marca.
          </p>
        </div>

        <div className="relative z-10 space-y-8 mt-12">
          <div>
            <h4 className="font-semibold text-lg mb-2">Sede Principal</h4>
            <p className="text-white/70 font-light">
              Carretera Ocumare a San Francisco de Yare,<br/>
              Sector Aponte, Ocumare del Tuy,<br/>
              Estado Miranda, Venezuela.
            </p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-7/12 px-6 py-12 lg:pr-12 lg:pl-16 lg:py-24 bg-background flex flex-col justify-center">
        <div className="max-w-xl mx-auto w-full">
          {submitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in-95">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
                <Send className="text-foreground" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">¡Solicitud Enviada!</h2>
              <p className="text-muted-foreground text-lg font-light mb-12">
                Gracias por contactarnos. Un ejecutivo comercial se comunicará con usted a la brevedad posible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center font-medium text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1 uppercase tracking-wide text-sm"
              >
                Enviar otra solicitud
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full border-b-2 border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground"
                    placeholder="Carlos Mendoza"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="company" className="block text-sm font-medium text-foreground">
                    Empresa / Marca
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full border-b-2 border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground"
                    placeholder="Licores del Centro C.A."
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full border-b-2 border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground"
                    placeholder="+58 414 1234567"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full border-b-2 border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground"
                    placeholder="carlos@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <label htmlFor="service" className="block text-sm font-medium text-foreground">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  required
                  defaultValue=""
                  className="w-full border-b-2 border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-light text-foreground appearance-none"
                >
                  <option value="" disabled>Seleccione un servicio...</option>
                  <option value="maquila">Maquila y Embotellado</option>
                  <option value="envejecimiento">Envejecimiento de Barricas</option>
                  <option value="exportacion">Exportación e Isotanques</option>
                  <option value="distribucion">Distribución del Portafolio</option>
                </select>
              </div>

              <div className="space-y-3 pt-4">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Mensaje o Requerimientos
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  className="w-full border-b-2 border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground resize-none"
                  placeholder="Detalle sus necesidades de producción..."
                ></textarea>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-5 text-sm font-medium uppercase tracking-widest text-primary-foreground bg-primary hover:opacity-90 transition-opacity rounded-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Procesando...
                    </span>
                  ) : (
                    "Enviar Solicitud"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
