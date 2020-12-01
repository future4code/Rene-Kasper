console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// ********************************************************************* //
// ******************** Exercícios de interpretação ******************** //
// ********************************************************************* //

// *************************** EXERCÍCIO 01 **************************** //
    
    /*
    let valor = 0
    for(let i = 0; i < 5; i++) {
    valor += i
    }
    console.log(valor)
    */

    //Enquanto i for menor que 5, adiciona uma unidade até completar 5, na hora de finalizar o valor, é somado 100% do valor já existente, totalizando 10.

// *************************** EXERCÍCIO 02 **************************** //
    
    /*
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
            console.log(numero)
        }
    }
    */

    //Imprime todos os valores da array que são maiores que 18.

// ********************************************************************* //
// *********************** Exercícios de Escrita *********************** //
// ********************************************************************* //

// *************************** EXERCÍCIO 01 **************************** //

/*
const numeros = [9, 24, 31, 43, 64, 74, 96]

//A
for (n of numeros) {
    console.log(n)
}

//B
for (n of numeros) {
    console.log(n/10)
}

//C
for (n of numeros) {
    if (n % 2 === 0) {
        console.log(n)
    }
}

//D e E -> Vou checar a resolução
*/

// ********************************************************************* //
// ***************************** DESAFIOS ****************************** //
// ********************************************************************* //

// *************************** DESAFIO 01 **************************** //

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

//Se o usuário digitar 4, aparecerão 4 linhas com a mesma quantidade de 0 no número correspondente a linha, ex: 0, 00, 000, 0000.

// *************************** DESAFIO 02 **************************** //
/*
const user1Number = Number(prompt("Primeiro jogador, digite um número"))
let user2Number = 0
console.log("Vamos jogar!")

user2Number = Number(prompt("Segundo jogador, digite um número:"))
console.log("O número chutado foi " + user2Number + "!")

let tentativa = 1

while(user2Number != user1Number) {
    if (user2Number > user1Number) {
        console.log("Erroooooooooou! É menor!")
        tentativa = tentativa + 1
        user2Number = Number(prompt("Digite outro número:"))
        console.log("O número chutado foi " + user2Number + "!")
    } else if (user2Number < user1Number)  {
        console.log("Erroooooooooou! É maior!")
        tentativa = tentativa + 1
        user2Number = Number(prompt("Digite outro número:"))
        console.log("O número chutado foi " + user2Number + "!")
    } 
}
console.log("Você acertou em " + tentativa + " tentativas!")
*/

// *************************** DESAFIO 03 **************************** //
const computerNumber = Math.floor(Math.random() * 100) + 1;

let userNumber = 0
console.log("Vamos jogar!")

userNumber = Number(prompt("Tente adivinhar o número que o computador escolheu:"))
console.log("O número chutado foi " + userNumber + "!")

let tentativa = 1

while(userNumber != computerNumber) {
    if (userNumber > computerNumber) {
        console.log("Erroooooooooou! É menor!")
        tentativa = tentativa + 1
        userNumber = Number(prompt("Digite outro número:"))
        console.log("O número chutado foi " + userNumber + "!")
    } else if (userNumber < computerNumber)  {
        console.log("Erroooooooooou! É maior!")
        tentativa = tentativa + 1
        userNumber = Number(prompt("Digite outro número:"))
        console.log("O número chutado foi " + userNumber + "!")
    } 
}
console.log("Você acertou em " + tentativa + " tentativas!")