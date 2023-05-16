import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PresenceEmploye } from "src/presence_employes/entities/presence_employe.entity";
@Entity()
export class Employes {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({ default: false })
  pointage: boolean;

  @Column({ default: "" })
  secretKey: string;

  

  /* @OneToMany(() => PresenceEmploye, (presence) => presence.employe)
  employes: Employes[]; */
}
