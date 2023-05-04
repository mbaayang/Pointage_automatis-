<<<<<<< HEAD
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
=======
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseFilePipe, UploadedFile, FileTypeValidator, MaxFileSizeValidator, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('employes')
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
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
