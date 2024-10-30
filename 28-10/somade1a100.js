// Escreva um programa para calcular a soma dos números de 1 a 100.
//  * Saída esperada: "A soma dos números de 1 à 100 é 5050."

const readlineSync = require('readline-sync');

// Função para calcular a soma dos números de 1 a 100
const calcularSoma = () => {
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma += i;
    }

    console.log(`A soma dos números de 1 à 100 é ${soma}.`);
};

// Chamando a função
calcularSoma();