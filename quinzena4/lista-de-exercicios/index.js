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