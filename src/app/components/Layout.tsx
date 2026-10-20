import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { logo } from "../lib";
import { Intro } from "../Intro";
import { TelonProvider, LinkTelon } from "../transicion";
import { Flecha } from "../ui";

const MENU = [
  { to: "/servicios", nm: "Servicios" },
  { to: "/planta", nm: "Planta" },
  { to: "/maestro", nm: "Maestro" },
];

export function Layout() {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [abierto, setAbierto] = useState(false);
  const [solido, setSolido] = useState(false);
  const [vidrio, setVidrio] = useState(false);

  // Tres estados: transparente arriba del hero, vidrio oscuro mientras se baja
  // por el hero (para que el texto no pase por debajo de los enlaces sueltos) y
  // claro con desenfoque al salir de él.
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector(".cl-hero, .e-phero") as HTMLElement | null;
      const limite = hero ? hero.getBoundingClientRect().height - 88 : 0;
      const fuera = !hero || window.scrollY > limite;
      setSolido(fuera);
      setVidrio(!fuera && window.scrollY > 24);
    };
    onScroll();
    setAbierto(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const cta = (
    <LinkTelon to="/contacto" className="e-btn" onClick={() => setAbierto(false)}>
      Produce con nosotros <Flecha />
    </LinkTelon>
  );

  return (
    <TelonProvider>
      <Intro />

      <header className={"cl-nav" + (solido ? " solido" : "") + (vidrio ? " vidrio" : "") +(abierto ? " abierto" : "")} ref={navRef}>
        <div className="e-wrap bar">
          <LinkTelon to="/" className="cl-logo">
            <img src={logo} alt="CILCCA, inicio" />
          </LinkTelon>
          <nav className="cl-links e-label" aria-label="Principal">
            {MENU.map((m) => (
              <LinkTelon key={m.to} to={m.to} className={location.pathname === m.to ? "on" : undefined}>
                {m.nm}
              </LinkTelon>
            ))}
          </nav>
          {cta}
          <button className="menu-btn e-label" aria-expanded={abierto} onClick={() => setAbierto((v) => !v)}>
            {abierto ? "Cerrar" : "Menú"}
          </button>
        </div>
        <div className="cl-panel">
          <nav aria-label="Principal móvil">
            {MENU.map((m) => (
              <LinkTelon key={m.to} to={m.to} onClick={() => setAbierto(false)}>{m.nm}</LinkTelon>
            ))}
          </nav>
          {cta}
        </div>
      </header>

      <main className="cl">
        <Outlet />
      </main>

      <footer className="cl-foot e-dark">
        <div className="e-wrap">
          <div className="top">
            <div className="marca">
              <img src={logo} alt="CILCCA" />
              <p className="e-s">Complejo Industrial Licorero del Centro. Producimos, añejamos y envasamos para marcas y distribuidores.</p>
            </div>
            <div className="cols">
              <div className="col">
                <span className="e-label">Sitio</span>
                {MENU.map((m) => <LinkTelon key={m.to} to={m.to}>{m.nm}</LinkTelon>)}
                <LinkTelon to="/contacto">Contacto</LinkTelon>
              </div>
              <div className="col">
                <span className="e-label">Planta</span>
                <span>Carretera Ocumare a San Francisco de Yare, sector Aponte. Ocumare del Tuy, Miranda, Venezuela.</span>
                <span className="nota">Teléfono y correo pendientes</span>
              </div>
            </div>
          </div>
          <p className="bot">© 2026 CILCCA</p>
        </div>
      </footer>
    </TelonProvider>
  );
}
