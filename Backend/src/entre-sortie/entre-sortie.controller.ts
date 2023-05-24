import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntreSortieService } from './entre-sortie.service';
import { CreateEntreSortieDto } from './dto/create-entre-sortie.dto';
import { UpdateEntreSortieDto } from './dto/update-entre-sortie.dto';

@Controller('entre-sortie')
export class EntreSortieController {
  constructor(private readonly entreSortieService: EntreSortieService) {}

  @Post()
  create(@Body() createEntreSortieDto: CreateEntreSortieDto) {
    return this.entreSortieService.create(createEntreSortieDto);
  }

  @Get()
  findAll() {
    return this.entreSortieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entreSortieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntreSortieDto: UpdateEntreSortieDto) {
    return this.entreSortieService.update(+id, updateEntreSortieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entreSortieService.remove(+id);
  }
}
