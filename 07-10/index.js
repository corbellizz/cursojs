// // npm install readline-sync

/**
 * SOLICITE O NOME DO ALUNO(A) E SUAS 4 NOTAS BIMESTRAIS E CALCULE A MÉDIA FINAL
 */
const readline = require("readline-sync");

// Pegar o nome do aluno
const nome = readline.question("Qual o nome do aluno? ");
// Pegar as notas do aluno
const nota1 = readline.questionFloat("Qual a nota do 1 bimestre? ");
const nota2 = readline.questionFloat("Qual a nota do 2 bimestre? ");
const nota3 = readline.questionFloat("Qual a nota do 3 bimestre? ");
const nota4 = readline.questionFloat("Qual a nota do 4 bimestre? ");
// Calcular a média
const media = (nota1 + nota2 + nota3 + nota4) / 4;
// Exibir o resultado
console.log(A media final do aluno ${nome} foi de: ${media.toFixed(2)});
