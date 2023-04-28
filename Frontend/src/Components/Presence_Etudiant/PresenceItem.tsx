import './PresenceEtudiant.css'
import { useState } from "react";
import { Etudiant } from "../../fake_api/historique"
import Form from 'react-bootstrap/Form';

/* Définition des types des props du composant PresenceItem */
type PresenceItemProps = {
    data: Etudiant
}

/* Composant PresenceItem qui représente un élément du tableau historique */
const PresenceItem: React.FC<PresenceItemProps> = ({ data }: PresenceItemProps) => {

    const [etat, setEtat] = useState<string>('1')
    let selectStyle =  ''

    if (etat === '1') {
        selectStyle = 'bg-yellow-500 text-white'
    }

    if (etat === '2') {
        selectStyle = 'vert'
    }

    if (etat === '3') {
        selectStyle = 'bg-red-500 text-white'
    }


    return (
        <tr>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{data.date}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{data.heure}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{data.prenom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{data.nom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{data.email}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <Form.Select aria-label="Default select example" className={`border-none ${selectStyle}`}
                    onChange={(event) => setEtat(event.target.value)}>
                    <option selected value="1" className=" text-white">En attente</option>
                    <option value="2"  className=" text-white">Présent</option>
                    <option value="3" className=" text-white">Absent</option>
                </Form.Select>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span>{data.retard}</span>
                </div>
            </td>
        </tr>
    )
}

export default PresenceItem