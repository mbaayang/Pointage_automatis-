export type Etudiant = {
    id: number,
    date: string,
    heure: string,
    prenom: string
    nom: string,
    email: string,
    etat: string,
    retard: string
}

const etudiant_history: Etudiant[] = [
    {
        id: 1,
        date: "2023-04-22",
        heure: "08h02",
        prenom: "Mamadou",
        nom: "Diop",
        email: "diopmamadou@gmail.com",
        etat: "Présent",
        retard: "Non"
    },
    {
        id: 2,
        date: "2023-04-22",
        heure: "08h02",
        prenom: "Mamadou",
        nom: "Diop",
        email: "diopmamadou@gmail.com",
        etat: "Présent",
        retard: "Oui"
    },
    {
        id: 3,
        date: "2023-04-25",
        heure: "08h02",
        prenom: "Mamadou",
        nom: "Diop",
        email: "diopmamadou@gmail.com",
        etat: "Absent",
        retard: "Non"
    },
    {
        id: 4,
        date: "2023-04-23",
        heure: "08h02",
        prenom: "Mamadou",
        nom: "Diop",
        email: "diopmamadou@gmail.com",
        etat: "Présent",
        retard: "Non"
    }
]

export default etudiant_history;