// main.ts
import { Cliente } from './Cliente';
import { Pedido } from './Pedido';

// Criando clientes
const cliente1 = new Cliente('João Silva', 'joao.silva@email.com');
const cliente2 = new Cliente('Maria Souza', 'maria.souza@email.com');
const cliente3 = new Cliente('Carlos Santos', 'carlos.santos@email.com');

// Criando pedidos
const pedido1 = new Pedido(cliente1, 'Notebook', 3000);
const pedido2 = new Pedido(cliente2, 'Smartphone', 1500);
const pedido3 = new Pedido(cliente3, 'Tablet', 1000);

// Função para exibir recibo
function exibirRecibo(pedido: Pedido) {
    console.log('------------------------------');
    console.log(`Recibo para ${pedido.cliente.nome}`);
    console.log(`Email: ${pedido.cliente.email}`);
    console.log(`Produto: ${pedido.produto}`);
    console.log(`Valor Total: R$${pedido.valor}`);
    console.log('------------------------------\n');
}

// Exibindo recibos
exibirRecibo(pedido1);
exibirRecibo(pedido2);
exibirRecibo(pedido3);
