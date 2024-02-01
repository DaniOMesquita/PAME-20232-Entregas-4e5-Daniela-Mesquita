import { Injectable } from '@nestjs/common';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MesaService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMesaDto: CreateMesaDto) {
    const { pedidos, ...rest } = createMesaDto;
    const mesaData = {
      ...rest,
      pedidos: {
        create: pedidos
      }
    };
    return this.prisma.mesa.create({ data: mesaData });
  }

  findAll() {
    return this.prisma.mesa.findMany();
  }

  findOne(id_mesa: number) {
    return this.prisma.mesa.findUnique({ where: { id_mesa } }); 
  }
  update(id_mesa: number, updateMesaDto: UpdateMesaDto) {
    const { pedidos, ...rest } = updateMesaDto;
    const mesaData = {
      ...rest,
      pedidos: {
        updateMany: pedidos
      }
    };
    return this.prisma.mesa.update({ where: { id_mesa }, data: mesaData });
  }

  remove(id_mesa: number) {
    return this.prisma.mesa.delete({ where: { id_mesa } });
  }
}
