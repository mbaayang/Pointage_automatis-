import { Employe } from "../../Models/employe"

/* Définition des types des props du composant HistoryItem */
type HistoryItemProps = {
    data: Employe
}

/* Composant HistoryItem qui représente un élément du tableau historique */
const HistoryItem: React.FC<HistoryItemProps> = ({data}: HistoryItemProps) => {
  return (
    <tr>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span>{data.date_inscription}</span>
            </div>
        </td>
        {/* <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span>{data.heure}</span>
            </div>
        </td> */}
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
            <div className="flex justify-center items-center gap-2">
                <span>{data.role}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            {data.etat_presence === "Absent" &&
            <div className="flex justify-center items-center gap-2 bg-red-500 text-white">
                <span>{data.etat_presence}</span>
            </div>}
            {data.etat_presence === "Présent" &&
            <div className="flex justify-center items-center gap-2 text-white" style={{backgroundColor:'#81CCB7'}}>
                <span>{data.etat_presence}</span>
            </div>}
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span>{data.retard}</span>
            </div>
        </td>
    </tr>
  )
}

export default HistoryItem