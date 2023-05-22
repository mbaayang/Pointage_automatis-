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
  const [bloquer, setBloquer] = useState<boolean>(true);
  const [mat, setMat] = useState<any>([]);
  const [archive, setArchive] = useState<string>();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("data", (data) => {
      console.log(data);
      if (data == "Compte archivé") {
        setBloquer(true);
        setMat([]);
        setArchive(data);
      } else {
        setBloquer(false);
        setMat(data);
      }
    }),
      [mat];
  });
  document.body.dataset.theme = localStorage.getItem("night")?.toString()
  return (
    
    <div className="container c">
      <div className="row gap-8 forDevice">
        <div className="col">
          <div
            className={`d-flex justify-content-center ${
              localStorage.getItem("night")
                ? "information-moon left-moon"
                : "information left"
            }  `}
          >
            <div className="pt-4 profil">
              <img
                src={`data:image/png;base64,${mat.image || mat.photo}`}
                alt=""
                className="rounded-full w-40 h-40 shadow-md"
              />
              <div className="pt-2 text" style={{ textAlign: "center" }}>
                <p className={`${localStorage.getItem("night") && "text-white"}`} >
                  matricule:{" "}
                  <span className="pl-5 fw-bold"> {mat.matricule}</span>
                </p>
                <p className={`${localStorage.getItem("night") && "text-white"}`} >
                  prénom: <span className="pl-5 fw-bold"> {mat.prenom}</span>
                </p>
                <p className={`${localStorage.getItem("night") && "text-white"}`} >
                  nom: <span className="pl-5 fw-bold"> {mat.nom}</span>
                </p>
                <p className={`${localStorage.getItem("night") && "text-white"}`} >
                  profil: <span className="pl-5 fw-bold"> {mat.role ||mat.niveau }</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className={`d-flex justify-content-center align-items-center ${
              localStorage.getItem("night") ? "information-moon" : "information"
            }`}
          >
            <div className="pt-4 profil">
              <span className={`text ${mat == "- -" ? "" : "cacher"}`}>
                {" "}
                <p>{defaultText}</p>
              </span>
              <p
                className={`text-danger none pb-3 ${
                  bloquer == true ? "" : "cacher"
                }`}
              >
                {archive}
              </p>

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
                Accès refusé
              </p>
              <p
                className={`text-success none pt-3 ${
                  bloquer == false ? "" : "cacher"
                }`}
              >
                Accès autorisé
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pointage;
