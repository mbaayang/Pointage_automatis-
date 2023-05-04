import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import {  UpdatePasswordDto } from './dto/updatePassword.dto'
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { createConnection } from "mysql2/promise";



@Controller('employes')
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}


  @Post("post")
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./images",
        filename: (req, file, callback) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("");
          callback(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    })
  )
  async submitForm(@UploadedFile() file, @Body() body) {
    const { prenom, nom, email, mot_de_passe, matricule, role } = body;

    const connection = await createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "Pointage",
    });

    const [results, fields] = await connection.execute(
      "INSERT INTO employess (prenom, nom, email, mot_de_passe, matricule, role, photo) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [prenom, nom, email, mot_de_passe, matricule, role, file.filename]
    );

    return {
      prenom, nom, email, mot_de_passe, matricule, role, photo: file.filename,
    };
  }

  /* @Post('post')
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
  } */

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
