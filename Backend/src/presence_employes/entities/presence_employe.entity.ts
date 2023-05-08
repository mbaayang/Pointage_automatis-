import { Employes } from 'src/employes/entities/employe.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class PresenceEmploye {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    heure: string;

    @Column()
    etat_presence: string;

    @Column()
    etat_retard: string;

    @JoinColumn()
    @ManyToOne(type => Employes)
    employe: number;

    /* @ManyToOne(() => Employes, (employe) => employe.employes)
    employe: Employes; */
}
