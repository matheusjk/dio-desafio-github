// const alunos = [
//     {
//         nome: 'João',
//         nota: 5,
//         turma: '1B'
//     },
//     {
//         nome: 'Sofia',
//         nota: 9,
//         turma: '1B'
//     },
//     {
//         nome: 'Paulo',
//         nota: 6,
//         turma: '2C'
//     },
//     {
//         nome: 'Miguel',
//         nota: 3,
//         turma: '2C'
//     }
// ]

// function alunosAprovados(vetor, media){
//     let aprovados = []
//     for(let i = 0; i< vetor.length; i++){
    
//         const {nota, nome} = vetor[i]  // object destructing

//         if(nota >= media){
//             aprovados.push(nome)
//         }
//     }
//     return aprovados
// }

// console.log(alunosAprovados(alunos, 5))


function calculaIdade(anos){
    return `Daqui a ${anos} anos , ${this.nome} terá ${this.idade + anos } anos de idade`
}

// const pessoa1 = {
//     nome: "Maria",
//     idade: 30
// }

// const pessoa2 = {
//     nome: "Carla",
//     idade: 20
// }

// const pessoa3 = {
//     nome: "Fiona",
//     idade: 22
// }

// const animal = {
//     nome: "Juquinha",
//     idade: 2,
//     raca: 'viralata'

// }

// console.log(calculaIdade.apply(pessoa3, [3]))


function palindromo(palavra){
    // if(palavra === palavra.split("").reverse("").join("")){
    //     return "É palindromo"
    // }else {
    //     return "Não é palindromo"
    // }

    var resultado = palavra.localeCompare(palavra)
    if(resultado === 0){
        return "É palindromo"
    }else {
        return "Não é palindromo"
    }
}


console.log( palindromo("pipoca") )
