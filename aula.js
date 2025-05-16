// Functions (Funções) - Controla o fluxo de execução. Toda a entrada de dados e saída de dados.
// Para nomear uma função, precisa por um verbo+substantivo.

let corSite = 'azul';

//function
function resetaCor(cor, tonalidade) {
    corSite = cor + ' ', tonalidade;
};

console.log(corSite);
resetaCor('verde', ' claro');
console.log(corSite);