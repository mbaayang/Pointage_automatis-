import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

/* Définition des types des props du composant HistoryItem */
type HistoryItemProps = {
    data: any
}

/* Composant HistoryItem qui représente un élément du tableau historique */
const HistoryItem: React.FC<HistoryItemProps> = ({data}: HistoryItemProps) => {
  const [employes, setemploye] = useState<any>();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async(employeId: any) => {
    setShow(true);
    fetch(`http://localhost:3000/entre-sortie/${employeId}`, {
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
        setemploye(res);
        console.log(res);
      }
      );
  };

  return (
    <>
      {/* { employes.map((employe: any) => ( */}
    <Modal show={show} onHide={handleClose}/*  key={employe.employeId} */>
      <Modal.Header closeButton>
        <Modal.Title>Heures d'entrées et de sorties</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
           {/*  <span>{employe.nature}</span> */}
            </div>
            <div className="flex flex-col">
              {/* <span>{employe.heure}</span> */}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
{/*    ))} */}
    <tr className='flex flex-col flex-no wrap sm:table-row'>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Date :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.date}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Prénom :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.prenom}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Nom :</span> <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.nom}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Email :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.email}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                   <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Role :</span> <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.role}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Heure d'arrivé :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.heure_arrivée}</span>
            </div>
        </td>
      <td className="border-2 border-gray-300 px-4 py-2">
        <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
          <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Heure de sortie :</span>
          <div className={`flex ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.heure_sortie}
              <span className=" ml-3 cursor-pointer"  onClick={handleShow}  /* onClick={() => handleShow(employe.employeId)} */>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
              </svg>
            </span>
          </div>
        </div>
      </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Retard :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.etat_retard}</span>
            </div>
        </td>
        <tr className='forMediaGap' />
    </tr>

    {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Heures d'entrées et de sorties</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
    </Modal> */}
    </>
  )
}

export default HistoryItem