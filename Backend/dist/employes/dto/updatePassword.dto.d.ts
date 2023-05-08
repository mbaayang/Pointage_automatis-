import { CreateEmployeDto } from "./create-employe.dto";
declare const UpdatePasswordDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEmployeDto>>;
export declare class UpdatePasswordDto extends UpdatePasswordDto_base {
    mot_de_passe: string;
    NewPassword: string;
}
export {};
