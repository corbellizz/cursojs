// Escreva um programa que irá receber 2 valores e deverá informar qual é o maior e qual é o menor.

// Importando o módulo 'readline' para ler entradas do usuário
const readline = require('readline');

// Criando uma interface para ler dados do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para obter os valores e determinar o maior e o menor
const obterValores = () => {
    rl.question('Digite o primeiro valor: ', (valor1) => {
        rl.question('Digite o segundo valor: ', (valor2) => {
            // Convertendo as entradas para números
            const num1 = parseFloat(valor1);
            const num2 = parseFloat(valor2);
            
            // Verificando se os valores são válidos
            if (isNaN(num1) || isNaN(num2)) {
                console.log('Por favor, digite valores numéricos válidos.');
            } else {
                // Determinando o maior e o menor
                const maior = Math.max(num1, num2);
                const menor = Math.min(num1, num2);
                
                console.log(`O maior valor é: ${maior}`);
                console.log(`O menor valor é: ${menor}`);
            }
            // Fechando a interface após a entrada
            rl.close();
        });
    });
};

// Chamando a função para iniciar o programa
obterValores();
