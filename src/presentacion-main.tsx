// Entrada aparte para el artefacto de la presentación: solo la página, sin el router del sitio.
import { createRoot } from "react-dom/client";
import { Presentacion } from "./app/pages/Presentacion";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<Presentacion />);
