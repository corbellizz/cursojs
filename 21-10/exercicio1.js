/**
 * Criem uma calculadora que irá calcular Soma, Subtração, Multiplicação e Divisão.
 * Solicitem o Primeiro número, depois a Operação e por último o Segundo número.
 * Criem uma função para cada uma das Operações Matemáticas.
 * Utilizem o if/else para saber qual operação vai chamar qual função.
 * +  -  *  /
 */

const readline = require("readline-sync");

// Definição das funções para cada operação matemática

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Erro: Divisão por zero";
    }
}

// Função principal da calculadora

function calculadora() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.questionInt('Digite o primeiro número: ', (num1) => {
        readline.question('Digite a operação (+, -, *, /): ', (operacao) => {
            readline.questionInt('Digite o segundo número: ', (num2) => {
                let resultado;

                num1 = parseFloat(num1);
                num2 = parseFloat(num2);

                if (operacao === "+") {
                    resultado = soma(num1, num2);
                } else if (operacao === "-") {
                    resultado = subtracao(num1, num2);
                } else if (operacao === "*") {
                    resultado = multiplicacao(num1, num2);
                } else if (operacao === "/") {
                    resultado = divisao(num1, num2);
                } else {
                    resultado = "Erro: Operação inválida";
                }
                
                console.log(`${num1} ${operacao} ${num2} = ${resultado}`);
                readline.close();
            });
        });
    });
}

// Chamada da função principal

calculadora();
-
