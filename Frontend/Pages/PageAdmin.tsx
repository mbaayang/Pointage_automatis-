/* import Dashboard from "../src/Components/Dashboard/Dashboard" */
import Dashboard from "../src/Components/Dashboard/Dashboard"
import Header from "../src/Components/Header/Header"
import { Historique } from "../src/Components/Historique/Historique"
import Liste_Employes from "../src/Components/Liste_Employes/Liste_Employes"
import { PresenceEtudiant } from "../src/Components/Presence_Etudiant/Presence_Etudiant"

function PageAdmin() {


    return (
        <div>
            <Liste_Employes/>
            <Dashboard/>
            <Historique/>
            <PresenceEtudiant/>
            <Header/>
        </div>
    )
  }
  
  export default PageAdmin