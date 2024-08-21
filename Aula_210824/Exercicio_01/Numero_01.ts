import * as readline from 'readline';

// Definição da interface Produto
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

// Definição do tipo de união para forma de pagamento
type FormaPagamento = 'dinheiro' | 'cartao' | 'pix';

// Função para realizar a compra
function realizarCompra(produto: Produto, formaPagamento: FormaPagamento): string {
    return `Categoria: ${produto.categoria} / Produto: ${produto.nome} / Preço: R$ ${produto.preco.toFixed(2)} / Forma de Pagamento: ${formaPagamento.charAt(0).toUpperCase() + formaPagamento.slice(1)}`;
}

// Produtos para cada categoria
const categorias = ['Eletrônicos', 'Beleza', 'Esportes'];
const produtosEletronicos: Produto[] = [
    { nome: 'Computador', preco: 3500.00, categoria: 'Eletrônicos' },
    { nome: 'Celular', preco: 1499.99, categoria: 'Eletrônicos' },
    { nome: 'PS5', preco: 3299.99, categoria: 'Eletrônicos' }
];
const produtosBeleza: Produto[] = [
    { nome: 'Perfume', preco: 250.00, categoria: 'Beleza' },
    { nome: 'Creme Hidratante', preco: 79.90, categoria: 'Beleza' },
    { nome: 'Maquiagem', preco: 120.00, categoria: 'Beleza' }
];
const produtosEsportes: Produto[] = [
    { nome: 'Bola de Futebol', preco: 99.99, categoria: 'Esportes' },
    { nome: 'Tênis de Corrida', preco: 299.99, categoria: 'Esportes' },
    { nome: 'Bicicleta', preco: 1200.00, categoria: 'Esportes' }
];

// Configuração do readline para inputs do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para escolher a categoria
function escolherCategoria() {
    console.log('Escolha uma categoria:');
    categorias.forEach((categoria, index) => {
        console.log(`${index + 1}. ${categoria}`);
    });

    rl.question('Digite o número da categoria: ', (categoriaEscolhida) => {
        const categoriaIndex = parseInt(categoriaEscolhida) - 1;
        if (categoriaIndex >= 0 && categoriaIndex < categorias.length) {
            escolherProduto(categorias[categoriaIndex]);
        } else {
            console.log('Categoria inválida. Tente novamente.');
            escolherCategoria();
        }
    });
}

// Função para escolher o produto
function escolherProduto(categoria: string) {
    let produtos: Produto[];

    switch (categoria) {
        case 'Eletrônicos':
            produtos = produtosEletronicos;
            break;
        case 'Beleza':
            produtos = produtosBeleza;
            break;
        case 'Esportes':
            produtos = produtosEsportes;
            break;
        default:
            console.log('Categoria inválida.');
            rl.close();
            return;
    }

    console.log(`Escolha um produto da categoria ${categoria}:`);
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    });

    rl.question('Digite o número do produto: ', (produtoEscolhido) => {
        const produtoIndex = parseInt(produtoEscolhido) - 1;
        if (produtoIndex >= 0 && produtoIndex < produtos.length) {
            escolherFormaPagamento(produtos[produtoIndex]);
        } else {
            console.log('Produto inválido. Tente novamente.');
            escolherProduto(categoria);
        }
    });
}

// Função para escolher a forma de pagamento
function escolherFormaPagamento(produto: Produto) {
    const formasPagamento: FormaPagamento[] = ['dinheiro', 'cartao', 'pix'];
    console.log('Escolha a forma de pagamento:');
    formasPagamento.forEach((forma, index) => {
        console.log(`${index + 1}. ${forma.charAt(0).toUpperCase() + forma.slice(1)}`);
    });

    rl.question('Digite o número da forma de pagamento: ', (pagamentoEscolhido) => {
        const pagamentoIndex = parseInt(pagamentoEscolhido) - 1;
        if (pagamentoIndex >= 0 && pagamentoIndex < formasPagamento.length) {
            const mensagemFinal = realizarCompra(produto, formasPagamento[pagamentoIndex]);
            console.log(mensagemFinal);
            rl.close();
        } else {
            console.log('Forma de pagamento inválida. Tente novamente.');
            escolherFormaPagamento(produto);
        }
    });
}

// Iniciar o processo
escolherCategoria();
