import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from '../prisma/prisma.service';
''
@Injectable()
export class FuncionarioService {
  constructor (private readonly prisma: PrismaService) {}
  create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionario.create({data: createFuncionarioDto});
  }
  findAll() {
    return this.prisma.funcionario.findMany();
  }

  findOne(id_funcionario: number) {
    return this.prisma.funcionario.findUnique({where: {id_funcionario}});
  }

  update(id_funcionario: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prisma.funcionario.update({where: {id_funcionario: id_funcionario}, data: updateFuncionarioDto}); 
  }

  remove(id_funcionario: number) {
    return this.prisma.funcionario.delete({where: {id_funcionario}});
  }
}
