// npm install readline-sync
const readline = require("readline-sync");

function  nomeDaFuncao() {
    console.log("Isso é parte da minha função.")
    console.log("isso também é da função.");
}

nomeDaFuncao();

function dizOla(nome) {
    console.log(`Ola ${nome}. Eu sou uma função que sei dizer olá.`);
}

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

nomeDaFuncao();
dizOla("Tafarel");
nomeCompleto("Tafarel", "Chicotti");