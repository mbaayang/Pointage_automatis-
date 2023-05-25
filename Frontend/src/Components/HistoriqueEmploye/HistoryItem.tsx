import { useState } from "react";
import { Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

/* Définition des types des props du composant HistoryItem */
type HistoryItemProps = {
  data: any;
};

/* Composant HistoryItem qui représente un élément du tableau historique */
const HistoryItem: React.FC<HistoryItemProps> = ({
  data,
}: HistoryItemProps) => {
  const [employe, setemploye] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async (email: any, date: any) => {
    console.log(date);

    setShow(true);
    fetch(`http://localhost:3000/entre-sortie`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        /*    setemploye(res);  */
        console.log(res);
        setemploye(
          res.filter((e: any) => {
            return e.email == email && e.date == date;
          })
        );
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Heures d'entrées et de sorties</Modal.Title>
          <svg 
          onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </Modal.Header>
        <Modal.Body>
          <Table striped className="mt-3">
            <tbody>
              {employe.length != 0 ? (
                employe.map((employe: any) => (
                  <tr>
                    <td>{employe.nature}</td>
                    <td>{employe.heure}</td>
                  </tr>
                ))
              ) : (
                <div className="flex d-flex justify-center" >
                <span className="mt-2" >Pas de données </span> 
                <span> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                <defs><linearGradient id="WfBjD8wXt2KfE55Kb1ztea_cjUb4tRvBCNt_gr1" x1="24.003" x2="24.003" y1="7" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f85e55"></stop><stop offset="1" stop-color="#d41414"></stop></linearGradient><linearGradient id="WfBjD8wXt2KfE55Kb1zteb_cjUb4tRvBCNt_gr2" x1="23.5" x2="23.5" y1="34" y2="43" xlinkHref="#WfBjD8wXt2KfE55Kb1ztea"></linearGradient></defs><g data-name="punctuation"><path fill="url(#WfBjD8wXt2KfE55Kb1ztea_cjUb4tRvBCNt_gr1)" d="M21,32a1.006,1.006,0,0,1-1-1.013c.013-2.7.1-3.788.641-5.1a11.527,11.527,0,0,1,3.117-4.124,13.8,13.8,0,0,0,2.57-2.773A4.048,4.048,0,0,0,27,17a2.706,2.706,0,0,0-3-3c-2.029,0-2.777,1.556-2.97,3.093a1.013,1.013,0,0,1-.994.907H14.008a1.009,1.009,0,0,1-1-1.049c.14-3.972,1.117-5.71,3.02-7.465C17.954,7.709,20.369,7,24,7c3.706,0,6.091.7,7.975,2.354A9.373,9.373,0,0,1,35,16.757a9.122,9.122,0,0,1-.979,4.137,16.237,16.237,0,0,1-3.25,4.116l-1.865,1.775a6.218,6.218,0,0,0-1.871,4.3,1,1,0,0,1-.992.917Z"></path><circle cx="23.5" cy="38.5" r="4.5" fill="url(#WfBjD8wXt2KfE55Kb1zteb_cjUb4tRvBCNt_gr2)"></circle></g>
                </svg></span>
                </div>
              )}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>

      <tr className="flex flex-col flex-no wrap sm:table-row">
        <td className="border-2 border-gray-300 px-4 py-2">
          <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span
              className={`lg:d-none font-bold attribut ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              Date :
            </span>
            <span
              className={`${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              {data.date}
            </span>
          </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
          <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span
              className={`lg:d-none font-bold attribut ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              Prénom :
            </span>
            <span
              className={`${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              {data.employe.prenom}
            </span>
          </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
          <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span
              className={`lg:d-none font-bold attribut ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              Nom :
            </span>{" "}
            <span
              className={`${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              {data.employe.nom}
            </span>
          </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
          <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span
              className={`lg:d-none font-bold attribut ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              Email :
            </span>
            <span
              className={`${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              {data.employe.email}
            </span>
          </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
          <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span
              className={`lg:d-none font-bold attribut ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              Role :
            </span>{" "}
            <span
              className={`${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              {data.employe.role}
            </span>
          </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
          <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span
              className={`lg:d-none font-bold attribut ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              Heure d'arrivé :
            </span>
            <span
              className={`${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              {data.heure_arrivée}
            </span>
          </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
          <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span
              className={`lg:d-none font-bold attribut ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              Heure de sortie :
            </span>
            <div
              className={`flex ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              {data.heure_sortie}
              <span
                className=" ml-3 cursor-pointer"
                /* onClick={handleShow}   */ onClick={() =>
                  handleShow(data.employe.email, data.date)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                </svg>
              </span>
            </div>
          </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
          <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span
              className={`lg:d-none font-bold attribut ${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              Retard :
            </span>
            <span
              className={`${
                localStorage.getItem("night") ? "text-color-moon" : ""
              }`}
            >
              {data.etat_retard}
            </span>
          </div>
        </td>
        <tr className="forMediaGap" />
      </tr>

      {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Heures d'entrées et de sorties</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
    </Modal> */}
    </>
  );
};

export default HistoryItem;
