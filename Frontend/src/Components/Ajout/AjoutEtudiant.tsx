import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function AjoutEtudiant() {

  const [error, setError] = useState<any>("");

  function showSuccessAlert() {
    Swal.fire({
      title: "Inscription réussie!",
      icon: "success",
      timer: 3000, // Affiche la boîte de dialogue pendant 3 secondes
      showConfirmButton: false, // Supprime le bouton "OK"
    });
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    
    const lecteur = new FileReader();
    lecteur.readAsDataURL(data.photo[0]);
    let base64 = "";

    lecteur.onload = async function () {
      base64 = lecteur.result!.split(',')[1];

      try {
        const response = await axios.post("http://localhost:3000/etudiant", {
          prenom: data.prenom,
          nom: data.nom,
          email: data.email,
          matricule: data.matricule,
          niveau: data.niveau,
          photo: base64
        });
        if (response.data.message === "Succes"){
          showSuccessAlert();
          reset()
        }
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(() => {
          setError("");
        }, 3000)
      }
    }
  };
  return (
    <>
      <div>
        <div className="d-flex justify-content-between p-3">
          <h1 className="h4 text-color">Inscire un étudiant</h1>
        </div>
        {error && (
          <div className="alert alert-danger text-center mr-3 ml-3 mb-5" role="alert">
            <strong> Erreur! </strong> {error}
          </div>
        )}
        <div className="-mt-8">
          <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="m-3 space-y-3">
            <Form.Group>
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="issa"
                autoFocus
                id="prenom"
                {...register("prenom", { required: true })}
              />
              {errors.prenom?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="ndiaye"
                id="nom"
                {...register("nom", { required: true })}
              />
              {errors.nom?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="astouissa@gmail.com"
                id="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <div>
                {/* message d'erreur */}
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Ce champ est obligatoire</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-500"> Email entré n'est pas valide</p>
                )}
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Matricule</Form.Label>
              <Form.Control
                type="text"
                placeholder="9208383576278772"
                id="matricule"
                {...register("matricule", { required: true })}
              />
              {errors.matricule?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Niveau</Form.Label>
              <Form.Control
                as="select"
                {...register("niveau", { required: true })}
                id="niveau"
              >
                <option value=""></option>
                <option value="1 ère année">1 ère année</option>
                <option value="2 ème année">2 ème année</option>
                <option value="3 ème année">3 ème année</option>
              </Form.Control>
              {errors.niveau?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>photo</Form.Label>
              <Form.Control
                accept="image/*"
                type="file"
                placeholder=""
                id="photo"
                {...register("photo", { required: true })}
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              className="d-flex justify-content-center align-items-center">
              Ajouter
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AjoutEtudiant