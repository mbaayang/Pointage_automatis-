import { CreateEntreSortieDto } from './dto/create-entre-sortie.dto';
import { UpdateEntreSortieDto } from './dto/update-entre-sortie.dto';
export declare class EntreSortieService {
    create(createEntreSortieDto: CreateEntreSortieDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEntreSortieDto: UpdateEntreSortieDto): string;
    remove(id: number): string;
}
