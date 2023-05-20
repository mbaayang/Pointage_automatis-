import './PresenceEmployes.css'

/* Définition des types des props du composant PresenceItem */
type PresenceItemProps = {
    presence: any
}

/* Composant PresenceItem qui représente un élément du tableau historique */
const PresenceItem: React.FC<PresenceItemProps> = ({ presence }: PresenceItemProps) => {
    return (
        <tr className='flex flex-col flex-no wrap sm:table-row'>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Date :</span> <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`} > {presence.date}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                     <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Prénom :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.employe.prenom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                     <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Nom :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.employe.nom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2 ">
                <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                     <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Email :</span><span className={` ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.employe.email}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
            <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                 <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Heure d'arrivé :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.heure_arrivée}</span>
            </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                     <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Heure de sortie :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.heure_sortie}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
                     <span className={`lg:d-none font-bold attribut ${localStorage.getItem("night") ? "text-color-moon" : ""}`}>Retard :</span><span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.etat_retard}</span>
                </div>
            </td>
            <tr className='forMediaGap' />
        </tr>
    )
}

export default PresenceItem