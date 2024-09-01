function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();
        const tempoGasto = fim - inicio;
        console.log(`O método ${propertyKey} demorou ${tempoGasto.toFixed(2)}ms para ser executado.`);
        return resultado;
    };
}

class Calculadora {
    @medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}

const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);
