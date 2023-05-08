import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import {  UpdatePasswordDto } from './dto/updatePassword.dto';


@Controller('employes')
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}

  @Post()
  async create(@Body() createEmployeDto: CreateEmployeDto, @Res() res) {
    // Vérifier si le mail existe déjà
    const emailExists = await this.employesService.checkEmailExists(createEmployeDto.email);
    if (emailExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'L\'adresse email existe déjà.' });
    } else{
    return this.employesService.create(createEmployeDto);
    }
  }

  @Get()
  findAll() {
    return this.employesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.employesService.findOne(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employesService.update(+id, updateEmployeDto);
  }
  @Patch("password/:id")
  async updatePassword(
    @Param("id") email1: string,
    @Body() updatePasswordDto: UpdatePasswordDto
    
  ) :Promise<any | null>{
    await this.employesService.updatePassword(email1, updatePasswordDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.employesService.remove(+id);
  }

}
