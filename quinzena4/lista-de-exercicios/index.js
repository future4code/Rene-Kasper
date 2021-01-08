// Projeto 4: Lista de Exercícios //

// ********************* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ********************** //
// EXERCÍCIO 01 //
//O valor impresso será uma multiplicação da cotação por 100, resultando na saída de "R$ valor*100"

// EXERCÍCIO 02 //
// O valor impresso na variável novoMontante será de 165 e na variável segundoMontante será "Tipo de investimento informado incorreto!"

// EXERCÍCIO 03 //
//Quantidade total de números 14
//6
//8

// EXERCÍCIO 04 //
//-10
//1590

// ********************* EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ********************** //
// EXERCÍCIO 01 //
function logica01() {
    let nomes = ["bananinha", "teste", "amem"]

    // FOR
    for(var i = 0; i < nomes.length; i++) {
        console.log(nomes[i])
    }

    //FOREACH
    nomes.forEach((nome) => {
        console.log(nome)
    });

    //MAP
    const nomesMap = nomes.map(nome => {
        return nome
    })
    console.log(nomesMap)
}

// EXERCÍCIO 02 //
/*
A) false
B) false
C) true
D) true
E) true
*/

//EXERCÍCIO 03
//O programa não funcionava pois não foi definido nenhum valor para a variável quantidadeDeNumerosPares, além disso, dentro do while, nenhuma informação era passado para mudar o índice i, passando para o próximo valor... Por isso o i++.
function logica03() {
    
    const quantidadeDeNumerosPares = prompt("Digite um número")
    let i = 0
    while(i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++
    }

}

//EXERCÍCIO 04
function logica04(lado01, lado02, lado03) {
    if (lado01 === lado02 && lado02 === lado03) {
        console.log("Equilátero")
    } else if ((lado01 === lado02) || (lado02 === lado03) || (lado03 === lado01)) {
        console.log("Isósceles")
    } else {
        console.log("Escaleno")
    }
}

//EXERCÍCIO 05
function logica05() {
    const numero1 = prompt("Indique o primeiro número")
    const numero2 = prompt("Indique o segundo número")
    let maior
    let div
    let dif

    if (numero1 > numero2) {
        maior =  numero1
        dif = numero1-numero2
    } else if (numero2 > numero1) {
        maior = numero2
        dif = numero2-numero1
    }

    if (numero1 % numero2 === 0) {
        div = "é"
    } else if (numero1 % numero2 === !0) {
        div = "não é"
    }

    if (numero2 % numero1 === 0) {
        div = "é"
    } else if (numero2 % numero1 === !0){
        div = "não é"
    }

    console.log("ENTRADA:")
    console.log(numero1, " e ", numero2)
    console.log(" ")
    console.log("SAÍDA:")
    console.log("O maior é: " + maior + "!")
    console.log(numero1, div, "divisível por", numero2)
    console.log(numero2, div, "divisível por", numero1)
    console.log("A diferença entre eles é", dif)
}

// ********************* EXERCÍCIOS DE FUNÇÕES ********************** //
//EXERCÍCIO 2
/*
const hello = () => { alert("Hello Future4") }

hello()
*/

// ********************* EXERCÍCIOS DE OBJETOS ********************** //
//EXERCÍCIO 01
//Utiliza-se uma array quando queremos guardar um dado por índice. Logo, o objeto, é utilizado quando queremos armazenar mais de um dado por índice.
