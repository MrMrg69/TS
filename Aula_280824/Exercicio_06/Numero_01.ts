const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError("Email inválido");
    }
}

rl.question("Por favor, insira seu e-mail: ", (emailUsuario: string) => {
    try {
        verificarEmail(emailUsuario);
        console.log("E-mail válido.");
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("Ocorreu um erro desconhecido.");
        }
    }
    rl.close();
});
