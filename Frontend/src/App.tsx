import './App.css'
import { Outlet } from 'react-router-dom'
import Connexion from './Components/Connexion/Connexion'
import Liste_Employes from './Components/Liste_Employes/Liste_Employes'

function App() {


  return (
  
    <Outlet/>
  )
}

export default App
