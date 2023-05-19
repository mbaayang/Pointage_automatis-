import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Password_update() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const password = useRef({});
  password.current = watch("newPassword", "");

  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState<boolean>(false);

  function showSuccessAlert() {
    Swal.fire({
      title: "Modification réussie!",
      icon: "success",
      timer: 2000, // Affiche la boîte de dialogue pendant 2 secondes
      showConfirmButton: false, // Supprime le bouton "OK"
    });
  }

  const onSubmit = (data: any) => {
    console.log(data);
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 2000);

    fetch("http://localhost:3000/reset/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email_tempo"),
        code: data.code,
        newPassword: data.newPassword,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.correct == false) {
          setError(res.message);
        }

        setTimeout(() => {
          setError("");
        }, 5000);
        if (res.message == "reussi") {
          showSuccessAlert();
          setTimeout(() => {
            navigate("/");
          }, 2000);
          localStorage.removeItem("email_tempo");
        }
      });
  };

  return (
    <div
      className="w-full h-screen d-flex justify-center align-items-center"
      style={{ backgroundColor: "#306887" }}
    >
      <div className="bg-white px-5 py-5 rounded-lg">
        <h2
          className="text-center text-3xl font-medium ml-16 mr-16 mb-3"
          style={{ color: "#306887" }}
        >
          Mot de passe oublié
        </h2>

        {error && (
          <div
            className={`alert alert-danger text-center ${
              isLoading ? "d-none" : ""
            } `}
            role="alert"
          >
            <strong> Erreur! </strong> {error}
          </div>
        )}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label className="text-lg">Code à 6 chiffres</Form.Label>
            <Form.Control
              type="number"
              id="code"
              {...register("code", {
                required: true,
                minLength: 6,
              })}
            />
            {errors.code?.type === "required" && (
              <p className="text-red-500">Ce champ est obligatoire</p>
            )}
            {errors.code?.type === "minLength" && (
              <p className="text-red-500">Minimum 6 caractères</p>
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
          <div className=" flex justify-end mb-3">
            <Button 
            className="w-full font-medium text-2xl"
            type="submit"
            style={{
              backgroundColor: "#81CCB7",
              border: "none",
              color: "#306887",
            }}>
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
            <span className={`status ${isLoading ? "d-none" : ""}`}>
              Modifier
            </span>
            </Button>
          </div>
          <div className="text-center">
            <p>
              Vous n'avez pas reçu de mail ?
              <Link to="/password">
                <span
                  className=" text-lg underline"
                  style={{ color: "#306887" }}
                >
                  Renvoyer
                </span>
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Password_update;
