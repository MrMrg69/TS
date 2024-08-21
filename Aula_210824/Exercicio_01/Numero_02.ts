import * as readline from 'readline';

// Função para criar uma interface de leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar e capturar a resposta
function perguntar(pergunta: string): Promise<string> {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

// Definindo os dois tipos Pessoa e Empregado
type Pessoa = {
    nome: string;
    idade: number;
}

type Empregado = {
    empresa: string;
    salario: number;
}

// Criando um tipo que combine Pessoa e Empregado, incluindo um ID
type PessoaEmpregada = Pessoa & Empregado & { id: string };

// Função que recebe um objeto do tipo combinado e retorna uma mensagem
function descreverPessoaEmpregada(pessoa: PessoaEmpregada, mostrarSalario: boolean = false, mostrarId: boolean = true): string {
    let descricao = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Empresa: ${pessoa.empresa}`;
    if (mostrarId) {
        descricao = `ID: ${pessoa.id}, ` + descricao;
    }
    if (mostrarSalario) {
        descricao += `, Salário: ${pessoa.salario}`;
    }
    return descricao;
}

// Lista de empregados
const empregados: PessoaEmpregada[] = [
    { id: "01", nome: "João", idade: 30, empresa: "FIAP", salario: 5000 },
    { id: "02", nome: "Maria", idade: 25, empresa: "FIAP", salario: 4500 },
    { id: "03", nome: "Pedro", idade: 28, empresa: "FIAP", salario: 4800 },
    { id: "04", nome: "Ana", idade: 32, empresa: "FIAP", salario: 5200 },
    { id: "05", nome: "Carlos", idade: 40, empresa: "FIAP", salario: 6000 },
    { id: "06", nome: "Beatriz", idade: 22, empresa: "FIAP", salario: 4200 },
    { id: "07", nome: "Paulo", idade: 35, empresa: "FIAP", salario: 5500 },
    { id: "08", nome: "Fernanda", idade: 27, empresa: "FIAP", salario: 4700 },
    { id: "09", nome: "Ricardo", idade: 33, empresa: "FIAP", salario: 5100 },
    { id: "10", nome: "Juliana", idade: 29, empresa: "FIAP", salario: 4900 },
];

// Função principal
async function iniciar() {
    const ehAdmin = await perguntar("Você é um administrador? (sim/nao): ");

    if (ehAdmin.toLowerCase() === "sim") {
        const senha = await perguntar("Digite a senha: ");
        if (senha === "1234") {
            const mostrarTodos = await perguntar("Você quer ver todos os empregados ou apenas um? (todos/um): ");

            if (mostrarTodos.toLowerCase() === "todos") {
                empregados.forEach(empregado => {
                    console.log(descreverPessoaEmpregada(empregado, true, true));
                });
            } else if (mostrarTodos.toLowerCase() === "um") {
                const idEmpregado = await perguntar("Digite o ID do empregado: ");
                const empregado = empregados.find(emp => emp.id === idEmpregado);
                if (empregado) {
                    console.log(descreverPessoaEmpregada(empregado, true, true));
                } else {
                    console.log("Empregado não encontrado.");
                }
            } else {
                console.log("Opção inválida.");
            }
        } else {
            console.log("Senha incorreta.");
        }
    } else {
        empregados.forEach(empregado => {
            console.log(descreverPessoaEmpregada(empregado, false, false));
        });
    }

    rl.close();
}

// Iniciar o programa
iniciar();
