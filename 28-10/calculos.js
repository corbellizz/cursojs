// Escreva um programa que irá receber 4 números e deverá informar a soma de todos os números, o menor número e o maior número, além da média dos valores.

const readlineSync = require('readline-sync');

// Função para obter os valores e calcular os resultados
const obterValores = () => {
    let numeros = [];

    // Coletando 4 números
    for (let i = 0; i < 4; i++) {
        const valor = readlineSync.questionFloat(`Digite o ${i + 1} numero: `);
        numeros.push(valor);
    }

    // Calculando os resultados
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    const media = soma / numeros.length;

    // Exibindo os resultados
    console.log(`Soma: ${soma}`);
    console.log(`Maior numero: ${maior}`);
    console.log(`Menor numero: ${menor}`);
    console.log(`Média: ${media}`);
};

// Chamando a função
obterValores();
