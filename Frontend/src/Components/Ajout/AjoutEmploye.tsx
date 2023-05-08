import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Button, InputGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Swal from "sweetalert2";

function AjoutEmploye() {

    const [eye, seteye] = useState<boolean>(true);
    const [password, setpassword] = useState<string>("password");
    const [eye1, seteye1] = useState<boolean>(true);
    const [passwordConfirm, setPasswordConfirm] = useState<string>("password");
    const [errorBack, setErrorBack] = useState("");
    const [etat, setEtat] = useState<boolean>(false);
    const [errorPassword, setErrorPass] = useState("");
    const [file, setFile] = useState<any>();
    

    const Eye = () => {
        if (password == "password") {
            setpassword("text");
            seteye(false);
        } else {
            setpassword("password");
            seteye(true);
        }
    };

    const Eye1 = () => {
        if (passwordConfirm == "password") {
            setPasswordConfirm("text");
            seteye1(false);
        } else {
            setPasswordConfirm("password");
            seteye1(true);
        }
    };

     /* const setimgfile = (e: any) => {
        setFile(e.target.files[0])
    }  */

    function showSuccessAlert() {
        Swal.fire({
            title: "Inscription réussie!",
            icon: "success",
            timer: 2000, // Affiche la boîte de dialogue pendant 3 secondes
            showConfirmButton: false, // Supprime le bouton "OK"
        });
    }

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data:any) => {
        
        console.log(data)
        const lecteur = new FileReader()

        lecteur.readAsDataURL(data.image[0]);
        lecteur.onload = async () => {
            const base64Image = lecteur.result!.split(',')[1]
        
            const response = await axios.post("http://localhost:3000/employes/post",
            {
                prenom: data.prenom,
                nom: data.nom,
                email: data.email,
                matricule: data.matricule,
                role: data.role,
                mot_de_passe: data.mot_de_passe,
                image: base64Image
            });
            console.log(response.data);
            showSuccessAlert();
            setTimeout(() => {
                window.location.reload();
            }, 2000);   
        }
    };

    return (
        <>
            <div>
                <div className="d-flex justify-content-between p-3">
                    <h1 className="h4 text-color">Inscrire un employé</h1>
                </div>
                <div
                    className={`alert alert-danger text-center ${!etat ? "cacher" : ""}`}>
                    {errorBack}
                </div>
                <div className="-mt-8">
                    <Form onSubmit={handleSubmit(onSubmit)} className="m-3 space-y-3">
                        <Form.Group>
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control
                                id="prenom"
                                type="text"
                                placeholder="issa"
                                autoFocus
                                {...register("prenom", {
                                    required: true,
                                })}
                            />
                            {errors.prenom?.type === "required" && (
                                <p className="text-red-500">Ce champ est obligatoire</p>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                id="nom"
                                type="text"
                                placeholder="ndiaye"
                                {...register("nom", {
                                    required: true,
                                })}
                            />
                            {errors.nom?.type === "required" && (
                                <p className="text-red-500">Ce champ est obligatoire</p>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                id="email"
                                type="email"
                                placeholder="astouissa@gmail.com"
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                })}
                            />
                            <div>
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Ce champ est Obligatoire</p>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="text-red-600">Entrer un email valide</span>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Matricule</Form.Label>
                            <Form.Control
                                id="matricule"
                                type="text"
                                placeholder="9208383576278772"
                                {...register("matricule", {
                                    required: true,
                                })}
                            />
                            {errors.matricule?.type === "required" && (
                                <p className="text-red-500">Ce champ est obligatoire</p>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Rôle<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                                id="role"
                                placeholder="Choisir un rôle"
                                {...register("role", {
                                    required: true,
                                })}
                                >
                                <option placeholder="Choisir un rôle"></option>
                                <option value="administrateur" className=" text-black">Admin</option>
                                <option value="surveillant" className=" text-black"> Surveillant</option>
                                <option value="professeur" className=" text-black"> Professeur</option>
                                <option value="vigile" className=" text-black"> Vigile</option>
                            </Form.Select>
                            {errors.role?.type === "required" && (
                                <p className="text-red-500">Ce champ est requis</p>
                            )}
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Mot de passe</Form.Label>
                                <InputGroup>
                                    <Form.Control style={{ borderRight: 'none' }}
                                        id="mot_de_passe"
                                        type={password}
                                        placeholder="*****"
                                        {...register("mot_de_passe", { required: true, minLength: 6 })} />
                                    <InputGroup.Text className="bg-white">
                                        <i onClick={() => { Eye(); }} className={`bi ${eye ? "bi bi-eye-slash" : "bi-eye"}`}></i>
                                    </InputGroup.Text>
                                </InputGroup>
                                {errors.mot_de_passe?.type === "minLength" && (
                                    <p className="text-red-600">Minimum 6 caractère</p>
                                )}
                                {errors.mot_de_passe?.type === "required" && (
                                    <p className="text-red-600">Ce champ est obligatoire</p>
                                )}
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Confirmer mot de passe</Form.Label>
                                <InputGroup>
                                    <Form.Control style={{ borderRight: 'none' }}
                                        type={passwordConfirm}
                                        placeholder="*****" />
                                    <InputGroup.Text className="bg-white">
                                        <i onClick={() => { Eye1(); }} className={`bi ${eye1 ? "bi bi-eye-slash" : "bi-eye"}`}></i>
                                    </InputGroup.Text>
                                </InputGroup>          
                                {/* <p className="text-red-600"></p> */}
                                {errors.passwordConfirm?.type === "required" && (
                                    <p className="text-red-600">Ce champ est obligatoire</p>
                                )}
                                {/* <div className="text-red-600">
                                {errorPassword}
                                </div> */}
                            </Form.Group>
                        </Row>
                        <Form.Group>
                            <Form.Label>photo</Form.Label>
                            <Form.Control type="file" placeholder="" accept="image/*" id="image"
                                {...register("image", { required: true, })}
                                /* onChange={setimgfile} */ />
                            {errors.image?.type === "required" && (
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
    )
}

export default AjoutEmploye;