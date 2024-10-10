const readline = require("readline-sync");

const idade = readline.questionInt("Qual sua idade?")
if (idade >= "18") {
const sexo = readline.question("Qual seu sexo? M p/ masulino - F p/ feminino.")
 
    if (sexo.toLowerCase() == "m"){
        console.log ("Bem vindo ao Exercito Brasileiro.");
    }

    if (sexo.toLowerCase() == "f"){
        const exef = readline.question("Desejar se alistar ao exercito? S p/ sim - N p/ não.");
        if (exef.toLowerCase() == "s");
        console.log ("Bem vinda ao Exercito Brasileiro.");
    } else if (exef.toLowerCase = "n"){
        console.log("Ok, não obrigado por nada.")
    }
} else if (idade <= "17") {
    console.log ("Voce nao tem a idade minima permitida.");
}
