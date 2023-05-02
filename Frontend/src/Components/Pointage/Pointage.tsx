import "./Pointage.css";
import defaultProfil from "../../assets/defaultProfil.svg";
import pointageTrue from "../../assets/pointageTrue.svg";
import pointageFalse from "../../assets/pointageFalse.svg";
import { useState } from "react";

const Pointage = () => {
  const [defaultText, setDefaulttext] = useState<string>(
    "En attente du pointage..."
  );
  const [prenom, setPrenom] = useState<string>("- -");
  const [nom, setNom] = useState<string>("- -");
  const [matricule, setMatricule] = useState<string>("- -");
  const [profil, setProfil] = useState<string>("- -");
  const [bloquer, setBloquer] = useState<boolean>();
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
