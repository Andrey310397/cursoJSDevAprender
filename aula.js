// Laço for

// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// ----------------------------------------------------

// While loop

// let i = 5;

// while (i >= 1) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i--;
// }

// ----------------------------------------------------

// Do..While loop

// let i = 0;
// do {
//     console.log('digitando', i);
//     i++;
// } while (i <= 10)

// ----------------------------------------------------

// for..in loop
const pessoa = {
    nome: 'Andrey',
    idade: 25
};

for (let chave in pessoa) {
    console.log(chave, pessoa.nome);
}

const cores = ['vermelho', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice, cores[indice]);
}