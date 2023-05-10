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

  /* toute l'historique est stockée dans la variable d'état data, mais pour la pagination, on ne veut afficher que 7 éléments à la fois, donc on crée une variable d'état pour stocker les 5 éléments à afficher */
  const [currentItems, setCurrentItems] = useState<Etudiant[]>([]);

  /* Variable d'état pour gèrer la page courante */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(7);
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
      setCurrentItems(data.slice(0, itemsPerPage));
      setHasResult(true);
      return;
    }
    const dateSearch = new Date(e.target.value);

    const result = data.filter((item) => {
      const date = new Date(item.date_inscription);
      return date.getFullYear() === dateSearch.getFullYear() && date.getMonth() + 1 === dateSearch.getMonth() + 1 && date.getDate() === dateSearch.getDate();
    });

    if (result.length > 0) {
      setHasResult(true);
      setCurrentItems(result);
    } else {
      setHasResult(false);
      setCurrentItems([]);
    }
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
        const etudiants = data.filter((item) => { return item.niveau == localStorage.getItem("annee") }).map((item) => {
          return {
            ...item,
          };
        });
        setData(etudiants);
        setTotalItems(etudiants.length);
        setCurrentItems(etudiants.slice(0, itemsPerPage));
      });
    });
  }, []);


  return (
    <div className="flex w-4/5 px-5 py-1 flex-col bg-white drop-shadow-lg text-center border"
      style={{ marginLeft: "10%", height: "600px" }}>
      <div className="flex justify-start text-xl font-medium mt-4 space-x-2" style={{ color: "#81CCB7" }} >
        <svg fill="#81CCB7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px" height="30px"><path d="M 66 16 A 2 2 0 0 0 66 20 A 44 44 0 1 1 22 65.480469 L 30.720703 71.820312 A 2.0012559 2.0012559 0 0 0 33.070312 68.580078 L 20.410156 59.380859 A 2 2 0 0 0 17.609375 59.820312 L 8.4492188 72.480469 A 2 2 0 0 0 8.890625 75.279297 A 2 2 0 0 0 10.060547 75.660156 A 2 2 0 0 0 11.679688 74.830078 L 18.050781 66.070312 A 48 48 0 1 0 66 16 z M 54.083984 17.560547 A 2 2 0 0 0 54.060547 21.560547 A 1.85 1.85 0 0 0 54.580078 21.5 A 2 2 0 0 0 54.083984 17.560547 z M 42.992188 22.128906 A 2 2 0 0 0 42 22.439453 A 2 2 0 0 0 43 26.169922 A 2 2 0 0 0 44 25.900391 A 2 2 0 0 0 42.992188 22.128906 z M 65.941406 28 A 2 2 0 0 0 64 30 L 64 64 A 2 2 0 0 0 65 65.759766 L 87 77.759766 A 2.07 2.07 0 0 0 88 78 A 2 2 0 0 0 89 74.240234 L 68 62.810547 L 68 30 A 2 2 0 0 0 65.941406 28 z M 33.539062 29.482422 A 2 2 0 0 0 32.050781 32.900391 A 2 2 0 0 0 33.460938 33.480469 A 2 2 0 0 0 33.539062 29.482422 z M 26.009766 38.958984 A 2 2 0 0 0 25.150391 42.730469 A 1.93 1.93 0 0 0 26.150391 43 A 2 2 0 0 0 27.150391 39.269531 A 2 2 0 0 0 26.009766 38.958984 z M 21.537109 50.060547 A 2 2 0 0 0 21 54 A 2.31 2.31 0 0 0 21.519531 54.060547 A 2 2 0 0 0 21.537109 50.060547 z" /></svg>
        <Link to={"../presenceEtudiant"} >
          <span> Liste présence </span>
        </Link>
        <Link to={"historiqueEtudiant"} >
          <span className="underline"> Historiques </span>
        </Link>
      </div>
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
