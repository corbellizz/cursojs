// Escreva um programa que receba vários números pelo usuário, números positivos e negativos. Quando o usuário digitar 0 (zero), deverá parar de pedir números para o usuário e deverá retornar QUANTOS NUMEROS POSITIVOS FORAM INFORMADOS, QUANTOS NUMEROS NEGATIVOS FORAM INFORMADOS e QUANTOS NUMEROS FORAM INFORMADOS AO TODO.

const readlineSync = require('readline-sync');

// Função principal para contar os números
const contarNumeros = () => {
    let positivos = 0;
    let negativos = 0;
    let total = 0;

    while (true) {
        const numero = readlineSync.questionInt('Digite um numero (0 para parar): ');

        if (numero === 0) {
            break; // Para quando o usuário digita 0
        }

        total++; // Incrementa o total de números informados

        if (numero > 0) {
            positivos++; // Incrementa o contador de positivos
        } else {
            negativos++; // Incrementa o contador de negativos
        }
    }

    // Exibindo os resultados
    console.log(`Quantidade de números positivos: ${positivos}`);
    console.log(`Quantidade de números negativos: ${negativos}`);
    console.log(`Quantidade total de números: ${total}`);
};

// Chamando a função principal
contarNumeros();