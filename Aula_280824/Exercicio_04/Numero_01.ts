import * as readlineSync from 'readline-sync';

function encontrarMaiorElemento<T>(array: T[], comparador?: (a: T, b: T) => T): T {
    if (array.length === 0) {
        throw new Error("O array nao pode estar vazio");
    }
    if (comparador) {
        return array.reduce(comparador);
    } else {
        return array.reduce((a, b) => (a > b ? a : b));
    }
}

function criarArrayDeNumeros(tamanho: number): number[] {
    let array: number[] = [];
    for (let i = 0; i < tamanho; i++) {
        const elemento = parseFloat(readlineSync.question(`Insira o numero ${i + 1}: `));
        array.push(elemento);
    }
    return array;
}

function criarArrayDePalavras(tamanho: number): string[] {
    let array: string[] = [];
    for (let i = 0; i < tamanho; i++) {
        const elemento = readlineSync.question(`Insira a palavra ${i + 1}: `);
        array.push(elemento);
    }
    return array;
}

function main() {
    const numArrays = parseInt(readlineSync.question("Quantos arrays voce deseja criar? "), 10);
    let arraysCriados: any[] = [];

    for (let i = 0; i < numArrays; i++) {
        const tipoArray = readlineSync.question(`O array numero ${i + 1} sera de qual tipo? (Escolha: "numero", "palavra"): `);
        const tamanhoArray = parseInt(readlineSync.question(`Quantos elementos o array numero ${i + 1} deve ter? `), 10);

        let novoArray;
        let comparador;

        if (tipoArray === "numero") {
            novoArray = criarArrayDeNumeros(tamanhoArray);
        } else if (tipoArray === "palavra") {
            novoArray = criarArrayDePalavras(tamanhoArray);
            comparador = (a: string, b: string) => (a.length > b.length ? a : b);
        }

        arraysCriados.push({ array: novoArray, comparador });
    }

    arraysCriados.forEach((obj, index) => {
        const maiorElemento = encontrarMaiorElemento(obj.array, obj.comparador);
        console.log(`O maior elemento do array numero ${index + 1} é:`, maiorElemento);
    });
}

main();
