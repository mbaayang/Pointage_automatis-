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
      <div className="bg-white w-1/3 h-3/5 p-5 rounded-lg">
        <h2
          className="text-center text-3xl font-medium mb-3"
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
            <Button type="submit" variant="outline-success">
              Modifier
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
                  Renvoyer !
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
