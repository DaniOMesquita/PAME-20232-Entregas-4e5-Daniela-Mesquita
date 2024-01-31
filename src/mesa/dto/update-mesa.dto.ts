import { PartialType } from '@nestjs/mapped-types';
import { CreateMesaDto } from './create-mesa.dto';

export class UpdateMesaDto extends PartialType(CreateMesaDto) {
    id_mesa: number;
    id_pedido: number;
    numero: number;
    status: string;
}
