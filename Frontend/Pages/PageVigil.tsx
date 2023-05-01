import { Navigate } from "react-router-dom";
import Header from "../src/Components/Header/Header"
import  Pointage  from "../src/Components/Pointage/Pointage"

function PageAdmin() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/" replace />;
    }

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