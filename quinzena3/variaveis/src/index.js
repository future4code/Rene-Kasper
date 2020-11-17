// ********************************************************************* //
// ******************** Exercícios de interpretação ******************** //
// ********************************************************************* //

// ************************* EXERCÍCIO 01 ************************* //

const a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// RESPOSTA QUE APARECERÁ NO CONSOLE: 10 e 10, 5

// ************************* EXERCÍCIO 02 ************************* //

let a = 10
let b = 20
const c = a

b = c
a = b

console.log(a, b, c)

// RESPOSTA QUE APARECERÁ NO CONSOLE: 10, 10, 10

// ********************************************************************* //
// ****************** Exercícios de escrita de código ****************** //
// ********************************************************************* //

// ************************* EXERCÍCIO 01 ************************* //
let name
let age

console.log(typeof name, typeof age) 
//Typeof retorna undefined, pois as variáveis ainda não foram definidas

name = prompt("Qual o seu nome?");

age = prompt("Qual sua idade?");

console.log(typeof name, typeof age)
//Typeof retorna string, pois o valor armazenado na variável é um texto

console.log("Olá " + name + ", você tem " + age + " anos")

// ************************* EXERCÍCIO 02 ************************* //
let game = prompt("Qual seu jogo preferido?")
let color = prompt("Qual a sua cor favorita?")
let city = prompt("Qual a sua cidade natal?")
let school = prompt("Qual o nome do seu melhor amigo?")
let sport = prompt("Qual esporte você gosta de assistir?")

console.log("1. Qual seu jogo preferido?")
console.log(game)

console.log("2. Qual a sua cor favorita?")
console.log(color)

console.log("3. Qual a sua cidade natal?")
console.log(city)

console.log("4. Qual o nome do seu melhor amigo?")
console.log(school)

console.log("5. Qual esporte você gosta de assistir?")
console.log(sport)

// ************************* EXERCÍCIO 03 ************************* //
let food = ['Sushi', 'Churrasco', 'Pizza', 'Hamburguer', 'Lasanha']
console.log("Essas são as minhas comidas preferidas:")
console.log(food[0])
console.log(food[1])
console.log(food[2])
console.log(food[3])
console.log(food[4])

food[1] = prompt("Qual a sua comida preferida?")

console.log(food[0])
console.log(food[1])
console.log(food[2])
console.log(food[3])
console.log(food[4])

// ************************* EXERCÍCIO 04 ************************* //
const answer1 = prompt("Você está com uma camisa branca?")
const answer2 = prompt("Você está com fome?")
const answer3 = prompt("Você está triste?")

let answers = [true, true, false]

console.log("Você está com uma camisa branca?")
console.log(answers[0])

console.log("Você está com fome?")
console.log(answers[1])

console.log("Você está triste?")
console.log(answers[2])


