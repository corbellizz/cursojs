const readline = require('readline-sync');

let soma = 0;

for(let i = 1; i <= 4; i++) {
    let nota = readline.questionFloat(`Informe a nota ${i} do aluno:`);
    soma = soma + nota;

}

const media = soma / 4;
console.log(media.toFixed(2));
