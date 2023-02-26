
function sorteioNumeros() {

    let numerosVencedores = [];

    while (numerosVencedores.length < 6) {
        let randomNumber = Math.floor(Math.random() * 60) + 1;
        if (!numerosVencedores.includes(randomNumber)) {
            numerosVencedores.push(randomNumber);
        }
    }

    let numerosDiv = document.getElementById("numerosSorteados");
    numerosDiv.innerHTML = "numeros sorteados: " + numerosVencedores.join(", ");
}