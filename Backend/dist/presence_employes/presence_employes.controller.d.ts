import { PresenceEmployesService } from './presence_employes.service';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
export declare class PresenceEmployesController {
    private readonly presenceEmployesService;
    constructor(presenceEmployesService: PresenceEmployesService);
    findAll(): Promise<PresenceEmploye[]>;
    findOne(id: string): Promise<PresenceEmploye>;
    update(id: string, updatePresenceEmployeDto: UpdatePresenceEmployeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
