import Form from "react-bootstrap/Form";
import { set, useForm } from "react-hook-form";
import { Button, InputGroup } from "react-bootstrap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Password_update() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const password = useRef({});
  password.current = watch("newPassword", "");

  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    console.log(data);
    /*   fetch(
      
        
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
      }); */
  };

  return (
    <div
      className="w-full h-screen d-flex justify-center align-items-center"
      style={{ backgroundColor: "#306887" }}
    >
      <div className="bg-white w-1/3 h-3/5 p-5  rounded-lg">
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
          <div className={`alert alert-danger ${error == "" ? "cacher" : ""} `}>
            {error}
          </div>
          <Form.Group className="mb-3">
            <Form.Label className="text-lg">code à 6 chiffres</Form.Label>
            <Form.Control
              type="number"
              id="code"
              {...register("code", {
                required: true,
            
              })}
            />
            {errors.code?.type === "required" && (
              <p className="text-red-500">Ce champ est obligatoire</p>
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
      </div>
    </div>
  );
}

export default Password_update;
