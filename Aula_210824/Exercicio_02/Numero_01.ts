// Definindo a classe Funcionario
class Funcionario {
    nome: string;
    cargo: string;
    salario: number;
    gerente?: Gerente;  // Parâmetro opcional

    constructor(nome: string, cargo: string, salario: number, gerente?: Gerente) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.gerente = gerente;
    }

    // Método para retornar uma descrição do funcionário
    descricao(): string {
        if (this.gerente) {
            return `${this.nome} trabalha como ${this.cargo}, ganha R$${this.salario.toFixed(2)} e se reporta ao gerente ${this.gerente.nome}.`;
        } else {
            return `${this.nome} trabalha como ${this.cargo} e ganha R$${this.salario.toFixed(2)}.`;
        }
    }
}

// Definindo a subclasse Gerente que herda de Funcionario
class Gerente extends Funcionario {
    departamento: string;
    funcionarios: Funcionario[];

    constructor(nome: string, cargo: string, salario: number, departamento: string) {
        super(nome, cargo, salario); // Não precisa passar 'null' agora
        this.departamento = departamento;
        this.funcionarios = [];
    }

    // Método para adicionar funcionários ao gerente
    adicionarFuncionario(funcionario: Funcionario) {
        this.funcionarios.push(funcionario);
    }

    // Método para retornar uma descrição detalhada do gerente
    descricaoDetalhada(): string {
        const nomesFuncionarios = this.funcionarios.map(f => f.nome).join(', ');
        return `${this.nome} trabalha como ${this.cargo}, ganha R$${this.salario.toFixed(2)}, supervisiona o departamento de ${this.departamento} e gerencia os funcionários: ${nomesFuncionarios}.`;
    }
}

// Exemplo de uso

// Criando gerentes
const gerente1 = new Gerente("Maria", "Gerente de Projetos", 10000, "TI");
const gerente2 = new Gerente("Pedro", "Gerente de Marketing", 12000, "Marketing");

// Criando funcionários e atribuindo gerentes
const funcionario1 = new Funcionario("João", "Desenvolvedor", 5000, gerente1);
const funcionario2 = new Funcionario("Ana", "Designer", 4500, gerente1);
const funcionario3 = new Funcionario("Carlos", "Analista de Sistemas", 5500, gerente1);

const funcionario4 = new Funcionario("Lucas", "Analista de Marketing", 6000, gerente2);
const funcionario5 = new Funcionario("Sofia", "Coordenadora de Eventos", 4000, gerente2);
const funcionario6 = new Funcionario("Beatriz", "Redatora", 3500, gerente2);

// Adicionando funcionários aos respectivos gerentes
gerente1.adicionarFuncionario(funcionario1);
gerente1.adicionarFuncionario(funcionario2);
gerente1.adicionarFuncionario(funcionario3);

gerente2.adicionarFuncionario(funcionario4);
gerente2.adicionarFuncionario(funcionario5);
gerente2.adicionarFuncionario(funcionario6);

// Exibindo descrições dos funcionários e, em seguida, a descrição detalhada do gerente
console.log(funcionario1.descricao());
console.log(funcionario2.descricao());
console.log(funcionario3.descricao());
console.log(gerente1.descricaoDetalhada());

console.log(""); // Linha em branco para separar os gerentes

console.log(funcionario4.descricao());
console.log(funcionario5.descricao());
console.log(funcionario6.descricao());
console.log(gerente2.descricaoDetalhada());
