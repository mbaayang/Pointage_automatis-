import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Employes {
  @PrimaryGeneratedColumn()
  id_employe: number;

  @Column()
  prenom: string;

  @Column()
  nom: string;

  @Column()
  email: string;

  @Column()
  mot_de_passe: string;
  

  @Column()
  matricule: string;

  @Column()
  role: string;

  /* @Column()
  photo: string; */

  /* @Column()
  date_inscription: Date; */

  @Column({ default: true })
  etat: boolean;
}
