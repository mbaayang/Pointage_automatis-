import { IsNumber, IsString } from "class-validator";

export class CreateEntreSortieDto {
    @IsString()
    date: string;

    @IsString()
    heure: string;

    @IsString()
    nature: string;

    @IsNumber()
    employe: number;

    @IsString()
    email: string;
}
