import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import NoResult from '../HistoriqueEmploye/NoResult';
import Pagination from '../HistoriqueEmploye/Pagination';
import PresenceItem from './PresenceItem';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/* Composant Historique */
export function PresenceEmployes() {
  const [chargement, setChargement] = useState(false)
  /* Stockage des données de l'historique dans une variable d'état */
  const [presence, setPresence] = useState<any>();

  const [currentItems, setCurrentItems] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skeleton, setSkeleton] = useState<any>(["", "", "", "", "", ""]);

  /* Variable d'état pour gèrer la page courante */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6);
  const [totalItems, setTotalItems] = useState<number>(0);

  /* Fonction de pagination */
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const indexOfLastItem = pageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = presence.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
  }

  /* Variable d'état pour gèrer le mode recherche */
  const [searchMode, setSearchMode] = useState<boolean>(false);


  /* Variable d'état pour vérifier si la recherche a eu un résultat ou non */
  const [hasResult, setHasResult] = useState<boolean>(true);

  /********************************************************************************
*************************PENDANT LE CHARGEMENT DE LA PAGE*************************
*******************************************************************************/
  useEffect(() => {
    setChargement(false);
    setTimeout(() => {
      setChargement(true);
    }, 500);
  }, []);
  /* Fonction de recherche par nom */
  const search = (e: any) => {
    setSearchMode(true);
    const value = e.target.value;
    if (value === "") {
      setSearchMode(false);
      setCurrentItems(presence.slice(0, itemsPerPage));
      setHasResult(true);
      return;
    }
    const result = presence.filter((item: any) => {
      return item.employe.email.toLowerCase().includes(value.toLowerCase());
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
    fetch("http://localhost:3000/presence-employes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((res) => {
        const currentDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
        const employes = res.filter((item: any) => { return item.date == currentDate }).map((item: any) => {
          return {
            ...item,
          };
        });
        setPresence(employes);
        setTotalItems(employes.length);
        setCurrentItems(employes.slice(0, itemsPerPage));
        if (employes.length != 0) {
          setIsLoading(false);
        }
      });
  }, []);

  return (
    <div>
      <div className={` ${!chargement ? "" : "d-none"} `}>
        <div className="text-center " style={{ marginTop: "20%" }}>
          <div role="status" >
            <svg
              aria-hidden="true"
              className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            <span
              className={`${localStorage.getItem("night") ? "text-color-moon" : "text-color"
                }`}
            >
              Loading...
            </span>
          </div>
        </div>
      </div>
      <div className={` xs:w-100 ls:flex lg:w-4/5 lg:px-5 lg:flex-col lg:drop-shadow-lg  lg:text-center lg:border lg:drop-border sm:px-0 box   bg-white ${chargement ? "" : "d-none"} ${localStorage.getItem("night") ? "bg-list-moon" : "bg-white"}`}  >
        <div className='flex lg:justify-start justify-center text-xl  font-medium mt-4 space-x-2 ' style={{ color: '#81CCB7' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-7">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <Link to={"../presenceEmploye"}>
            <span className="lg:underline"> Liste présence </span>
          </Link>
          <Link to={"../historiqueEmploye"}>
            <span> Historiques </span>
          </Link>
        </div>
        <div className="flex lg:justify-end justify-center forSearch">
          <div className='border py-2 px-1 text-white rounded-l-md' style={{ backgroundColor: '#81CCB7' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input type="text" placeholder='Rechercher un email' onChange={(e) => search(e)} className="border-2 border-gray-300 rounded-r-md p-2 w-56" />
        </div>
        <Table  className='mt-3 md:mt-1 overflow-hidden flex-no-wrap tbw '>
          <thead>
            <tr className='desk'>
              <th className={`px-4 py-2 border-2 lg:border-gray-300 ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Date</th>
              <th className={`px-4 py-2 border-2 border-gray-300 ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Prenom</th>
              <th className={`px-4 py-2 border-2 border-gray-300 ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Nom</th>
              <th className={`px-4 py-2 border-2 border-gray-300 ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Email</th>
              <th className={`px-4 py-2 border-2 border-gray-300 ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Heure d'arrivé</th>
              <th className={`px-4 py-2 border-2 border-gray-300 ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Heure de sortie</th>
              <th className={`px-4 py-2 border-2 border-gray-300 ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Retard</th>
            </tr>
          </thead>
          {isLoading && skeleton

            .map(() => (
              <tr className='flex flex-col flex-no wrap sm:table-row'>
                <td>
                  <p>
                    <Skeleton height={30} />
                  </p>
                </td>
                <td>
                  <p>
                    <Skeleton height={30} />
                  </p>
                </td>
                <td>
                  <p>
                    <Skeleton height={30} />
                  </p>
                </td>
                <td>
                  <p>
                    <Skeleton height={30} />
                  </p>
                </td>
                <td>
                  <p>
                    <Skeleton height={30} />
                  </p>
                </td>
                <td>
                  <p>
                    <Skeleton height={30} />
                  </p>
                </td>
                <td>
                  <p>
                    <Skeleton height={30} />
                  </p>
                </td>

              </tr>
            ))}
          <tbody>
            {!isLoading && hasResult && currentItems.map((item, index) => (
              <PresenceItem presence={item} key={index} />
            ))}
            {!hasResult && !isLoading &&
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
    </div>
  );
}