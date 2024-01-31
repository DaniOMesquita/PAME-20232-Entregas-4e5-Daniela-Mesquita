import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioDto } from './create-funcionario.dto';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {
    id_funcionario: number;
    nome: string;
    senha: string;
    telefone: number;
    email: string;
}
