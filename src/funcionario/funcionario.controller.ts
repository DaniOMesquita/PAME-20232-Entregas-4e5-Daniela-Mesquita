import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }

  @Get()
  findAll() {
    return this.funcionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id_funcionario: string) {
    return this.funcionarioService.findOne(+id_funcionario);
  }

  @Patch(':id')
  update(@Param('id') id_funcionario: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionarioService.update(+id_funcionario, updateFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id_funcionario: string) {
    return this.funcionarioService.remove(+id_funcionario);
  }
}
