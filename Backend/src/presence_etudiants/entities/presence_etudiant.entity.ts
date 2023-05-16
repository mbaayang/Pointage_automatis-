import { Etudiant } from 'src/etudiant/entities/etudiant.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()

export class PresenceEtudiant {
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

    @Column({ nullable: true })
    email: string;
    
    @Column({default: 1})
    statut: number;

    @JoinColumn()
    @ManyToOne(type => Etudiant)
    etudiant: number;
}
