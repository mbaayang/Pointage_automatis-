import { Controller, Get, Post, Body, Param, Put, HttpStatus, Res } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';

@Controller('etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @Post()
  async create(@Body() createEtudiantDto: CreateEtudiantDto, @Res() res) {

      // Vérifier la taille de l'image
    const base64Image = createEtudiantDto.photo;
    const fileSizeInBytes = (base64Image.length * 0.75);
    const fileSizeInMb = fileSizeInBytes / (1024 * 1024); // Conversion en Mo

    if (fileSizeInMb > 1) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'La taille de l\'image est trop grande.' });
    }

    // Vérifier si le mail existe déjà
    const emailExists = await this.etudiantService.checkEmailExists(createEtudiantDto.email);
    if (emailExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'L\'adresse email existe déjà.' });
    } else{
     const etudiant = this.etudiantService.create(createEtudiantDto)
      return res.status(HttpStatus.OK).json({message:'Succes', etudiant}) ;
    }
  }


  @Get()
  findAll() {
    return this.etudiantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.etudiantService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, 
  @Body() updateEtudiantDto: UpdateEtudiantDto) {
    return this.etudiantService.update(id, updateEtudiantDto);
  }
}
