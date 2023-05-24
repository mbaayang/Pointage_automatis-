import { Employes } from "src/employes/entities/employe.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EntreSortie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    heure: string;

    @Column()
    nature: string;

    @Column({ nullable: true })
    email: string;

    @JoinColumn()
    @ManyToOne(type => Employes)
    employe: number;
}
