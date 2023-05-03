import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EmployesService } from "./employes.service";
import { CreateEmployeDto } from "./dto/create-employe.dto";
import { UpdateEmployeDto } from "./dto/update-employe.dto";
import { UpdatePasswordDto } from "./dto/updatePassword.dto";
@Controller("employes")
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}

  @Post("post")
  create(@Body() createEmployeDto: CreateEmployeDto) {
    return this.employesService.create(createEmployeDto);
  }

  @Get()
  findAll() {
    return this.employesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.employesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employesService.update(+id, updateEmployeDto);
  }
  @Patch("password/:id")
  async updatePassword(
    @Param("id") email: string,
    @Body() updatePasswordDto: UpdatePasswordDto
    
  ) :Promise<any | null>{
    await this.employesService.updatePassword(email, updatePasswordDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.employesService.remove(+id);
  }
}
