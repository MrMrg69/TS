// calculo.ts
import { Orcamento } from './Orcamento';

function calcularOrcamento(cliente: string, valorTotal: number, itens: string[], taxaImposto: number, taxaDesconto: number): void {
    const orcamento = new Orcamento(valorTotal, itens);

    console.log(`Cliente: ${cliente}`);
    console.log(`Valor total antes do imposto: ${orcamento.valorTotal}`);
    orcamento.aplicarImposto(taxaImposto);
    console.log(`Valor total após aplicar imposto de ${taxaImposto}%: ${orcamento.valorTotal}`);
    
    console.log(`Valor total antes do desconto: ${orcamento.valorTotal}`);
    orcamento.aplicarDesconto(taxaDesconto);
    console.log(`Valor total após aplicar desconto de ${taxaDesconto}%: ${orcamento.valorTotal}`);
    console.log('-------------------------');
}

// Exemplo 1
calcularOrcamento('João Silva', 1500, ['Produto A', 'Produto B'], 8, 10);

// Exemplo 2
calcularOrcamento('Maria Oliveira', 2500, ['Produto C', 'Produto D'], 5, 7);

// Exemplo 3
calcularOrcamento('Carlos Santos', 3500, ['Produto E', 'Produto F'], 12, 15);

// Exemplo 4
calcularOrcamento('Ana Costa', 4500, ['Produto G', 'Produto H'], 10, 5);

// Exemplo 5
calcularOrcamento('Lucas Pereira', 5500, ['Produto I', 'Produto J'], 15, 20);
