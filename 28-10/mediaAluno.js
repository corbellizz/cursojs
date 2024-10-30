// Escreva um programa que receba 4 notas de um aluno e imprima a sua média final.

const readline = require('readline');

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular a média
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

// Lê as notas do aluno
function lerNotas() {
    const notas = [];
    let contador = 1;

    const lerNota = () => {
        if (contador <= 4) {
            rl.question(`Digite a nota ${contador}: `, (resposta) => {
                const nota = parseFloat(resposta);
                
                if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                    notas.push(nota);
                    contador++;
                    lerNota(); // Lê a próxima nota
                } else {
                    console.log('Por favor, insira uma nota válida entre 0 e 10.');
                    lerNota(); // Repete a leitura
                }
            });
        } else {
            const media = calcularMedia(notas);
            console.log(`A média final do aluno é: ${media.toFixed(2)}`);
            rl.close(); // Fecha a interface
        }
    };

    lerNota(); // Inicia a leitura das notas
}

// Chama a função para ler as notas
lerNotas();