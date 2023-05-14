import { log } from 'console';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, UnauthorizedException } from '@nestjs/common';
import { PresenceEmployesService } from './presence_employes.service';
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';

@Controller('presence-employes')
export class PresenceEmployesController {
  constructor(private readonly presenceEmployesService: PresenceEmployesService) {}

  @Post('presence')
  async create(@Body() createPresenceEmployeDto: CreatePresenceEmployeDto, @Res() res) {
   const dateExists = await this.presenceEmployesService.checkDateExists(createPresenceEmployeDto.date);
   const idExists = await this.presenceEmployesService.checkEmailExists(createPresenceEmployeDto.email);
   if (dateExists && idExists) {
    console.log(idExists);console.log(dateExists);
    return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Vous avez déjà badgé' });
  }
   else{
  const employe = this.presenceEmployesService.create(createPresenceEmployeDto)
  return res.status(HttpStatus.OK).json({message:'Succes', employe}) ;
  }
  }

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

  @Post('email')
  async login(@Body() user: PresenceEmploye): Promise<{}> {
    const validatedUser = await this.presenceEmployesService.validateUser(user.email);
    if (!validatedUser) {
 
    throw new UnauthorizedException({ message: "Employé inéxistant" });
    } 
    return this.presenceEmployesService.login(validatedUser);
  }
}
