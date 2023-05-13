import './PresenceEtudiant.css'
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


/* Définition des types des props du composant PresenceItem */
type PresenceItemProps = {
    presence: any
}
/* Composant PresenceItem qui représente un élément du tableau historique */
const PresenceItem: React.FC<PresenceItemProps> = ({ presence }: PresenceItemProps) => {
  
    let yellow = 'bg-yellow-500 text-white'
    let red = 'bg-red-500 text-white'
    let green = 'bg-emerald-500 text-white'

    const [etatPresence, setEtatPresence] = useState(presence.etat_presence);
    const [statutPresence, setStatutPresence] = useState(presence.statut);

    const updateEtatPresence = (id: number, newEtatPresence: string) => {
        fetch(`http://localhost:3000/presence-etudiants/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                etat_presence: newEtatPresence
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };    

    const updatePresence = (id: number, newStatut: number, newEtatPresence:string) => {
        fetch(`http://localhost:3000/presence-etudiants/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                statut: newStatut
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setEtatPresence(newEtatPresence)
            updateEtatPresence(presence.id, newEtatPresence);
        })
        .catch(err => console.log(err))
        console.log(newStatut);
    }

    const present = () => {
        const newEtatPresence = 'Présent(e)';
        updatePresence(presence.id, 2, newEtatPresence);
        setStatutPresence(2);
        setEtatPresence(newEtatPresence);
    }
    const absent = () => {
        const newEtatPresence = 'Absent(e)';
        updatePresence(presence.id, 0, newEtatPresence);
        setStatutPresence(0);
        setEtatPresence(newEtatPresence);
    }
    const enAttente = () => {
        const newEtatPresence = 'En attente';
        updatePresence(presence.id, 1, newEtatPresence);
        setStatutPresence(1);
        setEtatPresence(newEtatPresence);
    }

    return (
        <tr>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.date}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.heure}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.etudiant.prenom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.etudiant.nom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.etudiant.email}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className='flex justify-center items-center space-x-2'>
                    <DropdownButton variant='outline-dark' className='w-8' id="" title="">
                    <Dropdown.Item onClick={enAttente} as="button" className= {`${yellow} text-center`}> En attente </Dropdown.Item>
                    <Dropdown.Item onClick={present} as="button" className= {`${green} text-center`}> Présent(e) </Dropdown.Item>
                    <Dropdown.Item onClick={absent} as="button" className={`${red} text-center`}> Absent(e) </Dropdown.Item>
                    </DropdownButton>
                    
                    {statutPresence == 1 && <span className={`${yellow} border-none px-3 py-2`}>En attente</span>}
                    {statutPresence == 2 && <span className={`${green} border-none px-3 py-2`}>Présent(e)</span>}
                    {statutPresence == 0 && <span className={`${red} border-none px-3 py-2`}>Absent(e)</span>}
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.etat_retard}</span>
                </div>
            </td>
        </tr>
        
    )
}

export default PresenceItem