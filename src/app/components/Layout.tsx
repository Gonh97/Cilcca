import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import { logo } from "../lib";
import { Intro } from "../Intro";
import { TelonProvider, LinkTelon } from "../transicion";

export function Layout() {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // El nav es transparente (blanco) sobre el hero y se vuelve claro al entrar
  // al cuerpo luminoso. En páginas sin hero, claro desde arriba.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      const hero = document.querySelector(".cl-hero") as HTMLElement | null;
      if (hero) {
        const h = hero.getBoundingClientRect().height;
        nav.classList.toggle("solido", window.scrollY > h - 72);
      } else {
        nav.classList.add("solido");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <TelonProvider>
      <Intro />

      <nav className="cl-nav" ref={navRef}>
        <div className="cl-wrap in">
          <LinkTelon to="/" className="cl-logo">
            <img src={logo} alt="CILCCA" />
          </LinkTelon>
          <div className="cl-menu">
            <LinkTelon to="/servicios">Servicios</LinkTelon>
            <LinkTelon to="/planta">Planta</LinkTelon>
            <LinkTelon to="/maestro">Maestro</LinkTelon>
            <LinkTelon to="/contacto" className="cl-btn">Contacto</LinkTelon>
          </div>
        </div>
      </nav>

      <main className="cl">
        <Outlet />
      </main>

      <footer className="cl-foot">
        <div className="cl-wrap">
          <LinkTelon to="/" className="name">CILCCA</LinkTelon>
          <div className="row">
            <div className="links">
              <LinkTelon to="/servicios">Servicios</LinkTelon>
              <LinkTelon to="/planta">Planta</LinkTelon>
              <LinkTelon to="/maestro">Maestro</LinkTelon>
              <LinkTelon to="/contacto">Contacto</LinkTelon>
            </div>
            <div className="fdir">Complejo Industrial Licorero del Centro · Ocumare del Tuy, Estado Miranda, Venezuela</div>
          </div>
        </div>
      </footer>
    </TelonProvider>
  );
}
