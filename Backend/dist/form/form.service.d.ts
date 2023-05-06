import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
export declare class FormService {
    create(createFormDto: CreateFormDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFormDto: UpdateFormDto): string;
    remove(id: number): string;
}
