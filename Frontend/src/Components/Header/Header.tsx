import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import axios from "axios";
import { log } from "console";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState<any>("");
  const [users, setUsers] = useState<any>();
  const [nightmode, setNightmode] = useState<boolean>();
  const navigate = useNavigate();
  
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  /*****************************************************************************************
   ******************************SWEET ALERT*********************************************
   ****************************************************************************************/
  function showSuccessAlert() {
    Swal.fire({
      title: "Modification réussie!",
      icon: "success",
      timer: 2000, // Affiche la boîte de dialogue pendant 2 secondes
      showConfirmButton: false, // Supprime le bouton "OK"
    });
  }
  /*****************************************************************************************
   ******************************MODE NUIT GRAPHICS*********************************************
   ****************************************************************************************/
  const NiGHMARE = (e:any) =>{
    if (e == false) {
      localStorage.setItem("night", "true")
      console.log("activer");
      window.location.reload();
    }
    if (e == true) {
      localStorage.removeItem("night")
      console.log("déactiver");
      window.location.reload();
      
    }
    }
   


  /*****************************************************************************************
   ******************************LOGIN FUNCTION*********************************************
   ****************************************************************************************/
  useEffect(() => {
    axios
      .get(`http://localhost:3000/employes/${localStorage.getItem("id")}`)
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  const onSubmit = (data: any) => {
    fetch(
      `http://localhost:3000/employes/password/${localStorage.getItem(
        "email"
      )}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          mot_de_passe: data.actuelPassword,
          NewPassword: data.newPassword,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "Le mot de passe est incorrect") {
          setError("actuel mot de passe incorrect");
        }
        if (res.message == "reussi") {
          setError("");
          showSuccessAlert();
          reset();
        }
      });
  };
  const password = useRef({});
  password.current = watch("newPassword", "");

  //Deconnexion
  const deconnexion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-20 fixed-top header">
        <Link to={"/admin"}>
          <div className="mode">
          { !localStorage.getItem("night") &&  (
                <svg
                  onClick={()=>{NiGHMARE(false)}}
                  width="24"
                  height="24"
                  viewBox="0 0 154 152"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 72.0492C7 112.143 39.9742 144.644 80.6499 144.644C109.568 144.644 134.593 128.217 146.644 104.314C80.6499 104.314 47.9166 72.0492 47.9166 7C23.6658 18.879 7 43.5457 7 72.0492Z"
                    stroke="white"
                    stroke-width="12.8037"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                )}
              { localStorage.getItem("night") &&  (
              
               <span onClick={()=>{NiGHMARE(true)}} >
               <svg width="23" height="23" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.8219 124.725C105.964 124.725 124.725 105.964 124.725 82.8222C124.725 59.6798 105.964 40.9192 82.8219 40.9192C59.6795 40.9192 40.9189 59.6798 40.9189 82.8222C40.9189 105.964 59.6795 124.725 82.8219 124.725Z" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M152.66 82.8223H159.644" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.8223 12.9838V6" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.8223 159.644V152.66" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138.693 138.693L131.709 131.709" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138.693 26.9514L131.709 33.9352" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9512 138.693L33.935 131.709" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9512 26.9514L33.935 33.9352" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 82.8223H12.9838" stroke="white" stroke-width="10.4757" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>

              
                 )}
          </div>
          <div
            className={` text-white absolute ml-8 mt-4 ${
              localStorage.getItem("role") == "vigil" ? "cacher" : ""
            }`}
            data-toggle="tooltip"
            data-placement="top"
            title="Page d'acceuil"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
        </Link>
        <img
          src={`data:image/png;base64,${localStorage.getItem("image")}`}
          alt=""
          className="rounded-full w-32 h-32 absolute shadow-md ml-24 mt-3"
        />
        <div className="text-white text-lg absolute ml-60 mt-4">
          <p>
            {localStorage.getItem("prenom")} {localStorage.getItem("nom")}{" "}
          </p>
          <p>{localStorage.getItem("role")}</p>
       
               
            
        </div>

        <div className="d-flex place-content-end">
          <div className="icone absolute">
            <div className="d-flex align-items-center place-content-end">
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-9 h-9 text-white mr-8 mt-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="w-72 mt-3 mr-8 menu">
              <div className="d-flex justify-center">
                <div className="text-white text-lg m-3 space-y-2">
                  <div
                    className="d-flex space-x-3 cursor-pointer"
                    onClick={handleShow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                    <p>Modifier mot de passe</p>
                  </div>
                  {localStorage.getItem("role") == "administrateur" && (
                    <Link to="pointage" className="flex space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                      <p>Pointage</p>
                    </Link>
                  )}
                  <div className="d-flex space-x-3 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    <p onClick={() => deconnexion()}>Deconnexion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modifier le mot de passe</Modal.Title>
          <svg
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 flex"
            style={{ cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`alert alert-danger ${error == "" ? "cacher" : ""} `}
            >
              {error}
            </div>
            <Form.Group className="mb-3">
              <Form.Label className="text-lg">Mot de passe actuel</Form.Label>
              <Form.Control
                type="password"
                id="actuelPassword"
                {...register("actuelPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
              />
              {errors.actuelPassword?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
              {errors.actuelPassword?.type === "minLength" && (
                <p className="text-red-500">Minimum 6 caractères</p>
              )}
              {errors.actuelPassword?.type === "maxLength" && (
                <p className="text-red-500">Maximum 20 caractères</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-lg">Nouveau mot de passe</Form.Label>
              <Form.Control
                type="password"
                id="newPassword"
                {...register("newPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
              />
              {errors.newPassword?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
              {errors.newPassword?.type === "minLength" && (
                <p className="text-red-500">Minimum 6 caractères</p>
              )}
              {errors.newPassword?.type === "maxLength" && (
                <p className="text-red-500">Maximum 20 caractères</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-lg">
                Confirmation du mot de passe
              </Form.Label>
              <Form.Control
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Ce champ est obligatoire",
                  },
                  validate: (value) =>
                    password.current === value ||
                    "Les deux mots de passe ne correspondent pas",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">
                  {errors.confirmPassword.message as string}
                </p>
              )}
            </Form.Group>
            <Button type="submit" variant="outline-success">
              Modifier
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
