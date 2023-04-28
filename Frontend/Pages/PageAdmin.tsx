import { Outlet } from "react-router-dom"
import Header from "../src/Components/Header/Header"

function PageAdmin() {


    return (
        <div>
            <div className="mt-48" style={{marginTop:'12rem'}}>
            <Outlet />
            </div>
            <Header/>
        </div>
    )
  }
  
  export default PageAdmin