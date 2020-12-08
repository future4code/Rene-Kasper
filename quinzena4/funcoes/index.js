console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// ********************************************************************* //
// ******************** Exercícios de interpretação ******************** //
// ********************************************************************* //

// *************************** EXERCÍCIO 01 **************************** //

/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/

//A. A função retorna o valor passado, multiplicado por 5, logo serão impressos no console os valores 10 e 50.
//B. Nada aconteceria na parte visual (console e navegador), mas a função executaria o proposto, apenas não exibindo o valor ao usuário.

// *************************** EXERCÍCIO 02 **************************** //

/*
    let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

    const outraFuncao = function(array) {
        for (let i = 0; i < 2; i++) {
            console.log(array[i])
        }
    }

    outraFuncao(arrayDeNomes)
*/

//A. A função procura quais os index menores que dois (0 e 1) e puxa os dados deles.
//B A função retornará no console Amanda e Caio.

// *************************** EXERCÍCIO 03 **************************** //

/*
    const metodo = (array) => {
    let arrayFinal = [];
  
        for (let x of array) {
            if (x % 2 === 0) {
            arrayFinal.push(x * x)
            }
        }
  
    return arrayFinal;
    }
*/

  //A função separa os valores que são números pares de uma array e obriga o valor a ser multiplicado por ele mesmo.
  //Sugestão de nome: Multiplicador de pares.

// ********************************************************************* //
// *********************** Exercícios de Escrita *********************** //
// ********************************************************************* //

// *************************** EXERCÍCIO 04 **************************** //

//A
/*
function about() {
    console.log("Eu sou o Rene, tenho 24 anos, moro em Porto Alegre e sou estudante.")
}

about()
*/

//B
/*
function about(name, age, city, student) {
    let estuda
    if (student === true) {
        estuda = "sou"
    } else {
        estuda = "não sou"
    }
    console.log("Eu sou " + name + ", tenho " + age + " anos, moro em " + city + " e " + estuda + " estudante.")
}

about("Rene", 23, "Porto Alegre", true)
*/

// *************************** EXERCÍCIO 05 **************************** //
//A
/*
function sum (a, b) {
    return a + b;
}

console.log(sum(5, 3))
*/

//B
/*
function comparador(a, b) {
    if (a > b) {
        return true
    } else {
        return false
    }
}

console.log(comparador(4, 3))
*/

//C
/*
function repetidor(string) {
    let loop = 0
    const text = string
    
    while (loop < 10) {
        console.log(text)
        loop++
    }
}

repetidor("Teste maluco")
*/

// *************************** EXERCÍCIO 06 **************************** //
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//A
/*
function contador(x) {
    const tamanho = x.length
    console.log(tamanho)
}

contador(array)
*/

//B
/*
function par(x) {
    if (x %2 === 0) {
        return true
    } else {
        return false
    }
}
*/

//C

/*
function pares(x) {
    for (let i = 0; i < array.length; i++) {
        while (array[i] % 2) {
            array.splice(i, 1);
        }
    }
    console.log(array)
}

pares(array)
*/

//D
/*
function par(y) {
    if (y %2 === 0) {
        return true
    } else {
        return false
    }
}

function pares(x) {
    for (let i = 0; i < array.length; i++) {
        while (par(array[i]) === false) {
            array.splice(i, 1);
        }
    }
    console.log(array)
}

pares(array)
*/

// ********************************************************************* //
// ***************************** DESAFIOS ****************************** //
// ********************************************************************* //

// *************************** DESAFIO 01 **************************** //

/*
function imprimir(n) {
    console.log(n)
}

function soma(x, y) {
    const z = x + y
    imprimir(z)
}

soma(2, 2)
*/

// *************************** DESAFIO 02 **************************** //
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

//A
/*
function pares(x) {
    for (let i = 0; i < x.length; i++) {
        while (x[i] % 2) {
            x.splice(i, 1);
        }
        x[i] = x[i]*2
    }
    console.log(x)
}

pares(numeros)
*/

//B
/*
function getMax(array) {
    return Math.max.apply(null, array);
}

console.log(getMax(numeros))
*/

//C
/*
function getMin(array) {
    return Math.min.apply(null, array);
}

console.log(getMin(numeros))
*/

//D
/*
function invert(array) {
    return numeros.reverse();
}

console.log(invert(numeros))
*/