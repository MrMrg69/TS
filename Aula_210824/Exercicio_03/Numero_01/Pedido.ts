// Pedido.ts
import { Cliente } from './Cliente';

export class Pedido {
    cliente: Cliente;
    produto: string;
    valor: number;

    constructor(cliente: Cliente, produto: string, valor: number) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
}
