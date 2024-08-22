// Classe ContaBancaria com as propriedades titular e saldo
class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    exibirSaldo(): void {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo atual: R$ ${this.saldo}`);
        console.log(`Saldo total disponível: R$ ${this.saldo}`);
    }
}

// Subclasse ContaCorrente que herda de ContaBancaria e adiciona limiteCredito
class ContaCorrente extends ContaBancaria {
    limiteCredito: number;

    constructor(titular: string, saldo: number, limiteCredito: number) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }

    // Sobrescrita do método exibirSaldo para incluir o saldo mais o limite de crédito
    exibirSaldo(): void {
        const saldoTotal = this.saldo + this.limiteCredito;
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo atual: R$ ${this.saldo}`);
        console.log(`Limite de crédito: R$ ${this.limiteCredito}`);
        console.log(`Saldo total disponível: R$ ${saldoTotal}`);
    }
}

// Exemplos

// Exemplo 1
const conta1 = new ContaBancaria("Ana", 2000);
conta1.exibirSaldo();

console.log("-----------");

// Exemplo 2
const conta2 = new ContaCorrente("Carlos", 1500, 300);
conta2.exibirSaldo();

console.log("-----------");

// Exemplo 3
const conta3 = new ContaBancaria("Beatriz", 3500);
conta3.exibirSaldo();

console.log("-----------");

// Exemplo 4
const conta4 = new ContaCorrente("Daniel", 5000, 1000);
conta4.exibirSaldo();

console.log("-----------");

// Exemplo 5
const conta5 = new ContaBancaria("Fernanda", 1200);
conta5.exibirSaldo();
