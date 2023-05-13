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

<<<<<<< HEAD
    @Column({ default: true })
    etat: boolean;
=======
>>>>>>> e9693c633b446b4ca757f22da9186212c43c0512

    @Column()
    date_inscription: string;

    @Column({ default: true })
    etat: boolean;
}
