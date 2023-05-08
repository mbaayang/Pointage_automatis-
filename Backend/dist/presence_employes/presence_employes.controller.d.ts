import { PresenceEmployesService } from './presence_employes.service';
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
export declare class PresenceEmployesController {
    private readonly presenceEmployesService;
    constructor(presenceEmployesService: PresenceEmployesService);
    create(createPresenceEmployeDto: CreatePresenceEmployeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePresenceEmployeDto: UpdatePresenceEmployeDto): string;
    remove(id: string): string;
}
