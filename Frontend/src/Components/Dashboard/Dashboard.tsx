import "./Dashboard.css";
import { useState ,useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import certificat from "../../assets/certificate.svg";
import certificat_night from "../../assets/certificate_night.svg";
import { Link } from "react-router-dom";
import "../DashboardProf/DashboardProf";
import DashboardProf from "../DashboardProf/DashboardProf";
import AjoutEtudiant from "../Ajout/AjoutEtudiant";
import AjoutEmploye from "../Ajout/AjoutEmploye";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

const Dashboard = () => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [totalEmploye, setTotalEmploye] = useState<number>(0);

  const socket = socketIOClient(ENDPOINT);
  socket.on("rfid", (data) => {
    console.log(data);
    //if (data.includes("@")) {
    //console.log(data.split("@")[1]);
    //setMat({ matricule1: data.split("@")[1], matricule2: data.split("@")[1] });
    // }
  });
/**************************************************************************
*****************************LE MODE NUIT*********************************
***************************************************************************/



  useEffect(() => {
    fetch("http://localhost:3000/presence-employes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((res) => {
        const currentDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
        const total = res.filter((item: any) => {
          return item.date == currentDate; 
        });
        setTotalEmploye(total.length);
      });
  }, []);

  if (
    localStorage.getItem("role") == "administrateur" 
  ) {
    return (
      <div className="container  text- mt-64">
        <div className="row">
          {/*
           ****************************************************************************
           ************************** LISTE DES EMPLOYEE******************************
           ****************************************************************************
           */}

          <div className="col">
            <div className={`d-flex justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-moon" : "nav" } `}>
              <svg
                width="40"
                height="42"
                viewBox="0 0 42 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6501 27.5C13.4932 27.5 13.3364 27.5273 13.1868 27.5852C12.3363 27.9141 11.4418 28.125 10.5001 28.125C9.55836 28.125 8.6639 27.9141 7.81274 27.5852C7.66312 27.5273 7.50693 27.5 7.35009 27.5C3.27741 27.5 -0.0215502 31.4438 0.000106016 36.2984C0.00929349 38.35 1.42613 40 3.1501 40H17.8501C19.574 40 20.9909 38.35 21.0001 36.2984C21.0217 31.4438 17.7227 27.5 13.6501 27.5ZM10.5001 
                25C13.9795 25 16.8001 21.6422 16.8001 17.5C16.8001 13.3578 13.9795 10 10.5001 10C7.02065 10 4.2001 13.3578 4.2001 17.5C4.2001 
                21.6422 7.02065 25 10.5001 25ZM38.85 0H13.6501C11.913 0 10.5001 1.73828 10.5001 3.87422V7.5C12.037 7.5 13.4598 8.02969 14.7001 8.89063V5H37.8V27.5H33.6V22.5H25.2V27.5H20.1968C21.4502 28.8039 22.3703 30.5258 22.8015 32.5H38.85C40.5871 32.5 42 30.7617 42 28.6258V3.87422C42 1.73828 40.5871 0 38.85 0Z"
                  fill="#306887"
                />
              </svg>
              <p className={`h4  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }  `}>Liste des employés</p>
            </div>
            <Link
              to="presenceEmploye"
              className={`d-flex flex-column justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-blanc-moon" : "nav-blanc" }`}
            >
              <p className={`h4  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }`}>Effectifs</p>
              <div
                className="image-edit"
                style={{
                  backgroundImage: `url(${localStorage.getItem("night") ? certificat_night : certificat })`, 
                }}
              >
                <span className={`text-5xl cursor-pointer ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }`}>{totalEmploye} </span>
           
              </div>
            </Link>
          </div>

          {/*
           ****************************************************************************
           ************************** LISTE DES ETUDIANTS******************************
           ****************************************************************************
           */}

          <div className="col">
            <div className={`d-flex justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-moon" : "nav" } `}>
              <svg
                width="40"
                height="42"
                viewBox="0 0 47 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.5085 26.3L23.5 34.1254L13.4915 26.3C5.9904 26.5543 0 31.3529 0 37.2752V38.0627C0 40.2364 2.25558 42 5.03571 42H41.9643C44.7444 42 47 40.2364 47 38.0627V37.2752C47 31.3529 41.0096 26.5543 33.5085 26.3ZM1.42679 6.54783L2.09821 6.67087V11.4613C1.36384 11.8058 0.839286 12.4046 0.839286 13.1264C0.839286 13.8154 1.32188 14.3896 2.00379 14.7423L0.367188 19.8526C0.188839 20.4186 0.5875 21.001 1.16451 21.001H5.54978C6.12679 21.001 6.52545 20.4186 6.3471 19.8526L4.71049 14.7423C5.39241 14.3896 5.875 13.8154 5.875 13.1264C5.875 12.4046 5.35045 11.8058 4.61607 11.4613V7.14662L11.5402 8.45086C10.6379 9.86173 10.0714 11.4366 10.0714 13.1264C10.0714 18.9257 16.0828 23.6259 23.5 23.6259C30.9172 23.6259 36.9286 18.9257 36.9286 13.1264C36.9286 11.4366 36.3725 9.86173 35.4598 8.45086L45.5627 6.54783C47.4721 6.18691 47.4721 4.32489 45.5627 3.96397L25.5877 0.190713C24.2239 -0.0635711 22.7866 -0.0635711 21.4228 0.190713L1.42679 3.95576C-0.472098 4.31668 -0.472098 6.18691 1.42679 6.54783Z"
                  fill="#306887"
                />
              </svg>
              <p className={`h4  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }  `}>
                Liste des Etudiants
              </p>
            </div>
            <div  className={`d-flex flex-column justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-blanc-moon" : "nav-blanc" }`}>
              <Link
                to="presenceEtudiant"
                onClick={() => {
                  localStorage.removeItem("annee");
                  localStorage.setItem("annee", "1 ère année");
                }}
              >
                <span className={`d-flex justify-content-center align-items-center rounded h4  ${localStorage.getItem("night") ? "text-bg-moon text-color-moon" : "text-bg text-color" }`}>
                  1 ère année
                </span>
              </Link>
              <Link
                to="presenceEtudiant"
                onClick={() => {
                  localStorage.removeItem("annee");
                  localStorage.setItem("annee", "2 ème année");
                }}
              >
                <span className={`d-flex justify-content-center align-items-center rounded h4  ${localStorage.getItem("night") ? "text-bg-moon text-color-moon" : "text-bg text-color" }`}>
                  2 ème année
                </span>
              </Link>
              <Link
                to="presenceEtudiant"
                onClick={() => {
                  localStorage.removeItem("annee");
                  localStorage.setItem("annee", "3 ème année");
                }}
              >
                <span className={`d-flex justify-content-center align-items-center rounded h4  ${localStorage.getItem("night") ? "text-bg-moon text-color-moon" : "text-bg text-color" }`}>
                  3 ème année
                </span>
              </Link>
            </div>
          </div>

          {/*
           ****************************************************************************
           ************************** AJOUTER ******************************
           ****************************************************************************
           */}
            <div className="col">
              <div className={`d-flex justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-moon" : "nav" } `}>
                <svg
                  fill="#306887"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="45px"
                  height="45px"
                >
                  {" "}
                  <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z" />
                </svg>
                <p className={`h4  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }  `}> Ajouter </p>
              </div>
              <div  className={`d-flex flex-column justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-blanc-moon" : "nav-blanc" }`}>
                <span
                  onClick={handleShow1}
                  className={`d-flex justify-content-center align-items-center rounded h4 cursor-pointer ${localStorage.getItem("night") ? "text-bg-moon text-color-moon" : "text-bg text-color" }`}
                >
                  Un employé
                </span>
                <span
                  onClick={handleShow2}
                  className={`d-flex justify-content-center align-items-center rounded h4 cursor-pointer ${localStorage.getItem("night") ? "text-bg-moon text-color-moon" : "text-bg text-color" }`}
                >
                  Un étudiant
                </span>
              </div>
            </div>

          {/*
           ****************************************************************************
           ************************** MODIFIER UN EMPLOYER******************************
           ****************************************************************************
           */}
          <div
            className={`col ${
              localStorage.getItem("role") == "surveillant" ? "cacher" : ""
            } `}
          >
            <div className={`d-flex justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-moon" : "nav" } `}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 53 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.94215 46.2643C7.2842 46.2643 5.73497 45.7271 4.62061 44.7299C3.20727 43.4771 2.52779 41.5849 2.7724 39.5394L3.77804 31.255C3.9683 29.6953 4.97394 27.6242 6.14266 26.4992L28.457 4.27971C34.0288 -1.26879 39.8452 -1.42221 45.7432 3.81947C51.6411 9.06114 51.8042 14.5329 46.2324 20.0814L23.9181 42.3009C22.7765 43.4515 20.6565 44.5254 18.9986 44.7813L10.2468 46.1874C9.78471 46.2129 9.37702 46.2643 8.94215 46.2643ZM37.1817 3.7939C35.0888 3.7939 33.2678 5.02122 31.4196 6.86219L9.10522 29.1075C8.56163 29.6444 7.93651 30.9229 7.82779 31.6644L6.82215 39.9485C6.71343 40.7923 6.93086 41.4827 7.42009 41.9173C7.90933 42.352 8.64317 42.5054 9.5401 42.3776L18.2919 40.9715C19.0801 40.8437 20.3847 40.1786 20.9283 39.6417L43.2427 17.4222C46.6129 14.0471 47.836 10.9277 42.9165 6.58093C40.7422 4.61211 38.8668 3.7939 37.1817 3.7939Z"
                  fill="#306887"
                />
                <path
                  d="M41.015 24.3508C40.9606 24.3508 40.8791 24.3508 40.8247 24.3508C32.3447 23.5581 25.5227 17.4984 24.218 9.57193C24.055 8.52359 24.816 7.55197 25.9303 7.37298C27.0447 7.21957 28.0775 7.9355 28.2678 8.98384C29.3006 15.1716 34.6278 19.9274 41.2596 20.5411C42.3739 20.6434 43.1893 21.5894 43.0806 22.6376C42.9447 23.6093 42.0478 24.3508 41.015 24.3508Z"
                  fill="#306887"
                />
                <path
                  d="M50.9615 54.5229H2.03846C0.924103 54.5229 0 53.6535 0 52.6052C0 51.5569 0.924103 50.6875 2.03846 50.6875H50.9615C52.0759 50.6875 53 51.5569 53 52.6052C53 53.6535 52.0759 54.5229 50.9615 54.5229Z"
                  fill="#306887"
                />
              </svg>
              <div className={`h4  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }  `}>Modifier</div>
            </div>
            {/*    <div className="d-flex flex-column justify-content-center align-items-center gap-2 rounded-top nav-blanc">
              <p className="h4 text-color">Modifier</p>
              <Link
                to="listeEmployes"
                className="image-edit"
                style={{ backgroundImage: `url(${certificat})` }}
              >
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 53 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.94215 46.2643C7.2842 46.2643 5.73497 45.7271 4.62061 44.7299C3.20727 43.4771 2.52779 41.5849 2.7724 39.5394L3.77804 31.255C3.9683 29.6953 4.97394 27.6242 6.14266 26.4992L28.457 4.27971C34.0288 -1.26879 39.8452 -1.42221 45.7432 3.81947C51.6411 9.06114 51.8042 14.5329 46.2324 20.0814L23.9181 42.3009C22.7765 43.4515 20.6565 44.5254 18.9986 44.7813L10.2468 46.1874C9.78471 46.2129 9.37702 46.2643 8.94215 46.2643ZM37.1817 3.7939C35.0888 3.7939 33.2678 5.02122 31.4196 6.86219L9.10522 29.1075C8.56163 29.6444 7.93651 30.9229 7.82779 31.6644L6.82215 39.9485C6.71343 40.7923 6.93086 41.4827 7.42009 41.9173C7.90933 42.352 8.64317 42.5054 9.5401 42.3776L18.2919 40.9715C19.0801 40.8437 20.3847 40.1786 20.9283 39.6417L43.2427 17.4222C46.6129 14.0471 47.836 10.9277 42.9165 6.58093C40.7422 4.61211 38.8668 3.7939 37.1817 3.7939Z"
                      fill="#306887"
                    />
                    <path
                      d="M41.015 24.3508C40.9606 24.3508 40.8791 24.3508 40.8247 24.3508C32.3447 23.5581 25.5227 17.4984 24.218 9.57193C24.055 8.52359 24.816 7.55197 25.9303 7.37298C27.0447 7.21957 28.0775 7.9355 28.2678 8.98384C29.3006 15.1716 34.6278 19.9274 41.2596 20.5411C42.3739 20.6434 43.1893 21.5894 43.0806 22.6376C42.9447 23.6093 42.0478 24.3508 41.015 24.3508Z"
                      fill="#306887"
                    />
                    <path
                      d="M50.9615 54.5229H2.03846C0.924103 54.5229 0 53.6535 0 52.6052C0 51.5569 0.924103 50.6875 2.03846 50.6875H50.9615C52.0759 50.6875 53 51.5569 53 52.6052C53 53.6535 52.0759 54.5229 50.9615 54.5229Z"
                      fill="#306887"
                    />
                  </svg>
                </span>
              </Link>
              
            </div> */}
         
            <div className={`d-flex flex-column justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-blanc-moon" : "nav-blanc" }`}>
              <Link to="listeEmployes">
                <span className={`d-flex justify-content-center align-items-center rounded h4 cursor-pointer ${localStorage.getItem("night") ? "text-bg-moon text-color-moon" : "text-bg text-color" }`}>
                  Un employé
                </span>
              </Link >
              <Link to="listeEtudiants">
              <span className={`d-flex justify-content-center align-items-center rounded h4 cursor-pointer ${localStorage.getItem("night") ? "text-bg-moon text-color-moon" : "text-bg text-color" }`}>
                Un étudiant
              </span>
              </Link>
            </div>
          </div>
        </div>

        {/*
         ****************************************************************************
         ************************** MODAL INSCRIPTION EMPLOYÉS ******************************
         ****************************************************************************
         */}

        {show1 && (
          <Modal show={show1} onHide={handleClose1}>
            {" "}
            <AjoutEmploye />
            <svg
              className="cursor-pointer absolute mt-3"
              style={{ marginLeft: "90%" }}
              onClick={handleClose1}
              width="35"
              height="35"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3266 12.9283C27.4815 13.0831 27.6045 13.2669 27.6883 13.4693C27.7722 13.6716 27.8154 13.8885 27.8154 14.1075C27.8154 14.3265 27.7722 14.5434 27.6883 14.7457C27.6045 14.9481 27.4815 15.1319 27.3266 15.2867L22.3566 20.255L26.8166 24.7133C27.1293 25.0261 27.305 25.4502 27.305 25.8925C27.305 26.3348 27.1293 26.7589 26.8166 27.0717C26.5038 27.3844 26.0797 27.5601 25.6374 27.5601C25.1951 27.5601 24.771 27.3844 24.4582 27.0717L19.9999 22.6117L15.5416 27.0717C15.2288 27.3844 14.8047 27.5601 14.3624 27.5601C13.9201 27.5601 13.496 27.3844 13.1832 27.0717C12.8705 26.7589 12.6948 26.3348 12.6948 25.8925C12.6948 25.4502 12.8705 25.0261 13.1832 24.7133L17.6432 20.255L12.6732 15.2867C12.5184 15.1317 12.3956 14.9478 12.3118 14.7454C12.2281 14.5429 12.185 14.326 12.1851 14.1069C12.1851 13.8879 12.2284 13.6709 12.3123 13.4686C12.3962 13.2662 12.5191 13.0824 12.6741 12.9275C12.829 12.7727 13.013 12.6499 13.2154 12.5661C13.4178 12.4823 13.6348 12.4393 13.8538 12.4393C14.0729 12.4394 14.2898 12.4826 14.4922 12.5665C14.6945 12.6504 14.8784 12.7734 15.0332 12.9283L19.9999 17.9L24.9682 12.93C25.123 12.7751 25.3068 12.6521 25.5092 12.5682C25.7115 12.4844 25.9284 12.4412 26.1474 12.4412C26.3664 12.4412 26.5833 12.4844 26.7856 12.5682C26.988 12.6521 27.1718 12.7734 27.3266 12.9283Z"
                fill="#797777"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66663 1.66663C5.34054 1.66663 4.06877 2.19341 3.13109 3.13109C2.19341 4.06877 1.66663 5.34054 1.66663 6.66663V33.3333C1.66663 34.6594 2.19341 35.9311 3.13109 36.8688C4.06877 37.8065 5.34054 38.3333 6.66663 38.3333H33.3333C34.6594 38.3333 35.9311 37.8065 36.8688 36.8688C37.8065 35.9311 38.3333 34.6594 38.3333 33.3333V6.66663C38.3333 5.34054 37.8065 4.06877 36.8688 3.13109C35.9311 2.19341 34.6594 1.66663 33.3333 1.66663H6.66663ZM33.3333 4.99996H6.66663C6.2246 4.99996 5.80067 5.17555 5.48811 5.48811C5.17555 5.80068 4.99996 6.2246 4.99996 6.66663V33.3333C4.99996 33.7753 5.17555 34.1992 5.48811 34.5118C5.80067 34.8244 6.2246 35 6.66663 35H33.3333C33.7753 35 34.1992 34.8244 34.5118 34.5118C34.8244 34.1992 35 33.7753 35 33.3333V6.66663C35 6.2246 34.8244 5.80068 34.5118 5.48811C34.1992 5.17555 33.7753 4.99996 33.3333 4.99996Z"
                fill="#797777"
              />
            </svg>
          </Modal>
        )}

        {/*
         ****************************************************************************
         ************************** MODAL INSCRIPTION ETUDIANTS ******************************
         ****************************************************************************
         */}

        {show2 && (
          <Modal show={show2} onHide={handleClose2}>
            {" "}
            <AjoutEtudiant />
            <svg
              className="cursor-pointer absolute mt-3"
              style={{ marginLeft: "90%" }}
              onClick={handleClose2}
              width="35"
              height="35"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3266 12.9283C27.4815 13.0831 27.6045 13.2669 27.6883 13.4693C27.7722 13.6716 27.8154 13.8885 27.8154 14.1075C27.8154 14.3265 27.7722 14.5434 27.6883 14.7457C27.6045 14.9481 27.4815 15.1319 27.3266 15.2867L22.3566 20.255L26.8166 24.7133C27.1293 25.0261 27.305 25.4502 27.305 25.8925C27.305 26.3348 27.1293 26.7589 26.8166 27.0717C26.5038 27.3844 26.0797 27.5601 25.6374 27.5601C25.1951 27.5601 24.771 27.3844 24.4582 27.0717L19.9999 22.6117L15.5416 27.0717C15.2288 27.3844 14.8047 27.5601 14.3624 27.5601C13.9201 27.5601 13.496 27.3844 13.1832 27.0717C12.8705 26.7589 12.6948 26.3348 12.6948 25.8925C12.6948 25.4502 12.8705 25.0261 13.1832 24.7133L17.6432 20.255L12.6732 15.2867C12.5184 15.1317 12.3956 14.9478 12.3118 14.7454C12.2281 14.5429 12.185 14.326 12.1851 14.1069C12.1851 13.8879 12.2284 13.6709 12.3123 13.4686C12.3962 13.2662 12.5191 13.0824 12.6741 12.9275C12.829 12.7727 13.013 12.6499 13.2154 12.5661C13.4178 12.4823 13.6348 12.4393 13.8538 12.4393C14.0729 12.4394 14.2898 12.4826 14.4922 12.5665C14.6945 12.6504 14.8784 12.7734 15.0332 12.9283L19.9999 17.9L24.9682 12.93C25.123 12.7751 25.3068 12.6521 25.5092 12.5682C25.7115 12.4844 25.9284 12.4412 26.1474 12.4412C26.3664 12.4412 26.5833 12.4844 26.7856 12.5682C26.988 12.6521 27.1718 12.7734 27.3266 12.9283Z"
                fill="#797777"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66663 1.66663C5.34054 1.66663 4.06877 2.19341 3.13109 3.13109C2.19341 4.06877 1.66663 5.34054 1.66663 6.66663V33.3333C1.66663 34.6594 2.19341 35.9311 3.13109 36.8688C4.06877 37.8065 5.34054 38.3333 6.66663 38.3333H33.3333C34.6594 38.3333 35.9311 37.8065 36.8688 36.8688C37.8065 35.9311 38.3333 34.6594 38.3333 33.3333V6.66663C38.3333 5.34054 37.8065 4.06877 36.8688 3.13109C35.9311 2.19341 34.6594 1.66663 33.3333 1.66663H6.66663ZM33.3333 4.99996H6.66663C6.2246 4.99996 5.80067 5.17555 5.48811 5.48811C5.17555 5.80068 4.99996 6.2246 4.99996 6.66663V33.3333C4.99996 33.7753 5.17555 34.1992 5.48811 34.5118C5.80067 34.8244 6.2246 35 6.66663 35H33.3333C33.7753 35 34.1992 34.8244 34.5118 34.5118C34.8244 34.1992 35 33.7753 35 33.3333V6.66663C35 6.2246 34.8244 5.80068 34.5118 5.48811C34.1992 5.17555 33.7753 4.99996 33.3333 4.99996Z"
                fill="#797777"
              />
            </svg>
          </Modal>
        )}
      </div>
    );
  } else {
    return <DashboardProf></DashboardProf>;
  }
};

export default Dashboard;
