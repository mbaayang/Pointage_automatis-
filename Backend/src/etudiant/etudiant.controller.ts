import { Controller, Get, Post, Body, Param, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

@Controller('etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @Post()
  @UseInterceptors(FileInterceptor('photo',{
    storage: diskStorage({
      destination: './files',
      filename:(req, file, cb) => {
        const filename: string = uuidv4(); console.log(filename)
        //const modifiedFilename : string = `${req.body.nom}_${req.body.prenom}${path.extname(file.originalname)}`; console.log(modifiedFilename)
        cb(null, `${filename}${file.originalname}`);
      }
    })
  }))
  async create(@UploadedFile() photo: Express.Multer.File, @Body() createEtudiantDto: CreateEtudiantDto) {
    //const photo =  `${createEtudiantDto.nom}_${createEtudiantDto.prenom}${path.extname(file.originalname)}`;
    const etudiant = await this.etudiantService.create({
      ...createEtudiantDto,
      photo: photo.filename
    });
    return etudiant;
  }

  @Get()
  findAll() {
    return this.etudiantService.findAll();
  }

/*   @Get(':id')
  findOne(@Param('id') id: number) {
    return this.etudiantService.findOne(id);
  } */

  @Put(':id')
  update(@Param('id') id: number, 
  @Body() updateEtudiantDto: UpdateEtudiantDto) {
    return this.etudiantService.update(id, updateEtudiantDto);
  }
}
