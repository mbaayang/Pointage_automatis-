import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
export declare class FormController {
    private readonly formService;
    constructor(formService: FormService);
    create(createFormDto: CreateFormDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFormDto: UpdateFormDto): string;
    remove(id: string): string;
    submitForm(file: any, body: any): Promise<{
        firstName: any;
        lastName: any;
        imageFilename: any;
        role: any;
    }>;
}
