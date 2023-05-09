import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 
export class Etudiant{
    @PrimaryGeneratedColumn()
    id: number;

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

    @Column({type: 'longtext'})
    photo: string;

/*     @Column() 
    etat: string; */

    @Column()
    date_inscription: string;
}
