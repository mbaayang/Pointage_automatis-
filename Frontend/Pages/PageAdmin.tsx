import { Navigate, Outlet } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import "./NIGHMODE.css"

function PageAdmin() {
  
  document.body.dataset.theme = localStorage.getItem("night")?.toString()
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="bg-color" >
      <div className="forMT" >
        <Outlet />
      </div>
      <Header/>
    </div>
  );
}
export default PageAdmin;
