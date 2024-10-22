// npm install readline-sync
const readline = require("readline-sync");

const notas = [];
for (let i = 0; i < 4; i++) {
    let nota = readline.questionFloat(`Qual a nota ${i}: `);
    notas.push(nota);
}
console.log(notas);
// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     soma = soma + notas[i];
// }
// console.log(soma/notas.length);

const somaReduce = notas.reduce( (total, atual) => total + atual, 0);
console.log(somaReduce);
console.log(somaReduce/notas.length);