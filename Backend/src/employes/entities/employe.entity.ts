import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PresenceEmploye } from "src/presence_employes/entities/presence_employe.entity";
@Entity()
export class Employes {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({ type: 'text'})
  image: string;

  @Column()
  date_inscription: Date;

  @Column({ default: true })
  etat: boolean;

  /* @OneToMany(() => PresenceEmploye, (presence) => presence.employe)
  employes: Employes[]; */
}
