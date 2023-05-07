import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
export declare class PresenceEmployesService {
    create(createPresenceEmployeDto: CreatePresenceEmployeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePresenceEmployeDto: UpdatePresenceEmployeDto): string;
    remove(id: number): string;
}
