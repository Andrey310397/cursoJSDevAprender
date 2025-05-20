// Mini projeto - Medidor de velocidade
// Velocidade máxima de 70km - Ok
// A cada 5km ganha 1 ponto na carteira
// Precisará usar a função Math.Floor()
// Caso pontos maior que 12 -> Carteira Suspensa
verificarVelocidade(80);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima) {
        console.log('Velocidade: ' + velocidade + ' km/h');
        console.log('Status: Ok');

        console.log('Pontos: 0');
    } else {
        const excessoVelocidade = velocidade - velocidadeMaxima;

        let pontos = Math.floor(excessoVelocidade / kmPorPonto);

        console.log('Velocidade: ' + velocidade + ' km/h');
        console.log('Status: Acima da velocidade');
        console.log('Pontos: ' + pontos);

        if (pontos >= 12) {
            console.log('Carteira Suspensa');
        }
    }
}