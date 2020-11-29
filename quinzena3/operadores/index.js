console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// ********************************************************************* //
// ******************** Exercícios de interpretação ******************** //
// ********************************************************************* //

// *************************** EXERCÍCIO 01 **************************** //

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) //d. boolean 

// *************************** EXERCÍCIO 02 **************************** //
let array
console.log('a. ', array) //a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. array 1 terá o valor 19

const valor = array[i+6]
console.log('f. ', valor) // f. 9

// ********************************************************************* //
// *********************** Exercícios de Escrita *********************** //
// ********************************************************************* //

// *************************** EXERCÍCIO 01 **************************** //
const age = prompt("Qual a sua idade?")
const friendAge = prompt("Qual a idade do seu amigo?")

const compare = age > friendAge

console.log("Sua idade é maior do que a do seu melhor amigo?", compare)

const difference = age - friendAge
console.log("A diferença de idade é de " + difference + " anos")

// *************************** EXERCÍCIO 02 **************************** //
const even = prompt("Digite um número para saber o resto da divisão por 2")

const rest = even%2 // Todos os números pares retornam resto 0 quando divididos por 2

// Todos os números pares retornam resto 0 quando divididos por 2
// Todos os números impares retornam resto 1 quando divididos por 2

console.log(rest)

// *************************** EXERCÍCIO 03 **************************** //
let listaDeTarefas = []
listaDeTarefas[0] = prompt("Qual a sua primeira tarefa do dia?")
listaDeTarefas[1] = prompt("Qual a sua segunda tarefa do dia?")
listaDeTarefas[2] = prompt("Qual a sua terceira tarefa do dia?")

console.log(listaDeTarefas)

const i = prompt("Qual o índice da tarefa que você já realizou?")

listaDeTarefas.splice(i, 1)
console.log(listaDeTarefas)

// *************************** EXERCÍCIO 04 **************************** //
const name = prompt("Qual o seu nome?")
const mail = prompt("Qual o seu e-mail?")

console.log("O e-mail " + mail + " foi cadastrado com sucesso. Seja bem-vinda(o), " + name + "!" )

// ********************************************************************* //
// ***************************** DESAFIOS ****************************** //
// ********************************************************************* //

// *************************** DESAFIO 01 **************************** //
const c1 = 80
const c2 = 30
let k = 0
let f1 = 0
const f2 = 77

k = (f2 - 32)*5/9 + 273.15
console.log(+ f2 + "°F equivale a " + k + "K")

f1 = c1*9/5 + 32
console.log(+ c1 + "°C equivale a " + f1 + "°F")

f1 = c2*9/5 + 32
k = c2 + 273,15
console.log(+ c2 + "°C equivale a " + f1 + "°F e " + k + "K")

// *************************** DESAFIO 02 **************************** //
const consumo = prompt("Quanto, em KWh, você consumiu de energia elétrica?")

const valor = consumo*0.05

console.log("Sua conta terá o valor de R$" + valor + "!") // Se for utilizado o valor referência de 280KWh, será R$14,00

const desconto = valor*0.85
console.log("O total com desconto é de R$" + desconto + "!"); // Se for utilizado o valor referência de 280KWh, será R$11,90

// *************************** DESAFIO 03 **************************** //

// EXERCÍCIO 3.a //

const libra = prompt("Digite um peso em libras:")

let kg = libra/2.205

console.log(+ libra + "lb equivale a " + kg + "kg") // 20lb equivalem a 9,07kg

// EXERCÍCIO 3.b //

const onca = prompt("Digite um peso em onças:")

kg = onca/35.274

console.log(+ onca + "oz equivale a " + kg + "kg") // 10,5oz equivalem a 0,297kg

// EXERCÍCIO 3.c //

const milhas = prompt("Digite uma distância em milhas:")

let metros = milhas*1609

console.log(+ milhas + "mi equivale a " + metros + "m") // 100mi equivalem a 160.900m

// EXERCÍCIO 3.d //

const ft = prompt("Digite uma distância em pés:")

metros = ft/3.281

console.log(+ ft + "ft equivale a " + metros + "m") // 50 pés equivalem a 15,23m


// EXERCÍCIO 3.e //

const gal = prompt("Digite um volume em galões:")

let litros = gal*3.806

console.log(+ gal + "gal equivale a " + litros + "L") // 103.56 galões equivalem a 394 litros

// EXERCÍCIO 3.f //

const xic = prompt("Digite uma quantidade em xícaras:")

litros = xic/4

console.log(+ xic + " xícaras equivalem a " + litros + "L") // 450 xícaras equivalem a 112,5L

