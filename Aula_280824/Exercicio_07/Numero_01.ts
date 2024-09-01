async function buscarDadosDaAPI(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simula a busca de dados em uma API com um atraso de 2 segundos
        setTimeout(() => {
            const sucesso = Math.random() > 0.5; // Simula sucesso ou falha

            if (sucesso) {
                resolve("Dados recebidos com sucesso!");
            } else {
                reject("Erro ao buscar os dados.");
            }
        }, 2000);
    });
}

// Exemplo de uso:
async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();
        console.log(dados);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

executarBusca(); // Simula a busca de dados com async/await
