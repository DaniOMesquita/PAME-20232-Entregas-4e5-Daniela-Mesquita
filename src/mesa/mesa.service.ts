import { Injectable } from '@nestjs/common';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MesaService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMesaDto: CreateMesaDto) {
    return this.prisma.mesa.create({data: createMesaDto});
  }

  findAll() {
    return `This action returns all mesa`;
  }

  findOne(id_mesa: number) {
    return `This action returns a #${id_mesa} mesa`;
  }

  update(id_mesa: number, updateMesaDto: UpdateMesaDto) {
    return `This action updates a #${id_mesa} mesa`;
  }

  remove(id_mesa: number) {
    return `This action removes a #${id_mesa} mesa`;
  }
}
