import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import PageAdmin from '../Pages/PageAdmin.tsx'
import PageVigil from '../Pages/PageVigil.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/admin" element={<PageAdmin />} ></Route>
      <Route path="/vigil" element={<PageVigil />} ></Route>
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)