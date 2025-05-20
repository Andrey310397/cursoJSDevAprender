// Mini projeto - Encontre o String
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2008,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (let chave in obj) {
        if (typeof obj[chave] === 'string') {
            console.log(chave, obj[chave]);
        }
    }
}