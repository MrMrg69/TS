class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
    // Verifica se o email contém o caractere "@"
    if (!email.includes('@')) {
        // Se não conter, lança o erro personalizado
        throw new EmailInvalidoError("Email inválido");
    }
    // Se conter, apenas retorna sem erros
}

// Captura o e-mail do usuário via input
const prompt = require('prompt-sync')();  // Necessário instalar o módulo prompt-sync
const emailUsuario = prompt("Por favor, insira seu e-mail: ");

try {
    verificarEmail(emailUsuario);
    console.log("E-mail válido.");
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);  // Deve imprimir "Email inválido" se o e-mail for inválido
    } else {
        console.error("Ocorreu um erro desconhecido.");
    }
}
