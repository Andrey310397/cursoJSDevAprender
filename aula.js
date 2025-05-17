// Mini projeto - Trocando valor de variáveis
let a = 'vermelho';
let b = 'azul';

console.log('Antes da troca:');
console.log(a);
console.log(b);

let temp = a;
a = b;
b = temp;

console.log('\nDepois da troca:')
console.log('a: ', a)
console.log('b: ', b)