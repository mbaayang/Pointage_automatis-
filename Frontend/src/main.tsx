import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.tsx' */
import './index.css'
import Dashboard from './Components/Dashboard/Dashboard.tsx'
import Pointage from './Components/Pointage/Pointage.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   {/*  <App /> */}
   {/* <Dashboard></Dashboard> */}
   <Pointage></Pointage>
  </React.StrictMode>,
)
