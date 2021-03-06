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

//EXERCÍCIO 02
function criaRetangulo(lado1, lado2) {
    let retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2*(lado1 + lado2),
        area: (lado1*lado2)
    }
    return retangulo;
}
console.log(criaRetangulo(10, 15))

//EXERCÍCIO 03
function filmeFavorito() {
    const filme = {
        titulo: "Na Natureza Selvagem",
        ano: "2007",
        diretor: "Sean Penn",
        elenco: ["Emile Hirsch", "Kristen Stewart"]
    }
    console.log("Venha assistir ao filme " + filme.titulo + " de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.elenco[0] + " e " + filme.elenco[1] + "!")
}

//EXERCÍCIO 04
const pessoacriada = {
    nome: "Érico Veríssimo",
    email: "ericoverissimo@gmail.com",
    endereco: "Porto Alegre"
}
console.log(pessoacriada)

function anonimizarPessoa() {
    const anonimo = {
        ...pessoacriada,
        nome: "Anônimo"
    }
    console.log(anonimo)
}

anonimizarPessoa()

// ********************* EXERCÍCIOS DE FUNÇÕES DE ARRAYS ********************** //
//EXERCÍCIO 01
const pessoas = [
    { nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const adultos = pessoas.filter((pessoa) => {
    return pessoa.idade >= 20
});

const criancas = pessoas.filter((pessoa) => {
    return pessoa.idade < 20
});

console.log(adultos)
console.log(criancas)

//EXERCÍCIO 02
const valores = [1, 2, 3, 4, 5, 6]
const valoresDobrados = valores.map(dobrar)
const valoresTriplicados = valores.map(triplicar)
const parImpar = valores.map(parOuImpar)

function dobrar(n) {
    return n * 2;
}

console.log(valoresDobrados)

function triplicar(n) {
    return n * 3;
}

function parOuImpar(n) {
    if(n % 2 === 0) {
        return n, " é par"
    } else {
        return n, " é impar"
    }
}

console.log(valoresTriplicados)
console.log(parImpar)

//EXERCÍCIO 03
const visitantes = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const permitido = visitantes.filter((visitante) => {
    if((visitante.altura >= 1.5) && (visitante.idade >= 14) && (visitante.idade < 60)) {
        return true
    } else {
        return false
    }
})

const naoPermitido = visitantes.filter((visitante) => {
    if((visitante.altura < 1.5) || (visitante.idade < 14) || (visitante.idade > 60)) {
        return true
    } else {
        return false
    }
})

console.log(permitido)
console.log(naoPermitido)

//EXERCÍCIO 04
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const confirmadas = consultas.map((paciente) => {
    if(paciente.cancelada === true) {
        if (paciente.genero === "masculino") {
            return "Olá, Sr. ${ nome da pessoa }. Estamos enviando esta mensagem para ${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse o recebimento deste e-mail."
        } else if (paciente.genero === "feminino") {
            return "Olá, Sra. ${ nome da pessoa }. Estamos enviando esta mensagem para ${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse o recebimento deste e-mail."
        }
    } else if(paciente.cancelada === false) {
        if (paciente.genero === "masculino") {
            return "Olá, Sr. ${ nome da pessoa }. Infelizmente, sua consulta marcada para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la"
        } else if (paciente.genero === "feminino") {
            return "Olá, Sra. ${ nome da pessoa }. Infelizmente, sua consulta marcada para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la"
        }
    }
});

//EXERCÍCIO 05
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function saldo() {
    contas.forEach((cliente) => {
    let gastos = 0
        for(let gasto of cliente.compras) {
            gastos += gasto
        }
        cliente.saldoTotal -= gastos
    })
    return contas
}

console.log(saldo())