import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, UnauthorizedException } from '@nestjs/common';
import { PresenceEmployesService } from './presence_employes.service';
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';

@Controller('presence-employes')
export class PresenceEmployesController {
  constructor(private readonly presenceEmployesService: PresenceEmployesService) {}

  @Get()
  findAll() {
    return this.presenceEmployesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presenceEmployesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresenceEmployeDto: UpdatePresenceEmployeDto) {
    return this.presenceEmployesService.update(+id, updatePresenceEmployeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presenceEmployesService.remove(+id);
  }

}
