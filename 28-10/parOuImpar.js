// Faça um programa que leia um número e identifique se ele é PAR ou Ímpar.

// Importa o módulo 'readline' para leitura de entrada do usuário
const readline = require('readline');

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para verificar se o número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é PAR.`);
    } else {
        console.log(`O número ${numero} é ÍMPAR.`);
    }
}

// Lê a entrada do usuário
rl.question('Digite um número: ', (resposta) => {
    const numero = parseInt(resposta);
    
    if (!isNaN(numero)) {
        verificarParOuImpar(numero);
    } else {
        console.log('Por favor, insira um número válido.');
    }
    
    // Fecha a interface após a leitura
    rl.close();
});