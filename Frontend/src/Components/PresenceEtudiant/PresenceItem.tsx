import './PresenceEtudiant.css'
import { useState } from "react";
import { Button } from 'react-bootstrap';
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

    const [showYellow, setShowYellow] = useState<boolean>(true);
    const [showRed, setShowRed] = useState<boolean>(false);
    const [showGreen, setShowGreen] = useState<boolean>(false);

    const present = () => {
        setShowYellow(false);
        setShowRed(false);
        setShowGreen(true);
    }
    const absent = () => {
        setShowYellow(false);
        setShowRed(true);
        setShowGreen(false);
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
                <div className='flex justify-center space-x-2'>
                    <DropdownButton variant='outline-dark' className='w-8' id="" title="">
                    <Dropdown.Item as="button" className= {`${yellow}`}> En attente </Dropdown.Item>
                    <Dropdown.Item onClick={present} as="button" className= {`${green}`}> Présent(e) </Dropdown.Item>
                    <Dropdown.Item onClick={absent} as="button" className={`${red}`}> Absent(e) </Dropdown.Item>
                    </DropdownButton>
                    
                    {showYellow && <Button className={`${yellow} border-none`}>En attente</Button>}
                    {showGreen && <Button className={`${green} border-none`}>Présent(e)</Button>}
                    {showRed && <Button className={`${red} border-none`}>Absent(e)</Button>}
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