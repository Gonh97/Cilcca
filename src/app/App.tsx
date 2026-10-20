import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Intro } from "./Intro";

export default function App() {
  return (
    <>
      <Intro />
      <RouterProvider router={router} />
    </>
  );
}
