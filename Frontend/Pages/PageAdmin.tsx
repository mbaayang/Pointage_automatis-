/* import Dashboard from "../src/Components/Dashboard/Dashboard" */
import Dashboard from "../src/Components/Dashboard/Dashboard"
import Header from "../src/Components/Header/Header"
import { Historique } from "../src/Components/Historique/Historique"
import { PresenceEtudiant } from "../src/Components/Presence_Etudiant/Presence_Etudiant"

function PageAdmin() {


    return (
        <div>
            <Dashboard/>
            <Historique/>
            <PresenceEtudiant/>
            <Header/>
        </div>
    )
  }
  
  export default PageAdmin