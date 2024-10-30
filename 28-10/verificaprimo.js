// Escreva um programa que tenha uma função chamada ehPrimo.
// Receba um número informado pelo usuário, passe ele para a função.
// Se o número for primo, deverá retornar true, senão false.

const readlineSync = require('readline-sync');

// Função para verificar se um número é primo
const ehPrimo = (numero) => {
    if (numero <= 1) return false; // Números menores ou iguais a 1 não são primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; // Se o número é divisível por i, não é primo
    }
    return true; // Se passar por todos, é primo
};

// Função principal
const verificarNumeroPrimo = () => {
    const numero = readlineSync.questionInt('Digite um numero: ');
    const resultado = ehPrimo(numero);
    
    if (resultado) {
        console.log(`${numero} é primo.`);
    } else {
        console.log(`${numero} não é primo.`);
    }
};

// Chamando a função principal
verificarNumeroPrimo();