import { CreateEmployeDto } from './create-employe.dto';
declare const UpdateEmployeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEmployeDto>>;
export declare class UpdateEmployeDto extends UpdateEmployeDto_base {
    readonly id_employe: number;
    readonly prenom: string;
    readonly nom: string;
    readonly email: string;
    readonly role: string;
}
export {};
