// financeiro.ts
export function calcularImposto(valor: number, taxa: number): number {
    return valor * (taxa / 100);
}

export function calcularDesconto(valor: number, taxa: number): number {
    return valor * (taxa / 100);
}
