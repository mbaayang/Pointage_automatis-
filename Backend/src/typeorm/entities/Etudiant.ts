import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'etudiants'})
export class Etudiant{
    @PrimaryGeneratedColumn()
    id_etudiant: number;

    @Column()
    prenom: string;

    @Column()
    nom: string;

    @Column()
    email: string;

    @Column()
    matricule: string;

    @Column()
    niveau: string;

    @Column()
    photo: string;

/*     @Column()
    etat: string; */

    @Column()
    date_inscription: string;
}