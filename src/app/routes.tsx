import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Awards } from "./pages/Awards";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "historia", Component: History },
        { path: "servicios", Component: Services },
        { path: "portafolio", Component: Portfolio },
        { path: "premios", Component: Awards },
        { path: "contacto", Component: Contact },
      ],
    },
  ],
  // Base path para GitHub Pages project page (/Cilcca/). Vite expone BASE_URL
  // con la barra final; react-router espera el basename SIN la barra final.
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") },
);
