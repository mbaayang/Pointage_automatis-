import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
import { Repository } from 'typeorm';
export declare class PresenceEmployesService {
    private presenceEmployeRepository;
    constructor(presenceEmployeRepository: Repository<PresenceEmploye>);
    create(createPresenceEmployeDto: CreatePresenceEmployeDto): string;
    findAll(): Promise<PresenceEmploye[]>;
    findOne(id: number): string;
    update(id: number, updatePresenceEmployeDto: UpdatePresenceEmployeDto): string;
    remove(id: number): string;
}
