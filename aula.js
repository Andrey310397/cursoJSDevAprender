// Mini projeto - FizBuzz

//Divísil por 3 => Fizz
//Divísil por 5 => Buzz
//Divísil por 3 e 5 => FizzBuzz
//Não Divísil por 3 ou 5 => Entrada
//Não é um número => Não é um número
const resultado = fizzBuzz(15);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') {
        console.log('Não é um número');
    }

    if (entrada % 3 === 0 && entrada % 5 === 0) {
        console.log('FizzBuzz');
    } else if (entrada % 3 === 0) {
        console.log('Fizz');
    } else if (entrada % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log('entrada');
    }
}