
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
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.date}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.prenom}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.nom}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.email}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.role}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.heure_arrivée}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.heure_sortie}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex justify-center items-center gap-2">
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.etat_retard}</span>
            </div>
        </td>
    </tr>
  )
}

export default HistoryItem