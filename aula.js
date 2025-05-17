let idade = Number(prompt('Digite a sua idade'));

let carteiraTrabalho = prompt('Possui carteira de trabalho?').toUpperCase();

let podeAplicar = carteiraTrabalho === 'SIM' && idade >= 18 ? 'Pode aplicar' : 'Não pode aplicar';

console.log(podeAplicar)