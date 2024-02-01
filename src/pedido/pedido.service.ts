import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPedidoDto: CreatePedidoDto) {
    const { itensPedidos, ...rest } = createPedidoDto;
    const data = {
      ...rest,
      itensPedidos: {
        create: itensPedidos,
      },
    };
    return this.prisma.pedido.create({ data });
  }

  findAll() {
    return `This action returns all pedido`;
  }

  findOne(id_pedido: number) {
    return `This action returns a #${id_pedido} pedido`;
  }

  update(id_pedido: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id_pedido} pedido`;
  }

  remove(id_pedido: number) {
    return `This action removes a #${id_pedido} pedido`;
  }
}
