/* Définition des types des props du composant HistoryItem */
type HistoryItemProps = {
  data: any;
};

/* Composant HistoryItem qui représente un élément du tableau historique */
const HistoryItem: React.FC<HistoryItemProps> = ({
  data,
}: HistoryItemProps) => {
  return (
    <tr className="flex flex-col flex-no wrap sm:table-row">
      <td className="border-2 border-gray-300 px-4 py-2">
        <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
          <span className="lg:d-none font-bold attribut">Date :</span>
          <span
            className={`${
              localStorage.getItem("night") ? "text-color-moon" : ""
            }`}
          >
            {data.date}
          </span>
        </div>
      </td>
      <td className="border-2 border-gray-300 px-4 py-2">
        <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
          <span className="lg:d-none font-bold attribut">Heure :</span>{" "}
          <span
            className={`${
              localStorage.getItem("night") ? "text-color-moon" : ""
            }`}
          >
            {data.heure}
          </span>
        </div>
      </td>
      <td className="border-2 border-gray-300 px-4 py-2">
        <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
          <span className="lg:d-none font-bold attribut">Prénom :</span>{" "}
          <span
            className={`${
              localStorage.getItem("night") ? "text-color-moon" : ""
            }`}
          >
            {data.etudiant.prenom}
          </span>
        </div>
      </td>
      <td className="border-2 border-gray-300 px-4 py-2">
        <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
          <span className="lg:d-none font-bold attribut">Nom :</span>
          <span
            className={`${
              localStorage.getItem("night") ? "text-color-moon" : ""
            }`}
          >
            {data.etudiant.nom}
          </span>
        </div>
      </td>
      <td className="border-2 border-gray-300 px-4 py-2">
        <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
          <span className="lg:d-none font-bold attribut">Email :</span>{" "}
          <span
            className={`${
              localStorage.getItem("night") ? "text-color-moon" : ""
            }`}
          >
            {data.etudiant.email}
          </span>
        </div>
      </td>
      <td className="border-2 border-gray-300 px-4 py-2">
        <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
          <div className="lg:d-none font-bold attribut">Etat :</div>
          {data.etat_presence === "Absent(e)" && (
            <div className="flex justify-center gap-2 items-center bg-red-500 text-white">
              <span className=" py-1 px-3">{data.etat_presence}</span>
            </div>
          )}
          {data.etat_presence === "Présent(e)" && (
            <div className="flex justify-center gap-2 items-center text-white bg-emerald-500">
              <span className=" py-1 px-3">{data.etat_presence}</span>
            </div>
          )}
        </div>
      </td>
      <td className="border-2 border-gray-300 px-4 py-2">
        <div className="flex lg:justify-center justify-between flex-wrap items-center gap-2">
          <span
            className={`${
              localStorage.getItem("night") ? "text-color-moon" : ""
            }`}
          >
            {data.etat_retard}
          </span>
        </div>
      </td>
      <tr className="forMediaGap" />
    </tr>
  );
};

export default HistoryItem;
