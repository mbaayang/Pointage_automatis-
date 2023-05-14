import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
import { Repository } from 'typeorm';
export declare class PresenceEmployesService {
    private presenceRepository;
    constructor(presenceRepository: Repository<PresenceEmploye>);
    checkDateExists(date: string): Promise<boolean>;
    checkEmailExists(email: string): Promise<boolean>;
    create(createPresenceEmployeDto: CreatePresenceEmployeDto): Promise<PresenceEmploye>;
    findAll(): Promise<PresenceEmploye[]>;
    findOne(email: string): Promise<PresenceEmploye>;
    update(id: number, updatePresenceEmployeDto: UpdatePresenceEmployeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
    validateUser(email: string): Promise<PresenceEmploye | null>;
    login(user: PresenceEmploye): Promise<{
        id: number;
        email: string;
    }>;
}
