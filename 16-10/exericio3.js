const readline = require('readline-sync');

// SOLICITE 3 NÚMEROS PARA O USUÁRIO E INFORME SE O NÚMERO SOLICITADO É PAR OU ÍMPAR

for(let i = 1; i <= 3; i++) {
    let num = readline.questionInt(`Informe um numero:`);

    if (num % 2 == 0 ) {
        console.log(`O ${num} é par.`);
    }else {
        console.log(`O ${num} é impar.`);
    }
}
