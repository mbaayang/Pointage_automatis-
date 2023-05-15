import './PresenceEmployes.css'

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
                    <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`} >{presence.date}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.heure}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.employe.prenom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.employe.nom}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.employe.email}</span>
                </div>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.heure_arrive}</span>
            </td>
            <td className="border-2 border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                    <span className={`${localStorage.getItem("night") ? "text-color-moon" : ""}`}>{presence.heure_sortie}</span>
                </div>
            </td>
        </tr>
    )
}

export default PresenceItem