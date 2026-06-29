import { Outlet, NavLink, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { logoCilcca } from "../../imports/assets";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Historia", path: "/historia" },
  { name: "Servicios", path: "/servicios" },
  { name: "Portafolio", path: "/portafolio" },
  { name: "Premios", path: "/premios" },
  { name: "Contacto", path: "/contacto" },
];

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <ImageWithFallback
                src={logoCilcca}
                alt="CILCCA Logo"
                className="h-12 w-auto object-contain object-left -ml-2 lg:-ml-3"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                      isActive ? "font-medium text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border absolute w-full h-screen">
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xl tracking-wide uppercase ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-8 md:py-10">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            <div className="md:col-span-2 lg:col-span-3">
              <Link to="/" className="block mb-5">
                <ImageWithFallback
                  src={logoCilcca}
                  alt="CILCCA Logo"
                  className="h-12 w-auto object-contain object-left -ml-2 lg:-ml-3 brightness-0 invert"
                />
              </Link>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                El Complejo Industrial Licorero del Centro. La plataforma industrial detrás de los mejores licores de Venezuela.
              </p>
            </div>

            <div className="md:col-span-1 lg:col-span-2">
              <h3 className="font-bold mb-3 uppercase tracking-wider text-xs text-white">Navegación</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-white/80">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors font-bold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1 lg:col-span-1">
              <h3 className="font-bold mb-3 uppercase tracking-wider text-xs text-white">Contacto</h3>
              <ul className="space-y-2 text-sm text-white/80 font-bold">
                <li>Ocumare del Tuy</li>
                <li>Miranda, Venezuela</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/20 text-white/60 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-bold">&copy; {new Date().getFullYear()} CILCCA.</span>
            <span className="font-bold">Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
