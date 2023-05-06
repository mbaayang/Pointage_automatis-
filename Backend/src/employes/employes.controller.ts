import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import {  UpdatePasswordDto } from './dto/updatePassword.dto'
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { v4 as uuidv4 } from 'uuid';



@Controller('employes')
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}

  @Post('post')
  @UseInterceptors(FileInterceptor('photo',{
    limits: { fileSize: 1024 * 1024 * 5 },
    storage: diskStorage({
      destination: './files',
      filename:(req, file, cb) => {
        const filename: string = uuidv4(); console.log(filename)
        cb(null, `${filename}${file.originalname}`);
      }
    })
  }))
  async create(@UploadedFile() photo: Express.Multer.File, @Body() createEmployeDto: CreateEmployeDto) {
    const employe = await this.employesService.create({
      ...createEmployeDto,
      image: photo.filename
    });
    return employe;
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
