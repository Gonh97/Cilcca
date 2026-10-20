import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";

// Sitio de una sola página (one-pager). Las secciones se navegan por anclas
// (#servicios, #planta, #maestro, #contacto) dentro de Home.
export const router = createBrowserRouter(
  [
    { path: "/", Component: Home },
    { path: "*", Component: Home },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") },
);
