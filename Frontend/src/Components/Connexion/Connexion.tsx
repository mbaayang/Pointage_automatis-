import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./Connexion.css";
import { Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Connexion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const [eye, seteye] = useState<boolean>(true);
  const [password, setpassword] = useState<string>("password");

  /**************************************************************************************
   ****************************RECUPERATION DONNEE API **********************************
   **************************************************************************************/
  const onSubmit = (data: any) => {
    fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email1: data.email,
        mot_de_passe: data.passe,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        if (res.correct == false) {
          setError(res.message);
        } else {
          localStorage.setItem("id", res.id_employe);
          localStorage.setItem("token", res.access_token);
          localStorage.setItem("role", res.role);
          localStorage.setItem("prenom", res.prenom1);
          localStorage.setItem("nom", res.nom1);
          localStorage.setItem("email", res.email1);
          if (localStorage.getItem("role") == "vigil") {
            navigate("/vigil");
          } else {
            navigate("/admin");
          }
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
      <Form
        className="bg-white w-1/3 h-3/5 p-5 space-y-5 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2
          className="text-center text-3xl font-medium"
          style={{ color: "#306887" }}
        >
          CONNEXION
        </h2>
        <div
          className={`alert alert-danger ${error == "" ? "cacher" : ""}`}
          role="alert"
        >
          {error}
        </div>
        <Form.Group>
          <Form.Label htmlFor="email" className="text-xl">
            Email{" "}
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </InputGroup.Text>
            <Form.Control
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
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-lock"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
              </svg>
            </InputGroup.Text>
            <Form.Control
              type={password}
              placeholder="Entrer mot de passe"
              style={{ borderRight: "none" }}
              {...register("passe", { required: true, minLength: 6 })}
            />
            <InputGroup.Text className="bg-white">
              <i
                onClick={() => {
                  Eye();
                }}
                className={`bi ${
                  eye ? "bi bi-eye-slash" : "bi-eye"
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
        <div className="mt-4">
          <Button
            className="w-full font-medium text-2xl"
            type="submit"
            style={{
              backgroundColor: "#81CCB7",
              border: "none",
              color: "#306887",
            }}
          >
            Se connecter
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Connexion;
