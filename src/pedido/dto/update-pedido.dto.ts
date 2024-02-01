import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    formaPag: string;
    statusPag: string;
    statusPedido: string;
    valorTotal: number;
    dataPedido: Date;
}
