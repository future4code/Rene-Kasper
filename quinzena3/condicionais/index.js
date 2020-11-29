console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// ********************************************************************* //
// ******************** Exercícios de interpretação ******************** //
// ********************************************************************* //

// *************************** EXERCÍCIO 01 **************************** //

/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

O programa testa se um número é par ou impar. Se for par, imprime a mensagem "Passou no teste!", caso seja impar, imprime a mensagem "Não passou no teste!" 
*/

// *************************** EXERCÍCIO 02 **************************** //

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. O código retorna o preço de um determinado item, de acordo com a resposta que for salva na variável fruta.
//b. O preço da fruta Maçã é R$ 2.25
//c. Vai retornar 5, pois é o default já que "Pêra" não vai existir.
*/

// *************************** EXERCÍCIO 03 **************************** //

/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/

//a. a primeira linha transforma de string em numero
//b. fiquei em dúvida, pois acredito que há um erro no código. vou aguardar a resolução.

// ********************************************************************* //
// *********************** Exercícios de Escrita *********************** //
// ********************************************************************* //

// *************************** EXERCÍCIO 01 **************************** //

/*
let idade = Number(prompt("Digite sua idade:"))

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}
*/

// *************************** EXERCÍCIO 02 **************************** //

/*
let turno = prompt("Qual o turno que você estuda?")

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
}
*/

// *************************** EXERCÍCIO 03 **************************** //

/*
const genero = prompt("Qual o gênero do filme que você quer assistir?")
if (genero === "fantasia") {
    const preco = prompt("Quanto você quer pagar pelo filme?")
    if (preco <= 15) {
        console.log("Bom filme!")
    } else { 
        console.log("Escolha outro filme!")
    }
} else {
    console.log("Escolha outro filme!")
}
*/

// ********************************************************************* //
// ***************************** DESAFIOS ****************************** //
// ********************************************************************* //

// **************************** DESAFIO 01 ***************************** //

/*
const genero = prompt("Qual o gênero do filme que você quer assistir?")
if (genero === "fantasia") {
    const preco = prompt("Quanto você quer pagar pelo filme?")
    if (preco <= 15) {
        const snack = prompt("Qual snack você quer?")
        console.log("Bom filme!")
        console.log("... com", snack)
    } else { 
        console.log("Escolha outro filme!")
    }
} else {
    console.log("Escolha outro filme!")
}
*/

// **************************** DESAFIO 02 ***************************** //
// NÃO FOI FINALIZADO POIS NÃO TIVE TEMPO, AINDA VOU TERMINAR!

// const nome = prompt("Qual o seu nome completo?")
// let tipo = prompt("Qual o tipo da partida (IN ou DO)?")
// let etapa = prompt("Qual a etapa da partida (SF, DT, FI)?")
// let categoria = prompt("Qual a categoria do ingresso (1, 2, 3, ou 4?")
// let qtd = prompt("Quantos ingressos você quer?")
// let preco
// let final
// let ing

// if (etapa === "SF") {
    
//     etapa = "Semifinais"

//     if (categoria === 1) {
//         preco = 1320
//     } else if (categoria === 2) {
//         preco = 880
//     } else if (categoria === 3) {
//         preco = 550
//     } else if (categoria === 4) {
//         preco = 220
//     } else {
//         console.log("Erro: categoria inválida")
//     }
// } else if (etapa === "DT") {
    
//     etapa = "Decisão"

//     if (categoria === 1) {
//         preco = 660
//     } else if (categoria === 2) {
//         preco = 440
//     } else if (categoria === 3) {
//         preco = 330
//     } else if (categoria === 4) {
//         preco = 170
//     } else {
//         console.log("Erro: categoria inválida")
//     }
// } else if (etapa === "FI") {
    
//     etapa = "Final"

//     if (categoria === 1) {
//         preco = 1980
//     } else if (categoria === 2) {
//         preco = 1320
//     } else if (categoria === 3) {
//         preco = 880
//     } else if (categoria === 4) {
//         preco = 330
//     } else {
//         console.log("Erro: categoria inválida")
//     }

// } else {
//     console.log("Erro: etapa inválida")
// }

// let total = (preco*qtd)

// if (tipo === "IN") {

//     tipo = "Internacional"
//     final = total*4.10
//     ing = preco*4.10
    
//     console.log("---Dados da compra---")
//     console.log("Nome do cliente:", nome) 
//     console.log("Tipo do jogo:", tipo) 
//     console.log("Etapa do jogo:", etapa) 
//     console.log("Categoria:", categoria) 
//     console.log("Quantidade de Ingressos: " + qtd + " ingressos") 
//     console.log("---Valores---") 
//     console.log("Valor do ingresso:  R$ ", ing)
//     console.log("Valor total:  R$ ", final)

// } else if (tipo === "DO") {

//     tipo = "Nacional"
    
//     console.log("---Dados da compra---")
//     console.log("Nome do cliente:", nome) 
//     console.log("Tipo do jogo:", tipo) 
//     console.log("Etapa do jogo:", etapa) 
//     console.log("Categoria:", categoria) 
//     console.log("Quantidade de Ingressos: " + qtd + " ingressos") 
//     console.log("---Valores---") 
//     console.log("Valor do ingresso:  R$ ", preco)
//     console.log("Valor total:  R$ ", total)

// }


