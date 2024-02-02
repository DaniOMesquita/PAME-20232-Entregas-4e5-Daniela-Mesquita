import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}
  // Cria um novo pedido
  // URL: POST http://localhost:3000/pedido
  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }
  // Retorna todos os pedidos
  // URL: GET http://localhost:3000/pedido
  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }
  // Retorna um pedido específico
  // URL: GET http://localhost:3000/pedido/[id_pedido]
  @Get(':id')
  findOne(@Param('id') id_pedido: string) {
    return this.pedidoService.findOne(+id_pedido);
  }
  // Atualiza um pedido
  // URL: PATCH http://localhost:3000/pedido/[id_pedido]
  @Patch(':id')
  update(@Param('id') id_pedido: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(+id_pedido, updatePedidoDto);
  }
  // Remove um pedido
  // URL: DELETE http://localhost:3000/pedido/[id_pedido]
  @Delete(':id')
  remove(@Param('id') id_pedido: string) {
    return this.pedidoService.remove(+id_pedido);
  }
}
