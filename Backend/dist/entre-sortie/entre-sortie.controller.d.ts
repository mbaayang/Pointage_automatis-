import { EntreSortieService } from './entre-sortie.service';
import { CreateEntreSortieDto } from './dto/create-entre-sortie.dto';
import { UpdateEntreSortieDto } from './dto/update-entre-sortie.dto';
export declare class EntreSortieController {
    private readonly entreSortieService;
    constructor(entreSortieService: EntreSortieService);
    create(createEntreSortieDto: CreateEntreSortieDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEntreSortieDto: UpdateEntreSortieDto): string;
    remove(id: string): string;
}
