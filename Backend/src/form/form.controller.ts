import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { createConnection } from "mysql2/promise";

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    return this.formService.create(createFormDto);
  }

  @Get()
  findAll() {
    return this.formService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formService.update(+id, updateFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formService.remove(+id);
  }

  @Post("submit")
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
    const { firstName, lastName, role } = body;

    const connection = await createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "image",
    });

    const [results, fields] = await connection.execute(
      "INSERT INTO images (first_name, last_name, image_filename, role) VALUES (?, ?, ?, ?)",
      [firstName, lastName, file.filename, role]
    );

    return {
      firstName,
      lastName,
      imageFilename: file.filename,
      role,
    };
  }
}




