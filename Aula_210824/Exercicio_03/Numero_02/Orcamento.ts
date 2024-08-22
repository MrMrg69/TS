// orcamento.ts
import { calcularImposto, calcularDesconto } from './financeiro';

export class Orcamento {
    valorTotal: number;
    itens: string[];

    constructor(valorTotal: number, itens: string[]) {
        this.valorTotal = valorTotal;
        this.itens = itens;
    }

    aplicarImposto(taxa: number): void {
        const imposto = calcularImposto(this.valorTotal, taxa);
        this.valorTotal += imposto;
    }

    aplicarDesconto(taxa: number): void {
        const desconto = calcularDesconto(this.valorTotal, taxa);
        this.valorTotal -= desconto;
    }
}
