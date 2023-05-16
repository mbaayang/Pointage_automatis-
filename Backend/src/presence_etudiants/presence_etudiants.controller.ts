import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { PresenceEtudiantsService } from './presence_etudiants.service';
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';

@Controller('presence-etudiants')
export class PresenceEtudiantsController {
  constructor(private readonly presenceEtudiantsService: PresenceEtudiantsService) {}

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
