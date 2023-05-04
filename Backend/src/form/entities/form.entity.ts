import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Form {
    @PrimaryGeneratedColumn()
    id_image: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  image_filename: string;
}
