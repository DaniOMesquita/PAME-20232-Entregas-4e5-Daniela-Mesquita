import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}
  // Cria uma nova mesa
  // URL: POST http://localhost:3000/mesa
  @Post()
  create(@Body() createMesaDto: CreateMesaDto) {
    return this.mesaService.create(createMesaDto);
  }
  // Retorna todas as mesas
  // URL: GET http://localhost:3000/mesa
  @Get()
  findAll() {
    return this.mesaService.findAll();
  }
  // Retorna uma mesa específica
  // URL: GET http://localhost:3000/mesa/[id_mesa]
  @Get(':id')
  findOne(@Param('id') id_mesa: string) {
    return this.mesaService.findOne(+id_mesa);
  }
  // Atualiza uma mesa
  // URL: PATCH http://localhost:3000/mesa/[id_mesa]
  @Patch(':id')
  update(@Param('id') id_mesa: string, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesaService.update(+id_mesa, updateMesaDto);
  }
  // Remove uma mesa
  // URL: DELETE http://localhost:3000/mesa/[id_mesa]
  @Delete(':id')
  remove(@Param('id') id_mesa: string) {
    return this.mesaService.remove(+id_mesa);
  }
}
