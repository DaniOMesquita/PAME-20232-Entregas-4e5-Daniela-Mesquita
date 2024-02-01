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
    return `This action returns all funcionario`;
  }

  findOne(id_funcionario: number) {
    return `This action returns a #${id_funcionario} funcionario`;
  }

  update(id_funcionario: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `This action updates a #${id_funcionario} funcionario`;
  }

  remove(id_funcionario: number) {
    return `This action removes a #${id_funcionario} funcionario`;
  }
}
