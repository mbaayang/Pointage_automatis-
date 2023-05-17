import { Employes } from 'src/employes/entities/employe.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class PresenceEmploye {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    heure_arrivée: string;

    @Column()
    heure_sortie: string;

    @Column()
    etat_retard: string;

    @Column({ nullable: true })
    email: string;

    @JoinColumn()
    @ManyToOne(type => Employes)
    employe: number;
}