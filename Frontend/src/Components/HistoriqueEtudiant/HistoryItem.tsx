/* Définition des types des props du composant HistoryItem */
type HistoryItemProps = {
    data: any
}

/* Composant HistoryItem qui représente un élément du tableau historique */
const HistoryItem: React.FC<HistoryItemProps> = ({data}: HistoryItemProps) => {
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
                <span>{data.etudiant.prenom}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span>{data.etudiant.nom}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span>{data.etudiant.email}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            {data.etat_presence === "Absent(e)" &&
            <div className="flex justify-center gap-2 items-center bg-red-500 text-white">
                <span className=" py-1">{data.etat_presence}</span>
            </div>}
            {data.etat_presence === "Présent(e)" &&
            <div className="flex justify-center gap-2 items-center text-white bg-emerald-500">
                <span className=" py-1">{data.etat_presence}</span>
            </div>}
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span>{data.etat_retard}</span>
            </div>
        </td>
    </tr>
  )
}

export default HistoryItem