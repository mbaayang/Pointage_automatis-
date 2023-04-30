import Header from "../src/Components/Header/Header"
import  Pointage  from "../src/Components/Pointage/Pointage"

function PageAdmin() {


    return (
        <div>
            <div className="mt-48" style={{marginTop:'12rem'}}>
            <Pointage/>
            </div>
            <Header/>
        </div>
    )
  }
  
  export default PageAdmin