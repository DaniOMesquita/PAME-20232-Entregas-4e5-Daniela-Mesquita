import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}
  // Cria um novo funcionário
  // URL: POST http://localhost:3000/funcionario
  @Post()
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }
  // Retorna todos os funcionários
  // URL: GET http://localhost:3000/funcionario
  @Get()
  findAll() {
    return this.funcionarioService.findAll();
  }
  // Retorna um funcionário específico
  // URL: GET http://localhost:3000/funcionario/[id_funcionario]
  @Get(':id')
  findOne(@Param('id') id_funcionario: string) {
    return this.funcionarioService.findOne(+id_funcionario);
  }
  // Atualiza um funcionário
  // URL: PATCH http://localhost:3000/funcionario/[id_funcionario]
  @Patch(':id')
  update(@Param('id') id_funcionario: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionarioService.update(+id_funcionario, updateFuncionarioDto);
  }
  // Remove um funcionário
  // URL: DELETE http://localhost:3000/funcionario/[id_funcionario]
  @Delete(':id')
  remove(@Param('id') id_funcionario: string) {
    return this.funcionarioService.remove(+id_funcionario);
  }
}
