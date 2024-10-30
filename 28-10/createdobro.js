// Escreva uma função chamada DOBRO que recebe um número e devolve o seu dobro.

const readline = require('readline');

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função DOBRO
function DOBRO(numero) {
    return numero * 2;
}

// Lê o número do usuário
rl.question('Digite um número: ', (resposta) => {
    const numero = parseFloat(resposta);
    
    if (!isNaN(numero)) {
        const resultado = DOBRO(numero);
        console.log(`O dobro de ${numero} é ${resultado}.`);
    } else {
        console.log('Por favor, insira um número válido.');
    }

    // Fecha a interface
    rl.close();
});
