import { PresenceEmployesService } from './presence_employes.service';
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
export declare class PresenceEmployesController {
    private readonly presenceEmployesService;
    constructor(presenceEmployesService: PresenceEmployesService);
    create(createPresenceEmployeDto: CreatePresenceEmployeDto, res: any): Promise<any>;
    findAll(): Promise<PresenceEmploye[]>;
    findOne(id: string): Promise<PresenceEmploye>;
    update(id: string, updatePresenceEmployeDto: UpdatePresenceEmployeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
    login(user: PresenceEmploye): Promise<{}>;
}
