import { PresenceEtudiant } from './../../presence_etudiants/entities/presence_etudiant.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()

export class Etudiant {
  /* prenom: string;
  nom: string;
  email: string;
  matricule: string;
  niveau: string;
  photo: string;
  //etat: string;
  date_inscription: string; */

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

  @Column({ type: 'text'})
  photo: string;

  @Column()
  date_inscription: string;

  @Column({ default: true })
  etat: boolean;

  /* @OneToMany(() => PresenceEtudiant, presence => presence.etudiant)
  etudiants: Etudiant[]; */
}
