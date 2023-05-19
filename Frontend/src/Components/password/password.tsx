import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Password() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState<boolean>(false);


  /**************************************************************************************
   ****************************RECUPERATION DONNEE API **********************************
   **************************************************************************************/
  const onSubmit1 = (data: any) => {
    setIsloading(true);
   /*  setTimeout(() => {
      setIsloading(false);
    }, 3500); */
    console.log(data);

    fetch("http://localhost:3000/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        to: data.email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsloading(false);
        if(res.message == "L'adresse email n'existe pas." || res.message == "Le compte est archivé."){
          setError(res.message);
          setTimeout(() => {
            setError("");
          }, 5000);
        }else{
          setSuccess(res.message);
          setTimeout(() => {
            setSuccess("");
          }, 5000);
          setTimeout(() => {
            navigate("/password_update");
          }, 5000);
          localStorage.setItem(`email_tempo`, `${data.email}`)
        }
      });
      setTimeout(() => {
        if (error == "") {
          setError("Le serveur ne repond pas, veillez réessayer plus tard")
        }
        setIsloading(false);
      }, 8000);
      setError("")
  };

  return (
    <div
      className="w-full h-screen d-flex justify-center align-items-center"
      style={{ backgroundColor: "#306887" }}
    >
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-center text-3xl font-medium ml-6 mr-6 mb-3"
          style={{ color: "#306887" }}>
          Vous avez oublié votre mot <br/> de passe ?
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
        {success && (
          <div
            className={`alert alert-success text-center ${
              isLoading ? "d-none" : ""
            } `}
            role="alert"
          >
            <strong> Succès! </strong> {success}
          </div>
        )}
        <Form onSubmit={handleSubmit(onSubmit1)} className="space-y-6 pt-3">
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
            <span className={`status ${isLoading ? "d-none" : ""}`}>
              Réinitialiser
            </span>
          </Button>
        </Form>
        <div className="text-center mt-5 text-lg">
          <p> Ou bien ? 
          <Link to="../"><span className="text-xl underline" style={{ color: "#306887" }}>Se connecter </span>
          </Link></p>
        </div>
      </div>
    </div>
  );
}

export default Password;
