
/* Définition des types des props du composant HistoryItem */
type HistoryItemProps = {
    data: any
}

/* Composant HistoryItem qui représente un élément du tableau historique */
const HistoryItem: React.FC<HistoryItemProps> = ({data}: HistoryItemProps) => {
  return (
    <tr className='flex flex-col flex-no wrap sm:table-row'>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className="lg:d-none font-bold attribut">Date :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.date}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className="lg:d-none font-bold attribut">Prénom :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.prenom}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className="lg:d-none font-bold attribut">Nom :</span> <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.nom}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className="lg:d-none font-bold attribut">Email :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.email}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                   <span className="lg:d-none font-bold attribut">Role :</span> <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.employe.role}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className="lg:d-none font-bold attribut">Heure d'arrivé :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.heure_arrivée}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className="lg:d-none font-bold attribut">Heure de sortie :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.heure_sortie}</span>
            </div>
        </td>
        <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
            <span className="lg:d-none font-bold attribut">Retard :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{data.etat_retard}</span>
            </div>
        </td>
        <tr className='forMediaGap' />
    </tr>
  )
}

export default HistoryItem