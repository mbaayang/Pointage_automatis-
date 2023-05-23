import Form from "react-bootstrap/Form";
import { set, useForm } from "react-hook-form";
import "./Connexion.css";
import { Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Connexion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [eye, seteye] = useState<boolean>(true);
  const [password, setpassword] = useState<string>("password");

  /**************************************************************************************
   ****************************RECUPERATION DONNEE API **********************************
   **************************************************************************************/
  const onSubmit = (data: any) => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 2000);

    fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: data.email,
        mot_de_passe: data.passe,
      }),
    })
      .then((res) => res.json())
      .then((res) => {

        if (res.correct == false) {
          setError(res.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        } else {
          localStorage.setItem("id", res.id);
          localStorage.setItem("token", res.access_token);
          localStorage.setItem("role", res.role);
          localStorage.setItem("prenom", res.prenom);
          localStorage.setItem("nom", res.nom);
          localStorage.setItem("email", res.email);
          localStorage.setItem("image", res.image);
          setTimeout(() => {
            if (localStorage.getItem("role") == "vigil") {
              navigate("/vigil");
            } else {
              navigate("/admin");
            }
          }, 1000);

        }
      });
  };

  const Eye = () => {
    if (password == "password") {
      setpassword("text");
      seteye(false);
    } else {
      setpassword("password");
      seteye(true);
    }
  };

      return (
        <div
          className="w-full h-screen d-flex justify-center align-items-center"
          style={{ backgroundColor: "#306887" }}
        >
          <div className="bg-white p-5 rounded-lg">
            <h2
              className="text-center text-3xl font-medium ml-16 mr-16 mb-5"
              style={{ color: "#306887" }}
            >
             PAGE DE CONNEXION
            </h2>
            {error && (
              <div className={`alert alert-danger text-center ${isLoading ? "d-none" : ""} `} role="alert">
                <strong> Erreur! </strong> {error}
              </div>
            )}
            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Form.Group>
                <Form.Label htmlFor="email" className="text-xl">
                  Adresse email
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-white">
                  <svg fill="#306887" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 30.933594 32.527344 C 30.785156 30.914063 30.84375 29.789063 30.84375 28.316406 C 31.574219 27.933594 32.882813 25.492188 33.101563 23.429688 C 33.675781 23.382813 34.582031 22.824219 34.847656 20.613281 C 34.988281 19.425781 34.421875 18.757813 34.074219 18.546875 C 35.007813 15.738281 36.949219 7.046875 30.488281 6.148438 C 29.820313 4.980469 28.117188 4.390625 25.90625 4.390625 C 17.050781 4.554688 15.984375 11.078125 17.925781 18.546875 C 17.578125 18.757813 17.011719 19.425781 17.152344 20.613281 C 17.421875 22.824219 18.324219 23.382813 18.898438 23.429688 C 19.117188 25.492188 20.476563 27.933594 21.210938 28.316406 C 21.210938 29.789063 21.265625 30.914063 21.117188 32.527344 C 19.367188 37.238281 7.546875 35.914063 7 45 L 45 45 C 44.453125 35.914063 32.683594 37.238281 30.933594 32.527344 Z"/></svg>
                  </InputGroup.Text>
                  <Form.Control
                  style={{ borderLeft: 'none' }}
                    type="email"
                    placeholder="Entrer email"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                    })}
                  />
                </InputGroup>
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Ce champs est requis</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-500">Entrer un email correct</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="passe" className="text-xl">
                  Mot de passe
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-white">
                  <svg fill="#306887" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="30px"><path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"/></svg>
                  </InputGroup.Text>
                  <Form.Control
                  style={{ borderLeft: "none" }}
                    type={password}
                    placeholder="Entrer mot de passe"
                    {...register("passe", { required: true, minLength: 6 })}
                  />
                  <InputGroup.Text className="bg-white">
                    <i
                      onClick={() => {
                        Eye();
                      }}
                      className={`bi ${eye ? "bi bi-eye-slash" : "bi-eye"
                        } cursor-pointer`}
                    ></i>
                  </InputGroup.Text>
                </InputGroup>
                {errors.passe?.type === "required" && (
                  <p className="text-red-500">Ce champs est requis</p>
                )}
                {errors.passe?.type === "minLength" && (
                  <p className="text-red-500">Au moins 6 caractères</p>
                )}
              </Form.Group>
              <Button
                className="w-full font-medium text-2xl"
                type="submit"
                style={{
                  backgroundColor: "#81CCB7",
                  border: "none",
                  color: "#306887",
                }}
              >
                <span role="status" className={`${!isLoading ? "d-none" : ""} `}>
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </span>
                <span className={`status ${isLoading ? "d-none" : ""}`} >Se connecter</span>
              </Button>
            </Form>
            <Link to="password" >
            <div className="text-center mt-3 text-lg cursor-pointer" style={{ color: "#306887" }}>
              <span> Mot de passe oublié ?</span>
            </div>
            </Link>
          </div>
        </div>
      );
  };

  export default Connexion;
