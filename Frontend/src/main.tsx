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
import { HistoriqueEtudiant } from "./Components/HistoriqueEtudiant/Historique";
import { HistoriqueEmploye } from "./Components/HistoriqueEmploye/Historique";
import Dashboard from "./Components/Dashboard/Dashboard";
import Pointage from "./Components/Pointage/Pointage";
import Connexion from "./Components/Connexion/Connexion";
import Liste_Employes from "./Components/Liste_Employes/Liste_Employes";
import Liste_Etudiants from "./Components/Liste_Etudiants/Liste_Etudiants";
import { PresenceEmployes } from "./Components/PresenceEmployes/PresenceEmployes";
import { PresenceEtudiant } from "./Components/PresenceEtudiant/PresenceEtudiant";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/admin" element={<PageAdmin />}>
        <Route index element={<Dashboard />}></Route>
        <Route
          path="historiqueEtudiant"
          element={<HistoriqueEtudiant />}
        ></Route>
        <Route path="historiqueEmploye" element={<HistoriqueEmploye />}></Route>
        <Route path="presenceEtudiant" element={<PresenceEtudiant />}></Route>
        <Route path="presenceEmploye" element={<PresenceEmployes />}></Route>
        <Route path="pointage" element={<Pointage />}></Route>
        <Route path="listeEmployes" element={<Liste_Employes />}></Route>
        <Route path="listeEtudiants" element={<Liste_Etudiants />}></Route>
      </Route>
      <Route path="/vigil" element={<PageVigil />}></Route>
      <Route index element={<Connexion />}></Route>
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
