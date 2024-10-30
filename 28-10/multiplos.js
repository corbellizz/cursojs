// Função para imprimir múltiplos de 3 e 5 entre 1 e 100
function imprimirMultiplos() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

// Chama a função
imprimirMultiplos();