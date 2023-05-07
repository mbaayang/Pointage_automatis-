import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";

function AjoutEtudiant() {

  const [prenom, setPrenom ] = useState("");
  const [nom, setNom ] = useState("");
  const [email, setEmail ] = useState("");
  const [matricule, setMatricule ] = useState("");
  const [niveau, setNiveau ] = useState("");
  const [photo, setPhoto] = useState<any>();

  const [error, setError] = useState<any>("");

  const handleImageChange = (event: any) => {
    setPhoto(event.target.files[0]);
  };

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
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("prenom", prenom);
    formData.append("nom", nom);
    formData.append("email", email);
    formData.append("matricule", matricule);
    formData.append("niveau", niveau);
    formData.append("photo", photo);
    try {
      const response = await axios.post("http://localhost:3000/etudiant", formData);
      console.log(response);
        showSuccessAlert();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
    } catch (error) {
      console.log(error.response.data.message);
      setTimeout(() => {
        setError(error.response.data.message);
        if (error.response.data.message == "File too large") {
            setError( "La taille de l'image doit être inférieure à 5 Mo");
        }
      }, 3000);
    }

    // let headersList = {
    //   "Accept": "*/*",
    //   'Content-Type': 'multipart/form-data',
    //   'Authorization': 'Bearer ' + localStorage.getItem('token')
    //  }
     
     /* let bodyContent = new FormData();
     bodyContent.append("prenom", "prenom");
     bodyContent.append("nom", "nom");
     bodyContent.append("email", "email");
     bodyContent.append("matricule", "matricule");
     bodyContent.append("niveau", "niveau");
     bodyContent.append("photo", "photo");
     
     let response = await fetch("http://localhost:3000/etudiant", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data); */
  };
  return (
    <>
    <div>
          <div className="d-flex justify-content-between p-3">
            <h1 className="h4 text-color">Inscire un étudiant</h1>
          </div>
          {error && (
            <div className="alert alert-danger text-center mr-3 ml-3 mb-5" role="alert">
              <strong> Erreur! </strong>{error}
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
                  value={prenom}
                  onChange={(event) => setPrenom(event.target.value)}
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
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
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
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  value={matricule}
                  {...register("matricule", { required: true })}
                  onChange={(event) => setMatricule(event.target.value)}
                />
                {errors.matricule?.type === "required" && (
                  <p className="text-red-500">Ce champ est obligatoire</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Niveau</Form.Label>
                <Form.Control
                  as="select"
                  value={niveau}
                  {...register("niveau", { required: true })}
                  id="niveau"
                  onChange={(event) => setNiveau(event.target.value)}
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
                  onChange={handleImageChange}
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