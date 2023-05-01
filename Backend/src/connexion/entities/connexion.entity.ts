import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employes {
  @PrimaryGeneratedColumn()
  id_employe: number;

  @Column({ unique: true })
  email: string;

  @Column()
  mot_de_passe: string;

  @Column()
  role: string;

  @Column()
  etat: number;
}
