import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
import { Repository } from 'typeorm';
export declare class PresenceEmployesService {
    private presenceRepository;
    constructor(presenceRepository: Repository<PresenceEmploye>);
    findAll(): Promise<PresenceEmploye[]>;
    findOne(email: string): Promise<PresenceEmploye>;
    update(id: number, updatePresenceEmployeDto: UpdatePresenceEmployeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
