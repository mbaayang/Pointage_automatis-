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
    limits: { fileSize: 1024 * 1024 * 5, },
    storage: diskStorage({
      destination: './files',
      filename:(req, file, cb) => {
        const filename: string = uuidv4(); console.log(filename)
        cb(null, `${filename}${file.originalname}`);
      }
    })
  }))
  async create(@UploadedFile() photo: Express.Multer.File, @Body() createEtudiantDto: CreateEtudiantDto, @Res() res) {
    // Vérifier si le mail existe déjà
    const emailExists = await this.etudiantService.checkEmailExists(createEtudiantDto.email);
    if (emailExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'L\'adresse email existe déjà.' });
    } 
    else {
    const etudiant = await this.etudiantService.create({
      ...createEtudiantDto,
      photo: photo.filename
    });
    return res.status(HttpStatus.OK).json({ message: 'Etudiant enregistré avec succès', etudiant });
    }
  }

  /* @Post()
async create(@Body() createEtudiantDto: CreateEtudiantDto, @UploadedFile() photo, @Res() res) {
  const etudiantExists = await this.etudiantService.checkEmailExists(createEtudiantDto.email);
  if (etudiantExists) {
    throw new HttpException('Cet e-mail est déjà enregistré', HttpStatus.CONFLICT);
  }
  else {
    return this.fileInterceptor(createEtudiantDto,photo, res);
  }
}

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
async fileInterceptor(@Body() createEtudiantDto: CreateEtudiantDto,@UploadedFile() photo: Express.Multer.File,@Res() res) {
  const etudiant = await this.etudiantService.create({
    ...createEtudiantDto,
    photo: photo.filename
  });
  return res.status(HttpStatus.OK).json({ message: 'Etudiant enregistré avec succès', etudiant });
} */

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
