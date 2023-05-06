import { IsBoolean, IsString } from 'class-validator';
export class CreateFormDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    image_filename: string;
}
