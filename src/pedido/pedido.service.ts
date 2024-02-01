import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PedidoService {
  findOne(id_pedido: number) {
    return this.prisma.mesa.findMany(); 
  }
  findAll() {
    return this.prisma.pedido.findMany();
  }
  constructor(private readonly prisma: PrismaService) {}
  create(createPedidoDto: CreatePedidoDto) {
    let data = {
      ...createPedidoDto,
      itensPedidos: { create: [] },
    };
    return this.prisma.pedido.create({ data });
  }

  update(id_pedido: number, updatePedidoDto: UpdatePedidoDto) {
    let data = {
      ...updatePedidoDto,
      itensPedidos: { create: [] },
    };
    return this.prisma.pedido.update({ where: { id_pedido }, data });
  }

  remove(id_pedido: number) {
    return this.prisma.pedido.delete({ where: { id_pedido } });
  }
}
