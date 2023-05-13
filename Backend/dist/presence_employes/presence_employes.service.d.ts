import { Repository } from "typeorm";
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
<<<<<<< HEAD
export declare class PresenceEmployesService {
    private presenceRepository;
    constructor(presenceRepository: Repository<PresenceEmploye>);
    checkDateExists(date: string): Promise<boolean>;
    checkEmailExists(email: string): Promise<boolean>;
    create(createPresenceEmployeDto: CreatePresenceEmployeDto): Promise<PresenceEmploye>;
    findAll(): string;
    findOne(email: string): Promise<PresenceEmploye>;
    update(id: number, updatePresenceEmployeDto: UpdatePresenceEmployeDto): Promise<import("typeorm").UpdateResult>;
=======
import { Repository } from 'typeorm';
export declare class PresenceEmployesService {
    private presenceEmployeRepository;
    constructor(presenceEmployeRepository: Repository<PresenceEmploye>);
    create(createPresenceEmployeDto: CreatePresenceEmployeDto): string;
    findAll(): Promise<PresenceEmploye[]>;
    findOne(id: number): string;
    update(id: number, updatePresenceEmployeDto: UpdatePresenceEmployeDto): string;
>>>>>>> e9693c633b446b4ca757f22da9186212c43c0512
    remove(id: number): string;
    validateUser(email: string): Promise<PresenceEmploye | null>;
    login(user: PresenceEmploye): Promise<{
        id: number;
        email: string;
    }>;
}
