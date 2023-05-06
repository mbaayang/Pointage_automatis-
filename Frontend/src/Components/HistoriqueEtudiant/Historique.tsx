import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Etudiant } from "../../Models/etudiant";
import NoResult from "./NoResult";
import Pagination from "./Pagination";
import HistoryItem from "./HistoryItem";

/* Composant Historique */
export function HistoriqueEtudiant() {
  /* Stockage des données de l'historique dans une variable d'état */
  const [data, setData] = useState<Etudiant[]>([]);

  /* toute l'historique est stockée dans la variable d'état data, mais pour la pagination, on ne veut afficher que 5 éléments à la fois, donc on crée une variable d'état pour stocker les 5 éléments à afficher */
  const [currentItems, setCurrentItems] = useState<Etudiant[]>([]);

  /* Variable d'état pour gèrer la page courante */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);
  const [totalItems, setTotalItems] = useState<number>(0);
 
  /* Fonction de pagination */ 
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const indexOfLastItem = pageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
}

/* Variable d'état pour gèrer le mode recherche */
const [searchMode, setSearchMode] = useState<boolean>(false);


/* Variable d'état pour vérifier si la recherche a eu un résultat ou non */
const [hasResult, setHasResult] = useState<boolean>(true);

/* Fonction de recherche par date */
const search = (e: any) => {
    setSearchMode(true);

    if (e.target.value === "") {
        setSearchMode(false); 
        paginate(1);
        return;
    }  
    const dateSearch = new Date(e.target.value);
    
    const result = data.filter((item) => {
        const date =  new Date(item.date_inscription);
        return date.getFullYear() === dateSearch.getFullYear() && date.getMonth() + 1 === dateSearch.getMonth() + 1 && date.getDate() === dateSearch.getDate();
     });
    setHasResult(result.length > 0); 
    setCurrentItems(result);
}

useEffect(() => {
  /* Récupération des données de l'historique */
  fetch("http://localhost:3000/etudiant", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      },
      }).then((response) => {
        response.json().then((data: Etudiant[]) => {
          console.log(data);
          const etudiants = data.map((item) => {
            return {
              ...item,
              //date_inscription: new Date(item.date_inscription),
            };
        });
        setData(etudiants);
        setTotalItems(etudiants.length);
        setCurrentItems(etudiants.slice(0, itemsPerPage));
      });
    });
    paginate(1);  
    }, []); 
          

  return (
    <div
      className="flex justify-center w-4/5 px-5 py-1 flex-col bg-white drop-shadow-lg text-center border"
      style={{ marginLeft: "10%" }}
    >
      <Link
        to={"../presenceEtudiant"}
        className="flex justify-start text-xl font-medium mt-4 space-x-2"
        style={{ color: "#81CCB7" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span>Liste présence :</span>
      </Link>
      <div className="flex justify-end">
        <input
          type="date"
          onChange={(e) => search(e)}
          className="border-2 border-gray-300 rounded-md p-2 w-60"
        />
      </div>
      <Table striped className="mt-3">
        <thead>
          <tr>
            <th className="px-4 py-2 border-2 border-gray-300">Date</th>
            {/* <th className="px-4 py-2 border-2 border-gray-300">Heure</th> */}
            <th className="px-4 py-2 border-2 border-gray-300">Prenom</th>
            <th className="px-4 py-2 border-2 border-gray-300">Nom</th>
            <th className="px-4 py-2 border-2 border-gray-300">Email</th>
            <th className="px-4 py-2 border-2 border-gray-300">Etat</th>
            <th className="px-4 py-2 border-2 border-gray-300">Retard</th>
          </tr>
        </thead>
        <tbody>
        {hasResult && currentItems.map((item, index) => (
            <HistoryItem data={item} key={index} />
        ))}
        {!hasResult && 
            <NoResult />
        }
        </tbody>
      </Table>
      {!searchMode && hasResult && <Pagination
        paginate={paginate}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}  
      />}
    </div>
  );
}
