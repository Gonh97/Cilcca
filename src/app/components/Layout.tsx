import { Outlet } from "react-router";
import { logo } from "../lib";
import { Intro } from "../Intro";
import { TelonProvider, LinkTelon } from "../transicion";

export function Layout() {
  return (
    <TelonProvider>
      <Intro />

      <nav className="cl-nav">
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
