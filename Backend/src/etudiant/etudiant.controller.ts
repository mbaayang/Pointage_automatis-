import { Controller, Get, Post, Body, Param, Put, UseInterceptors, UploadedFile, HttpException, HttpStatus, Res } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

@Controller('etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @Post()
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
  async create(@UploadedFile() photo: Express.Multer.File, @Body() createEtudiantDto: CreateEtudiantDto, @Res() res) {
    try{
    const etudiant = await this.etudiantService.create({
      ...createEtudiantDto,
      photo: photo.filename
    });
    return res.status(HttpStatus.OK).json({ message: 'Etudiant enregistré avec succès', etudiant });
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  }
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
