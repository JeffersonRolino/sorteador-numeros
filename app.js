function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);
        numeros.push(numero);
    }

    console.log(numeros);
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}