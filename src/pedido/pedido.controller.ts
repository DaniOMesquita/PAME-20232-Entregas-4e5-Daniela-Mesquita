import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id_pedido: string) {
    return this.pedidoService.findOne(+id_pedido);
  }

  @Patch(':id')
  update(@Param('id') id_pedido: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(+id_pedido, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id_pedido: string) {
    return this.pedidoService.remove(+id_pedido);
  }
}
