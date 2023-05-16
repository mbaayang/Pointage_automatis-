import './PresenceEmployes.css'
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
    return (
        <tr>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.date}</span>
                </div>
            </td>
            {/* <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.heure}</span>
                </div>
            </td> */}
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.employe.prenom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.employe.nom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.employe.email}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <span>{presence.heure_arrivée}</span>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{presence.heure_sortie}</span>
                </div>
            </td>
        </tr>
    )
}

export default PresenceItem