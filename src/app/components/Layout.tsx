import { Outlet, NavLink, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { logoCilcca } from "../../imports/assets";
import { Contenedor } from "./Ui";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Historia", path: "/historia" },
  { name: "Servicios", path: "/servicios" },
  { name: "Portafolio", path: "/portafolio" },
  { name: "Premios", path: "/premios" },
  { name: "Contacto", path: "/contacto" },
];

export function Layout() {
  const [abierto, setAbierto] = useState(false);
  const location = useLocation();
  useEffect(() => { setAbierto(false); window.scrollTo(0, 0); }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Barra clara: el modo base del sistema es el claro. */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border">
        <Contenedor>
          <div className="flex justify-between items-center h-20">
            <Link to="/" aria-label="CILCCA, inicio">
              <img src={logoCilcca} alt="CILCCA" className="h-9 w-auto object-contain" />
            </Link>

            <nav className="hidden md:flex gap-8">
              {navLinks.map((l) => (
                <NavLink key={l.path} to={l.path} end={l.path === "/"}
                  className={({ isActive }) =>
                    `t-etiqueta pb-1 border-b-2 transition-colors ${
                      isActive
                        ? "text-[var(--navy-profundo)] border-[var(--azul-cilcca)]"
                        : "text-[var(--gris-acero)] border-transparent hover:text-[var(--navy-profundo)]"
                    }`}>
                  {l.name}
                </NavLink>
              ))}
            </nav>

            <button onClick={() => setAbierto(!abierto)} className="md:hidden text-[var(--navy-profundo)]"
              aria-label="Abrir menú" aria-expanded={abierto}>
              {abierto ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </Contenedor>

        {abierto && (
          <div className="md:hidden bg-white border-t border-border">
            <Contenedor className="py-8 flex flex-col gap-6">
              {navLinks.map((l) => (
                <NavLink key={l.path} to={l.path} end={l.path === "/"}
                  className={({ isActive }) => `t-sub ${isActive ? "text-[var(--navy-profundo)]" : "text-[var(--gris-acero)]"}`}>
                  {l.name}
                </NavLink>
              ))}
            </Contenedor>
          </div>
        )}
      </header>

      <main className="flex-grow"><Outlet /></main>

      {/* Pie: el cierre oscuro que aporta parte del 30% del sistema. */}
      <footer className="bg-gradient-to-br from-[var(--navy-noche)] to-[var(--negro-tinta)] text-white">
        <Contenedor className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <img src={logoCilcca} alt="CILCCA" className="h-10 w-auto object-contain brightness-0 invert mb-6" />
              <p className="t-chico text-[var(--gris-acero)] max-w-sm">
                El Complejo Industrial Licorero del Centro. La plataforma industrial detrás de los
                mejores licores de Venezuela.
              </p>
            </div>

            <div className="md:col-span-3">
              <h3 className="t-micro text-white/55 mb-4">Navegación</h3>
              <ul className="grid grid-cols-2 gap-y-2">
                {navLinks.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path} className="t-chico text-white/85 hover:text-white transition-colors">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="t-micro text-white/55 mb-4">Contacto</h3>
              <address className="t-chico text-white/70 not-italic leading-relaxed">
                Carretera Ocumare a San Francisco de Yare,<br />
                Sector Aponte, Ocumare del Tuy,<br />
                Estado Miranda, Venezuela.
              </address>
              <p className="t-micro text-white/85 mt-4">www.cilcca.com</p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-3">
            <span className="t-micro text-[var(--gris-acero)]">
              © {new Date().getFullYear()} CILCCA · Complejo Industrial Licorero del Centro, C.A. · RIF J-30727685-1
            </span>
            <span className="t-micro text-[var(--gris-acero)]">Todos los derechos reservados.</span>
          </div>
        </Contenedor>
      </footer>
    </div>
  );
}
