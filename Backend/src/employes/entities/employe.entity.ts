import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employes"})
export class Employes {
  @PrimaryGeneratedColumn()
  id_employe: number;

  @Column()
  prenom1: string;

  @Column()
  nom1: string;

  @Column({unique: true})
  email1: string;

  @Column()
  mot_de_passe: string;
  

  @Column({unique: true})
  matricule1: string;

  @Column()
  role: string;

  @Column()
  image: string;

  @Column()
  date_inscription: string;

  @Column({ default: true })
  etat: boolean;
}
