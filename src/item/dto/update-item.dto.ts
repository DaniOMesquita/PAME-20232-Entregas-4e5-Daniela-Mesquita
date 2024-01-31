import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {
    id_item: number;
    nome: string;
    valor: number;
    validade: Date;
    categoria: string;
}
