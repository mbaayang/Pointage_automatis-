import { CreateEntreSortieDto } from './dto/create-entre-sortie.dto';
import { UpdateEntreSortieDto } from './dto/update-entre-sortie.dto';
import { EntreSortie } from './entities/entre-sortie.entity';
import { Repository } from 'typeorm';
export declare class EntreSortieService {
    private entreSortieRepository;
    constructor(entreSortieRepository: Repository<EntreSortie>);
    create(createEntreSortieDto: CreateEntreSortieDto): string;
    findAll(): Promise<EntreSortie[]>;
    findOne(id: number): string;
    update(id: number, updateEntreSortieDto: UpdateEntreSortieDto): string;
    remove(id: number): string;
}
