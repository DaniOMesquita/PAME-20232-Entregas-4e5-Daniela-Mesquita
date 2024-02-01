export class Pedido {
    id_pedido: number;
    id_mesa: number;
    itensPedidos: [];
    formaPag: string;
    statusPag: string;
    statusPedido: string;
    valorTotal: number;
    dataPedido: Date;
}
