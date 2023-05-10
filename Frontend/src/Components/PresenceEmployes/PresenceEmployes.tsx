import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Etudiant } from "../../Models/etudiant";
import NoResult from '../HistoriqueEtudiant/NoResult';
import Pagination from '../HistoriqueEtudiant/Pagination';
import PresenceItem from './PresenceItem';

/* Composant Historique */
export function PresenceEmployes() {

    /* Stockage des données de l'historique dans une variable d'état */
    const [data, setData] = useState<Etudiant[]>();

    /* Variable d'état pour vérifier si la recherche a eu un résultat ou non */
    const [hasResult, setHasResult] = useState<boolean>(true);

    /* Fonction de recherche par date */
    const search = (e: any) => {
        /* const value = e.target.value;
        if (value === "") {
            setData(etudiant_history);
            return;
        }
        const result = etudiant_history.filter((item) => {
            return item.nom.toLowerCase().includes(value.toLowerCase());
        });
        setHasResult(result.length > 0); 
        setData(result); */
    }

    return (
        <div className="flex justify-center w-4/5 px-5 py-1 flex-col bg-white drop-shadow-lg text-center border" style={{ marginLeft: '10%' }}>
            <div className='flex justify-start text-xl font-medium mt-4 space-x-2' style={{ color: '#81CCB7' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <Link to={"presenceEmploye"}>
                    <span className='underline'> Liste présence </span>
                </Link>
                <Link to={"../historiqueEmploye"}>
                    <span> Historiques </span>
                </Link>
            </div>
            <div className="flex justify-end">
                <div className='border py-2 px-1 text-white rounded-l-md' style={{ backgroundColor: '#81CCB7' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <input type="text" placeholder='Rechercher un nom' onChange={(e) => search(e)} className="border-2 border-gray-300 rounded-r-md p-2 w-56" />
            </div>
            <Table striped className='mt-3'>
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-2 border-gray-300">Date</th>
                        <th className="px-4 py-2 border-2 border-gray-300">Heure</th>
                        <th className="px-4 py-2 border-2 border-gray-300">Prenom</th>
                        <th className="px-4 py-2 border-2 border-gray-300">Nom</th>
                        <th className="px-4 py-2 border-2 border-gray-300">Email</th>
                        <th className="px-4 py-2 border-2 border-gray-300">Etat</th>
                        <th className="px-4 py-2 border-2 border-gray-300">Retard</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </div>
    );
}