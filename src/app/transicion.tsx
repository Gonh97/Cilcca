// Transición de página tipo "telón": al navegar, un panel navy sube cubriendo
// la pantalla, se cambia de página detrás, y el telón sigue subiendo revelando
// la nueva. Además revela (.rv) el contenido de cada página al entrar en pantalla.
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router";

type Fase = "idle" | "cubriendo" | "revelando";
const Ctx = createContext<{ ir: (to: string) => void }>({ ir: () => {} });
export const useTelon = () => useContext(Ctx);

const CUBRIR_MS = 460;
const REVELAR_MS = 620;

export function TelonProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [fase, setFase] = useState<Fase>("idle");
  const ocupado = useRef(false);

  const ir = (to: string) => {
    if (ocupado.current || to === location.pathname) return;
    ocupado.current = true;
    setFase("cubriendo");
    window.setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => setFase("revelando"));
      window.setTimeout(() => {
        setFase("idle");
        ocupado.current = false;
      }, REVELAR_MS + 60);
    }, CUBRIR_MS);
  };

  // Revela el contenido de cada página: lo visible al entrar se enciende ya, el
  // resto cuando aparece al hacer scroll.
  useEffect(() => {
    const reveal = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.filter = "none";
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            reveal(en.target as HTMLElement);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal(el);
      else io.observe(el);
    });
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <Ctx.Provider value={{ ir }}>
      {children}
      <div className={`cl-telon${fase !== "idle" ? " on " + fase : ""}`} aria-hidden="true" />
    </Ctx.Provider>
  );
}

export function LinkTelon({
  to,
  className,
  children,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const { ir } = useTelon();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        ir(to);
      }}
    >
      {children}
    </a>
  );
}
