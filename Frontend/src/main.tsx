import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import PageAdmin from '../Pages/PageAdmin.tsx'
import PageVigil from '../Pages/PageVigil.tsx'
import { Historique } from './Components/Historique/Historique.tsx'
import Dashboard from './Components/Dashboard/Dashboard.tsx'
import { PresenceEtudiant } from './Components/PresenceEtudiant/PresenceEtudiant.tsx'
import Pointage from './Components/Pointage/Pointage.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/admin" element={<PageAdmin />} >
        <Route index element= {<Dashboard />}></Route>
        <Route path="historique" element={<Historique />}></Route>
        <Route path="presenceEtudiant" element={<PresenceEtudiant />}></Route>
        <Route path="pointage" element={<Pointage />}></Route>
      </Route>
      <Route path="/vigil" element={<PageVigil />} ></Route>
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)