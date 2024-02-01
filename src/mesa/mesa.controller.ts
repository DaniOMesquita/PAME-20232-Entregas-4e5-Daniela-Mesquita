import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Post()
  create(@Body() createMesaDto: CreateMesaDto) {
    return this.mesaService.create(createMesaDto);
  }

  @Get()
  findAll() {
    return this.mesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id_mesa: string) {
    return this.mesaService.findOne(+id_mesa);
  }

  @Patch(':id')
  update(@Param('id') id_mesa: string, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesaService.update(+id_mesa, updateMesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id_mesa: string) {
    return this.mesaService.remove(+id_mesa);
  }
}
