// var j = 0;

// var desconto = 0.2;
// const PRECO = 2;

// var total = PRECO - desconto; 

// alert(total)

// function soma(a, b) {
//     console.log(a + b);
//     return a +b;
// }

// soma(12, 2)


// function returnaValoresPares(array){
//     let lista = []
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             lista.push(array[i])
//         }
//     }
//     console.log(lista)
// }

// let valores = [15, 6, 7, 8, 9, 12, 14, 2, 0, 55] 

// returnaValoresPares(valores)


// var primeiroNome = "João"
// var ultimoNome = "Souza"

// if(primeiroNome === 'João'){
//     let ultimoNome = 'Rodrigues'
//     var primeiroNome = "Pedro"
//     ultimoNome = 'Silva'

//     console.log(ultimoNome)
// }

// console.log(primeiroNome, ultimoNome)


// vetores ou arrays
// let array = ['string', 1, true]
// console.log(array)



// forEach() - itera um array 
// push() - add item no final do array
// pop() - remove item no final do array
// shift() - remove item no inicio do array
// unshift() - add item no inicio do array
// indexOf() - retorna o indice de um valor
// splice() - remove ou substitui um item pelo indice
// slice() - retorna uma parte de um array existente
// 


// let array = ['string', 1, ['array1'], ['array2'], ['array3']]
// console.log(array)

// forEach
// array.forEach(function(item, index){ console.log(item, index) })

// push
// array.push(22)
// console.log(array)

// pop
// array.pop()
// console.log(array)

// shift
// array.shift()
// console.log(array)

// unshift
// array.unshift(220)
// console.log(array)

// indexOf
// console.log(array.indexOf(1))

// splice
// array.splice(0, 3)
// console.log(array)


// slice
// let novoArray = array.slice(0, 3)
// console.log(novoArray)


let object = {string: 'qualquercoisa', number: 1, boolean: true, array: ["array"], objectInterno: {
    objectInterno:"objeto interno"}
}
// console.log(object.objectInterno)

// var string = object.string
// console.log(string)

// var arrayInterno = object.array
// console.log(arrayInterno)

// var {string, number, boolean, objectInterno} = object
// console.log(string, number, boolean, objectInterno)

// var jogador1 = 0
// var jogador2 = 1
// var placar;

// jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são validos") : console.log("Jogadores Invalidos")


// if(jogador1 > 0 && jogador2 == 0){
//     console.log('Jogador 1 marcou ponto!')
//     placar = jogador1 > jogador2

// }else if(jogador2 > 0 && jogador1 == 0){
//     console.log('Jogador 2 marcou ponto!')
//     placar = jogador1 < jogador2

// }else {
//     console.log('Ninguem marcou ponto!')
// }

// // alert(placar)

// switch (placar) {
//     case placar = jogador1 > jogador2:
//         // alert(placar)
//         console.log("Jogador 1 ganhou")
//         break;
//     case placar = jogador2 > jogador1:
//         console.log("Jogador 2 ganhou")
//         break;
//     default:
//         console.log('Ninguem ganhou')
//         // break;
// }


let array = ['valor1', 'valor2', 'valor3', 'valor4']

let objectLoop = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}


// for - executa uma instrução até que ela seja falsa
// for(let indice = 0; indice < array.length; indice++ ){
//     console.log(indice)
// }

// for/in executa repetição a partir de uma propriedade
// for(let i in array){
//     console.log(i)
// }

// com object
// for(i in objectLoop){
//     console.log(i)
// }

// for/of executa repetiçã a partir de valor - imprimindo os indices - for/of não funciona com objetos pois as propriedades variam
// for(i of array){
//     console.log(i)
// }


// com object
// for(i of objectLoop.propriedade1){
//     console.log(i)
// }

// var a = 0

// while(a < 10){
//     a++
//     console.log(a)
// }



function calculadora(){
    const operacao = prompt("Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n - 3 - multiplicação(*) \n 4 - Divisão Real(/) \n 5 - Divisão Inteiro(%) \n 6 - Potenciação(**)")

    let n1 = prompt('Insira o primeiro valor: ')
    let n2 = prompt('Insira o segundo valor: ')
    let resultado

    function soma(){
        n1 = typeof(n1) != 'number' ? Number(n1) : alert('aceitamos somente numeros!!!')
        n2 = typeof(n2) != 'number' ? Number(n2) : alert('aceitamos somente numeros!!!')
        resultado = n1 + n2
        // alert(typeof(resultado))
        isNaN(resultado) ? alert('aceitamos somente numeros!!!') : alert(`${n1} + ${n2} = ${resultado}`)      
    }

    function subtracao(){
        n1 = typeof(n1) != 'number' ? Number(n1) : alert('aceitamos somente numeros!!!')
        n2 = typeof(n2) != 'number' ? Number(n2) : alert('aceitamos somente numeros!!!')
        resultado = n1 - n2

        isNaN(resultado) ? alert('aceitamos somente numeros!!!') : alert(`${n1} - ${n2} = ${resultado}`)
    }

    function multiplicacao(){
        n1 = typeof(n1) != 'number' ? Number(n1) : alert('aceitamos somente numeros!!!')
        n2 = typeof(n2) != 'number' ? Number(n2) : alert('aceitamos somente numeros!!!')
        resultado = n1 * n2
        isNaN(resultado) ? alert('aceitamos somente numeros!!!') :  alert(`${n1} * ${n2} = ${resultado}`)
    }

    function divisaoReal(){
        n1 = typeof(n1) != 'number' ? Number(n1) : alert('aceitamos somente numeros!!!')
        n2 = typeof(n2) != 'number' ? Number(n2) : alert('aceitamos somente numeros!!!')
        resultado = n1 / n2

        isNaN(resultado) ? alert('aceitamos somente numeros!!!') : alert(`${n1} / ${n2} = ${resultado}`)
    }

    function divisaoInteira(){
        n1 = typeof(n1) != 'number' ? Number(n1) : alert('aceitamos somente numeros!!!')
        n2 = typeof(n2) != 'number' ? Number(n2) : alert('aceitamos somente numeros!!!')
        resultado = n1 % n2

        isNaN(resultado) ? alert('aceitamos somente numeros!!!') : alert(`${n1} % ${n2} = ${resultado}`)
    }

    function potenciacao(){
        n1 = typeof(n1) != 'number' ? Number(n1) : alert('aceitamos somente numeros!!!')
        n2 = typeof(n2) != 'number' ? Number(n2) : alert('aceitamos somente numeros!!!')
        resultado = n1 ** n2

        isNaN(resultado) ? alert('aceitamos somente numeros!!!') : alert(`${n1} ** ${n2} = ${resultado}`)
    }

    if(operacao == 1){
        soma()
    }else if (operacao == 2){
        subtracao()
    }else if(operacao == 3){
        multiplicacao()
    }else if(operacao == 4){
        divisaoReal()
    }else if(operacao == 5){
        divisaoInteira()
    }else if(operacao == 6){
        potenciacao()
    }


}


var continua = "SIM";

while(continua.toUpperCase() == "SIM"){
    calculadora()
    continua = prompt("Deseja continuar (sim) || (nao) ??")
}
