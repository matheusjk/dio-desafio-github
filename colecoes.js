// function getAdmins(map) {
//     let admins = []
//     for([key, value] of map){
//         if(value == 'Admin'){
//             admins.push(key)
//         }
//     }
//     return admins
// }

// const usuarios = new Map()

// usuarios.set("Luiz", 'Admin')
// usuarios.set("Lucas", 'Admin')
// usuarios.set("Pedro", 'Admin')
// usuarios.set("Natalia", 'User')


// console.log(getAdmins(usuarios))


const meuVetor = [30, 30, 52, 8, 9, 78, 0, 2048, 4096, 512]

function valoresUnicos(arr){
    const meuValor = new Set(arr)
    meuValor
    return [...meuValor] // usando o argumento spread ...
}

console.log(valoresUnicos(meuVetor))


