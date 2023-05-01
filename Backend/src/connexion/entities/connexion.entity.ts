import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employess {
  @PrimaryGeneratedColumn()
  id_employe: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
