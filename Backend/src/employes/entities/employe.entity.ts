import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employes"})
export class Employes {
  @PrimaryGeneratedColumn()
  id_employe: number;

  @Column()
  prenom: string;

  @Column()
  nom: string;

  @Column()
  email: string;

  @Column({type:'text'})
  mot_de_passe: string;

  @Column()
  matricule: string;

  @Column()
  role: string;

  @Column({type: 'longtext'})
  image: string;

  @Column()
  date_inscription: string;

  @Column({ default: true })
  etat: boolean;
}
