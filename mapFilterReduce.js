
// const maca = {
//     value: 2,
// }

// const laranja = {
//     value: 3,
// }


// function mapComThis(arr, thisArg) {
//     return arr.map(function(item) {
//         return item * this.value
//     }, thisArg)
// }

// const numeros = [1, 2]

// console.log('this -> maçã', mapComThis(numeros, maca))

// console.log('this -> laranja', mapComThis(numeros, laranja))





// function mapSemThis(arr) {
//     return arr.map(function(item){
//         return item * 2
//     })
// }

// const num = [2, 4, 6, 8, 10]

// console.log(mapSemThis(num))
// console.log(num)







// function filtraPares(arr) {
//     return arr.filter(callback)
// }


// function callback(item) {
//     return item % 2 !== 0
// }

// const numeros= [2, 4, 5, 55, 29, 37, 8]

// console.log(filtraPares(numeros))





// function somaNumeros(arr) {
//     return arr.reduce(function(valorAnterior, valorAtual){
//         console.log({valorAnterior})
//         console.log({valorAtual})
//         return valorAnterior + valorAtual
//     }, 0)
// }


// const arr = [1, 2]

// console.log(somaNumeros(arr))







const lista = [
    {
        name: 'sabao em po',
        preco: 22
    }, 
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
]

const saldoDisponel = 100

function calculaSaldo(saldoDisponel, lista) {
    return lista.reduce(function(valorAnterior, valorAtual, index){
        console.log('rodada', index + 1)
        console.log({valorAnterior})
        console.log({valorAtual})
        return valorAnterior - valorAtual.preco
    }, saldoDisponel)
}

console.log(calculaSaldo(saldoDisponel, lista))