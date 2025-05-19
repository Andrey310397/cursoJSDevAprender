// Mini projeto - Máximo entre dois valores
// Escrever uma função que use dois números e retorna o maior entre eles

function maior() {
    let n1 = 2;
    let n2 = 2;

    if (n1 > n2) {
        console.log(n1);
    } else if (n2 > n1) {
        console.log(n2);
    } else {
        console.log('Os valores são iguais.')
    }
}

maior();