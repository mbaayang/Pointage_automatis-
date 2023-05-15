import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { PresenceEtudiantsService } from './presence_etudiants.service';
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';

@Controller('presence-etudiants')
export class PresenceEtudiantsController {
  constructor(private readonly presenceEtudiantsService: PresenceEtudiantsService) {}

  @Post('presence')
  async create(@Body() createPresenceEtudiantDto: CreatePresenceEtudiantDto, @Res() res) {
    const dateExists = await this.presenceEtudiantsService.checkDateExists(createPresenceEtudiantDto.date);
   const idExists = await this.presenceEtudiantsService.checkEmailExists(createPresenceEtudiantDto.email);
   if (dateExists && idExists) {
    console.log(idExists);console.log(dateExists);
    return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Vous avez déjà badgé' });
  }
   else{
  const etudiant = this.presenceEtudiantsService.create(createPresenceEtudiantDto)
  return res.status(HttpStatus.OK).json({message:'Succes', etudiant}) ;
  }
  }

  @Get()
  findAll() {
    return this.presenceEtudiantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presenceEtudiantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresenceEtudiantDto: UpdatePresenceEtudiantDto) {
    return this.presenceEtudiantsService.update(+id, updatePresenceEtudiantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presenceEtudiantsService.remove(+id);
  }
}
