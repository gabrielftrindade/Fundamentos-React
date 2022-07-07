// Quantidade de numeros

// Funcao para criar um array com a quantidade de numeros colocado no input
// de 1 a 60 e nao pode repetir os numeros dentro do array

// EX: 
// qtd = 7
// function gerarNumeros(qtd) { return [3, 13, 43, 51, 53, 55, 59] }

function gerarNumeros(qtd) {
    const min = 1
    const max = 60
    let result = []
    for (let i = 0; i < qtd; i++) {
        let valorAleatorio = parseInt(Math.random() * (max - min) + min)
        while(result.includes(valorAleatorio)) {
            valorAleatorio = parseInt(Math.random() * (max - min) + min)
        }
        result.push(valorAleatorio)
    }
    result.sort()
    return result
}

console.log(gerarNumeros(7))