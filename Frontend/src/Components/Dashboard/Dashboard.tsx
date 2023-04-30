import "./Dashboard.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import certificat from "../../assets/certificate.svg";
import { useForm } from "react-hook-form";
import { Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [eye, seteye] = useState<boolean>(true);
  const [password, setpassword] = useState<string>("password");
  const [eye1, seteye1] = useState<boolean>(true);
  const [password1, setpassword1] = useState<string>("password");

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
      if (password1 == "password") {
        setpassword1("text");
        seteye1(false);
      } else {
        setpassword1("password");
        seteye1(true);
      }
    };

  {
    /*
     ****************************************************************************
     ************************** control de saisie fonctions******************************
     ****************************************************************************
     */
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container text-center">
      <div className="row">
        {/*
         ****************************************************************************
         ************************** LISTE DES EMPLOYEE******************************
         ****************************************************************************
         */}

        <div className="col">
          <div className="d-flex justify-content-center align-items-center gap-2 rounded-top nav">
            <svg
              width="40"
              height="42"
              viewBox="0 0 42 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.6501 27.5C13.4932 27.5 13.3364 27.5273 13.1868 27.5852C12.3363 27.9141 11.4418 28.125 10.5001 28.125C9.55836 28.125 8.6639 27.9141 7.81274 27.5852C7.66312 27.5273 7.50693 27.5 7.35009 27.5C3.27741 27.5 -0.0215502 31.4438 0.000106016 36.2984C0.00929349 38.35 1.42613 40 3.1501 40H17.8501C19.574 40 20.9909 38.35 21.0001 36.2984C21.0217 31.4438 17.7227 27.5 13.6501 27.5ZM10.5001 
                  25C13.9795 25 16.8001 21.6422 16.8001 17.5C16.8001 13.3578 13.9795 10 10.5001 10C7.02065 10 4.2001 13.3578 4.2001 17.5C4.2001 
                  21.6422 7.02065 25 10.5001 25ZM38.85 0H13.6501C11.913 0 10.5001 1.73828 10.5001 3.87422V7.5C12.037 7.5 13.4598 8.02969 14.7001 8.89063V5H37.8V27.5H33.6V22.5H25.2V27.5H20.1968C21.4502 28.8039 22.3703 30.5258 22.8015 32.5H38.85C40.5871 32.5 42 30.7617 42 28.6258V3.87422C42 1.73828 40.5871 0 38.85 0Z"
                fill="#306887"
              />
            </svg>
            <p className="h4 text-color">Liste des employés</p>
          </div>

          <Link to="presenceEmployes" className="d-flex flex-column justify-content-center align-items-center gap-2 rounded-top nav-blanc">
            <p className="h4 text-color">Effectifs</p>
            <div
              className="image-edit"
              style={{
                backgroundImage: `url(${certificat})`,}}>
              <span className="text-5xl text-color cursor-pointer"> 16 </span>
            </div>
          </Link>
        </div>

        {/*
         ****************************************************************************
         ************************** LISTE DES ETUDIANTS******************************
         ****************************************************************************
         */}

        <div className="col">
          <div className="d-flex justify-content-center align-items-center gap-2 rounded-top nav">
            <svg
              width="40"
              height="42"
              viewBox="0 0 47 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.5085 26.3L23.5 34.1254L13.4915 26.3C5.9904 26.5543 0 31.3529 0 37.2752V38.0627C0 40.2364 2.25558 42 5.03571 42H41.9643C44.7444 42 47 40.2364 47 38.0627V37.2752C47 31.3529 41.0096 26.5543 33.5085 26.3ZM1.42679 6.54783L2.09821 6.67087V11.4613C1.36384 11.8058 0.839286 12.4046 0.839286 13.1264C0.839286 13.8154 1.32188 14.3896 2.00379 14.7423L0.367188 19.8526C0.188839 20.4186 0.5875 21.001 1.16451 21.001H5.54978C6.12679 21.001 6.52545 20.4186 6.3471 19.8526L4.71049 14.7423C5.39241 14.3896 5.875 13.8154 5.875 13.1264C5.875 12.4046 5.35045 11.8058 4.61607 11.4613V7.14662L11.5402 8.45086C10.6379 9.86173 10.0714 11.4366 10.0714 13.1264C10.0714 18.9257 16.0828 23.6259 23.5 23.6259C30.9172 23.6259 36.9286 18.9257 36.9286 13.1264C36.9286 11.4366 36.3725 9.86173 35.4598 8.45086L45.5627 6.54783C47.4721 6.18691 47.4721 4.32489 45.5627 3.96397L25.5877 0.190713C24.2239 -0.0635711 22.7866 -0.0635711 21.4228 0.190713L1.42679 3.95576C-0.472098 4.31668 -0.472098 6.18691 1.42679 6.54783Z"
                fill="#306887"/>
            </svg>
            <p className="d-flex flex-column justify-content-center align-items-center h4 text-color">
              Liste des Etudiants
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center gap-2 rounded-top nav-blanc">
            <Link to="presenceEtudiant">
            <span className="d-flex justify-content-center align-items-center rounded h4 text-color text-bg">
              1 ère année
            </span>
            </Link>
            <Link to="presenceEtudiant">
            <span className="d-flex justify-content-center align-items-center rounded  h4 text-color text-bg">
              2 ère année
            </span>
            </Link>
            <Link to="presenceEtudiant">
            <span className="d-flex justify-content-center align-items-center rounded  h4 text-color text-bg">
              3 ère année
            </span>
            </Link>
          </div>
        </div>

        {/*
         ****************************************************************************
         ************************** AJOUTER UN EMPLOYER******************************
         ****************************************************************************
         */}

        <div className="col">
          <div className="d-flex justify-content-center align-items-center gap-2 rounded-top nav">
            <p className="h4 text-color">Ajouter un employé</p>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center gap-2 rounded-top nav-blanc">
            <p className="h4 text-color">Ajout</p>
            <div
              className="image-edit"
              style={{
                backgroundImage: `url(${certificat})`,
              }}>
              <span onClick={handleShow} className="text-5xl text-color cursor-pointer">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 200 182"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M108.333 98.5833V151.667C108.333 153.678 107.455 155.607 105.893 157.029C104.33 158.451 102.21 159.25 100 159.25C97.7899 159.25 95.6702 158.451 94.1074 157.029C92.5446 155.607 91.6667 153.678 91.6667 151.667V98.5833H33.3333C31.1232 98.5833 29.0036 97.7844 27.4408 96.3622C25.878 94.9401 25 93.0112 25 91C25 88.9888 25.878 87.0599 27.4408 85.6378C29.0036 84.2156 31.1232 83.4167 33.3333 83.4167H91.6667V30.3333C91.6667 28.3221 92.5446 26.3933 94.1074 24.9711C95.6702 23.549 97.7899 22.75 100 22.75C102.21 22.75 104.33 23.549 105.893 24.9711C107.455 26.3933 108.333 28.3221 108.333 30.3333V83.4167H166.667C168.877 83.4167 170.996 84.2156 172.559 85.6378C174.122 87.0599 175 88.9888 175 91C175 93.0112 174.122 94.9401 172.559 96.3622C170.996 97.7844 168.877 98.5833 166.667 98.5833H108.333Z"
                    fill="#306887"/>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/*
         ****************************************************************************
         ************************** MODIFIER UN EMPLOYER******************************
         ****************************************************************************
         */}
        <div className="col">
          <div className="d-flex justify-content-center align-items-center gap-2 rounded-top nav">
            {" "}
            <p className="h4 text-color">Modifier un employé</p>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center gap-2 rounded-top nav-blanc">
            <p className="h4 text-color">Modifier</p>
            <Link to="listeEmployes" className="image-edit" style={{ backgroundImage: `url(${certificat})`}}>
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 53 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.94215 46.2643C7.2842 46.2643 5.73497 45.7271 4.62061 44.7299C3.20727 43.4771 2.52779 41.5849 2.7724 39.5394L3.77804 31.255C3.9683 29.6953 4.97394 27.6242 6.14266 26.4992L28.457 4.27971C34.0288 -1.26879 39.8452 -1.42221 45.7432 3.81947C51.6411 9.06114 51.8042 14.5329 46.2324 20.0814L23.9181 42.3009C22.7765 43.4515 20.6565 44.5254 18.9986 44.7813L10.2468 46.1874C9.78471 46.2129 9.37702 46.2643 8.94215 46.2643ZM37.1817 3.7939C35.0888 3.7939 33.2678 5.02122 31.4196 6.86219L9.10522 29.1075C8.56163 29.6444 7.93651 30.9229 7.82779 31.6644L6.82215 39.9485C6.71343 40.7923 6.93086 41.4827 7.42009 41.9173C7.90933 42.352 8.64317 42.5054 9.5401 42.3776L18.2919 40.9715C19.0801 40.8437 20.3847 40.1786 20.9283 39.6417L43.2427 17.4222C46.6129 14.0471 47.836 10.9277 42.9165 6.58093C40.7422 4.61211 38.8668 3.7939 37.1817 3.7939Z"
                    fill="#306887"/>
                  <path
                    d="M41.015 24.3508C40.9606 24.3508 40.8791 24.3508 40.8247 24.3508C32.3447 23.5581 25.5227 17.4984 24.218 9.57193C24.055 8.52359 24.816 7.55197 25.9303 7.37298C27.0447 7.21957 28.0775 7.9355 28.2678 8.98384C29.3006 15.1716 34.6278 19.9274 41.2596 20.5411C42.3739 20.6434 43.1893 21.5894 43.0806 22.6376C42.9447 23.6093 42.0478 24.3508 41.015 24.3508Z"
                    fill="#306887"/>
                  <path
                    d="M50.9615 54.5229H2.03846C0.924103 54.5229 0 53.6535 0 52.6052C0 51.5569 0.924103 50.6875 2.03846 50.6875H50.9615C52.0759 50.6875 53 51.5569 53 52.6052C53 53.6535 52.0759 54.5229 50.9615 54.5229Z"
                    fill="#306887"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/*
       ****************************************************************************
       ************************** MODAL ******************************
       ****************************************************************************
       */}

      <Modal show={show} onHide={handleClose}>
        <div className="d-flex justify-content-between p-3">
          <Modal.Title className="h4 text-color">
            Inscrire un employé
          </Modal.Title>
          <svg
            className="cursor-pointer"
            onClick={handleClose}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.3266 12.9283C27.4815 13.0831 27.6045 13.2669 27.6883 13.4693C27.7722 13.6716 27.8154 13.8885 27.8154 14.1075C27.8154 14.3265 27.7722 14.5434 27.6883 14.7457C27.6045 14.9481 27.4815 15.1319 27.3266 15.2867L22.3566 20.255L26.8166 24.7133C27.1293 25.0261 27.305 25.4502 27.305 25.8925C27.305 26.3348 27.1293 26.7589 26.8166 27.0717C26.5038 27.3844 26.0797 27.5601 25.6374 27.5601C25.1951 27.5601 24.771 27.3844 24.4582 27.0717L19.9999 22.6117L15.5416 27.0717C15.2288 27.3844 14.8047 27.5601 14.3624 27.5601C13.9201 27.5601 13.496 27.3844 13.1832 27.0717C12.8705 26.7589 12.6948 26.3348 12.6948 25.8925C12.6948 25.4502 12.8705 25.0261 13.1832 24.7133L17.6432 20.255L12.6732 15.2867C12.5184 15.1317 12.3956 14.9478 12.3118 14.7454C12.2281 14.5429 12.185 14.326 12.1851 14.1069C12.1851 13.8879 12.2284 13.6709 12.3123 13.4686C12.3962 13.2662 12.5191 13.0824 12.6741 12.9275C12.829 12.7727 13.013 12.6499 13.2154 12.5661C13.4178 12.4823 13.6348 12.4393 13.8538 12.4393C14.0729 12.4394 14.2898 12.4826 14.4922 12.5665C14.6945 12.6504 14.8784 12.7734 15.0332 12.9283L19.9999 17.9L24.9682 12.93C25.123 12.7751 25.3068 12.6521 25.5092 12.5682C25.7115 12.4844 25.9284 12.4412 26.1474 12.4412C26.3664 12.4412 26.5833 12.4844 26.7856 12.5682C26.988 12.6521 27.1718 12.7734 27.3266 12.9283Z"
              fill="#797777"/>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.66663 1.66663C5.34054 1.66663 4.06877 2.19341 3.13109 3.13109C2.19341 4.06877 1.66663 5.34054 1.66663 6.66663V33.3333C1.66663 34.6594 2.19341 35.9311 3.13109 36.8688C4.06877 37.8065 5.34054 38.3333 6.66663 38.3333H33.3333C34.6594 38.3333 35.9311 37.8065 36.8688 36.8688C37.8065 35.9311 38.3333 34.6594 38.3333 33.3333V6.66663C38.3333 5.34054 37.8065 4.06877 36.8688 3.13109C35.9311 2.19341 34.6594 1.66663 33.3333 1.66663H6.66663ZM33.3333 4.99996H6.66663C6.2246 4.99996 5.80067 5.17555 5.48811 5.48811C5.17555 5.80068 4.99996 6.2246 4.99996 6.66663V33.3333C4.99996 33.7753 5.17555 34.1992 5.48811 34.5118C5.80067 34.8244 6.2246 35 6.66663 35H33.3333C33.7753 35 34.1992 34.8244 34.5118 34.5118C34.8244 34.1992 35 33.7753 35 33.3333V6.66663C35 6.2246 34.8244 5.80068 34.5118 5.48811C34.1992 5.17555 33.7753 4.99996 33.3333 4.99996Z"
              fill="#797777"/>
          </svg>
        </div>
        <Modal.Body className="-mt-8">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="prenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
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

            <Form.Group className="mb-3" controlId="nom">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="ndiaye"
                autoFocus
                {...register("nom", {
                  required: true,
                })}
              />
              {errors.nom?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="astouissa@gmail.com"
                autoFocus
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <div>
                {/* message d'erreur */}
                {errors.email?.type === "required" && (
                  <span className="text-red-600">Ce champ est Obligatoire</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-600">
                    Entrer un email valide
                  </span>
                )}
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="matricule">
              <Form.Label>Matricule</Form.Label>
              <Form.Control
                type="text"
                placeholder="9208383576278772"
                autoFocus
                {...register("matricule", {
                  required: true,
                })}
              />
              {errors.matricule?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
                    <Form.Label>Rôle<span className='text-danger'>*</span></Form.Label>
                    <Form.Select placeholder="Choisir un rôle"  
                        {...register("role", {
                            required:true
                            })
                        }
                      >
                        <option placeholder="Choisir un rôle"></option>
                        <option value="Admin" className=" text-black">Admin</option>
                        <option value="Surveillant" className=" text-black">Surveillant</option>
                        <option value="Professeur" className=" text-black">Professeur</option>
                        <option value="Vigile" className=" text-black">Vigile</option>
                    </Form.Select>
                    {errors.role?.type === "required" && <p className='text-red-500'>Ce champ est requis</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Mot de passe</Form.Label>
              <InputGroup>
                <Form.Control
                  type={password}
                  placeholder="*****"
                  autoFocus
                  {...register("password", { required: true, minLength: 6 })}
                />
                <InputGroup.Text>
                  <i onClick={() => { Eye();}} className={`bi ${eye ? "bi bi-eye-slash" : "bi-eye"}`}></i>
                </InputGroup.Text>
              </InputGroup>
                {/* message d'erreur */}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Minimum 6 caractère</p>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Ce champ est obligatoire</p>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Confirmer mot de passe</Form.Label>
              <InputGroup>
                <Form.Control
                  type={password1}
                  placeholder="*****"
                  autoFocus
                  {...register("password1", { required: true, minLength: 6 })}
                />
                <InputGroup.Text>
                  <i onClick={() => { Eye1();}} className={`bi ${eye1 ? "bi bi-eye-slash" : "bi-eye"}`}></i>
                </InputGroup.Text>
              </InputGroup>
                {/* message d'erreur */}
                {errors.password1?.type === "minLength" && (
                  <p className="text-red-600">Minimum 6 caractère</p>
                )}
                {errors.password1?.type === "required" && (
                  <p className="text-red-600">Ce champ est obligatoire</p>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="photo">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                accept="image/*"
                type="file"
                placeholder=""
                autoFocus
                {...register("file", {
                  required: true,
                })}
              />

              {errors.file?.type === "required" && (
                <p className="text-red-500">Ce champ est obligatoire</p>
              )}
            </Form.Group>
            <Button
              variant="outline-success"
              className="d-flex justify-content-center align-items-center submit"
              type="submit"
            >
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dashboard;
