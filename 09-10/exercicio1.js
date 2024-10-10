const readline = require("readline-sync");

//Perguntar nome
const nome = readline.question("Qual seu nome?");

//Perguntar notas.
const nota1 = readline.questionFloat("Qual a nota do 1 bimestre? ");
const nota2 = readline.questionFloat("Qual a nota do 2 bimestre? ");
const nota3 = readline.questionFloat("Qual a nota do 3 bimestre? ");
const nota4 = readline.questionFloat("Qual a nota do 4 bimestre? ");

//calculár media final.
const media = (nota1 + nota2 + nota3 + nota4)/4;

console.log (`A média final do aluno ${nome}, foi de: ${media}`);

if (media >= "7"){
    console.log(`O aluno ${nome} foi aprovado com a media de ${media.toFixed(2)}`);
} else {
    console.log(`O aluno ${nome} foi reprovado com a media de ${media.toFixed(2)}`);
}
