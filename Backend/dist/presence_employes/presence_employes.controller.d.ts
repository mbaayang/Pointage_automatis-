import { PresenceEmployesService } from './presence_employes.service';
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
export declare class PresenceEmployesController {
    private readonly presenceEmployesService;
    constructor(presenceEmployesService: PresenceEmployesService);
<<<<<<< HEAD
    create(createPresenceEmployeDto: CreatePresenceEmployeDto, res: any): Promise<any>;
    findAll(): string;
    findOne(id: string): Promise<PresenceEmploye>;
    update(id: string, updatePresenceEmployeDto: UpdatePresenceEmployeDto): Promise<import("typeorm").UpdateResult>;
=======
    create(createPresenceEmployeDto: CreatePresenceEmployeDto): string;
    findAll(): Promise<import("./entities/presence_employe.entity").PresenceEmploye[]>;
    findOne(id: string): string;
    update(id: string, updatePresenceEmployeDto: UpdatePresenceEmployeDto): string;
>>>>>>> e9693c633b446b4ca757f22da9186212c43c0512
    remove(id: string): string;
    login(user: PresenceEmploye): Promise<{}>;
}
