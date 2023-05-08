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
  const [prenom, setPrenom] = useState<string>("- -");
  const [nom, setNom] = useState<string>("- -");
  const [matricule, setMatricule] = useState<string>("- -");
  const [profil, setProfil] = useState<string>("- -");
  const [bloquer, setBloquer] = useState<boolean>();
  const [mat, setMat] = useState<any>();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("rfid", (data) => {
      //console.log(data);
      if (data) {
        //console.log(data.split("@")[1]);
        setMat(data);
     }
    });
  }, [mat]);

  useEffect(() => {
    fetch(`http://localhost:3000/employes/${mat}`, { //mis à jour to be merged MHDLamine->DEV
      method: "GET",
      //body: JSON.stringify(mat),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(mat);
       // console.log(res.token);

        if (res) {
          const id = res.id;
          fetch("http://localhost:3000/presence-employes/presence", { //mis à jour to be merged MHDLamine->DEV
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(
               id
            ),
            
          })
          .then((res) => res.json())
          .then((res) => {
            //console.log(res.prenom);
          
          
          localStorage.setItem("prenom", res.prenom);
          
        
          localStorage.setItem("nom", res.nom);
          localStorage.setItem("email", res.email);
          usenavigate("/dashboard"); 
        });
         
        }
        if (res.message == "accès refusé" && mat != undefined) {
          setSms_erreur(false);
        }
      }),
      [mat];
  });


  return (
    <div className="container container-costumer">
      <div className="row gap-8">
        <div className="col">
          <div
            style={{ backgroundColor: "#81ccb7" }}
            className="d-flex justify-content-center  information"
          >
            <div className="pt-4 profil">
              <img src={defaultProfil} alt="" />
              <div className="pt-2 text" style={{ textAlign: "center" }}>
                <p>
                  matricule: <span className="pl-5 fw-bold"> {matricule}</span>
                </p>
                <p>
                  prénom: <span className="pl-5 fw-bold"> {prenom}</span>
                </p>
                <p>
                  nom: <span className="pl-5 fw-bold"> {nom}</span>
                </p>
                <p>
                  profil: <span className="pl-5 fw-bold"> {profil}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center align-items-center information">
            <div className="pt-4 profil">
              <span className={`text ${matricule == "- -" ? "" : "cacher"}`}>
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
