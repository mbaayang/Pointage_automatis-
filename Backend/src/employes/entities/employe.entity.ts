import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employes"})
export class Employes {
  @PrimaryGeneratedColumn()
  id_employe: number;

  @Column()
  prenom: string;

  @Column()
  nom: string;

  @Column({unique: true})
  email: string;

  @Column()
  mot_de_passe: string;
  

  @Column({unique: true})
  matricule: string;

  @Column()
  role: string;

  @Column()
  image: string;

  @Column()
  date_inscription: string;

  @Column({ default: true })
  etat: boolean;
}
