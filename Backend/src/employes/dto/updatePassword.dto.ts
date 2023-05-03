import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateEmployeDto } from "./create-employe.dto";

export class UpdatePasswordDto extends PartialType(CreateEmployeDto) {
  @IsNotEmpty()
  @IsString()
  mot_de_passe: string;

  @IsNotEmpty()
  @IsString()
  NewPassword: string;
}
