import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employes {
  @PrimaryGeneratedColumn()
  id_employe: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  etat: number;
}
