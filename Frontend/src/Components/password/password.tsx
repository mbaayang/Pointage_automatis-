import Form from "react-bootstrap/Form";
import { set, useForm } from "react-hook-form";
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
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
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
        if(res.status == 400){
          setError(res.message);
          setTimeout(() => {
            setError("");
          }, 5000);
        }else{
          setSuccess(res.message);
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        }
      });
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
          Vous avez oublié votre mot de passe ?
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
          <Link to="../"><span className="text-xl underline" style={{ color: "#306887" }}> Se connecter </span>
          </Link></p>
        </div>
      </div>
    </div>
  );
}

export default Password;
