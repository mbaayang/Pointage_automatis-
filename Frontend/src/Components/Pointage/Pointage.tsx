import "./Pointage.css";
import defaultProfil from "../../assets/defaultProfil.svg";
import pointageTrue from "../../assets/pointageTrue.svg";
import pointageFalse from "../../assets/pointageFalse.svg";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";


const Pointage = () => {
  const [defaultText, setDefaulttext] = useState<string>(
    "En attente du pointage..."
  );
  const [bloquer, setBloquer] = useState<boolean>();
  const [mat, setMat] = useState<any>([]);


  /* useEffect(() => { */
  const socket = socketIOClient(ENDPOINT);
    socket.on("data", (data) => {
      console.log(data);
      if(data){
        /* setBloquer(true);
        setMat([]); */
        setBloquer(false);
        setMat(data);
      }
      /* else{
        setBloquer(false);
        setMat(data);
      }    */
    })/* ,
    [mat];
  }); */



  return (
    <div className="container container-costumer">
      <div className="row gap-8">
        <div className="col">
          <div
         
            className={`d-flex justify-content-center ${localStorage.getItem("night") ? "information-moon left-moon" : "information left"}  `}
          >
            
            <div className="pt-4 profil">
              <img src={`data:image/png;base64,${mat.image || mat.photo}`} alt="" className="rounded-full w-32 h-32 shadow-md" />
              <div className="pt-2 text" style={{ textAlign: "center" }}>
                <p>
                  matricule: <span className="pl-5 fw-bold"> {mat.matricule}</span>
                </p>
                <p>
                  prénom: <span className="pl-5 fw-bold"> {mat.prenom}</span>
                </p>
                <p>
                  nom: <span className="pl-5 fw-bold"> {mat.nom}</span>
                </p>
                <p>
                  profil: <span className="pl-5 fw-bold"> {mat.role}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`d-flex justify-content-center align-items-center ${localStorage.getItem("night") ? "information-moon" : "information"}`}>
            <div className="pt-4 profil">
              <span className={`text ${mat.matricule == "- -" ? "" : "cacher"}`}>
                {" "}
                <p>{defaultText}</p>
              </span>
              <img
                className={`text ${bloquer == false ? "" : "cacher"}`}
                src={pointageTrue}
                alt=""
              />
              <img
                className={`text ${bloquer == true ? "" : "cacher"}`}
                src={pointageFalse}
                alt=""
              />
              <p
                className={`text-danger none pt-3 ${
                  bloquer == true ? "" : "cacher"
                }`}
              >
                accès refusé
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pointage;
