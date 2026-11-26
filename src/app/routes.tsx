import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { Planta } from "./pages/Planta";
import { Maestro } from "./pages/Maestro";
import { Contacto } from "./pages/Contacto";

// Sitio multipágina: cada sección es su propia ruta, con transición de telón.
export const router = createBrowserRouter(
  [
    // Oculta: no está en el menú y no se indexa. Va sin la barra ni el pie del sitio.
    {
      path: "/presentacion",
      // Se descarga aparte; mientras llega, fondo oscuro de la presentación (sin destello blanco con mala señal).
      HydrateFallback: () => <div style={{ minHeight: "100vh", background: "#070C12" }} />,
      lazy: () => import("./pages/Presentacion").then((m) => ({ Component: m.Presentacion })),
    },
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "servicios", Component: Servicios },
        { path: "planta", Component: Planta },
        { path: "maestro", Component: Maestro },
        { path: "contacto", Component: Contacto },
        { path: "*", Component: Home },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") },
);
