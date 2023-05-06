import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import PageAdmin from "../Pages/PageAdmin";
import PageVigil from "../Pages/PageVigil";
import { Historique } from "./Components/Historique/Historique";
import Dashboard from "./Components/Dashboard/Dashboard";
import { PresenceEtudiant } from "./Components/PresenceEtudiant/PresenceEtudiant";
import Pointage from "./Components/Pointage/Pointage";
import Connexion from "./Components/Connexion/Connexion";
import Liste_Employes from "./Components/Liste_Employes/Liste_Employes";
import { PresenceEmployes } from "./Components/PresenceEmployes/PresenceEmployes";
import  Form  from "./Components/form";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/admin" element={<PageAdmin />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="historique" element={<Historique />}></Route>
        <Route path="presenceEtudiant" element={<PresenceEtudiant />}></Route>
        <Route path="presenceEmployes" element={<PresenceEmployes />}></Route>
        <Route path="pointage" element={<Pointage />}></Route>
        <Route path="listeEmployes" element={<Liste_Employes />}></Route>
      </Route>
      <Route path="/vigil" element={<PageVigil />}></Route>
      <Route index element={<Connexion />}></Route>
      <Route path="form" element={<Form />}></Route>
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
