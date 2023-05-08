import { Controller, Get, Post, Body, Param, Put, HttpException, HttpStatus, Res } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';

@Controller('etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @Post()
  async create(@Body() createEtudiantDto: CreateEtudiantDto, @Res() res) {
    // Vérifier si le mail existe déjà
    const emailExists = await this.etudiantService.checkEmailExists(createEtudiantDto.email);
    if (emailExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'L\'adresse email existe déjà.' });
    } else{
    return this.etudiantService.create(createEtudiantDto);
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
