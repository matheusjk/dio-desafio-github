function tamanhoVetor(vetor, tamanho){
    try{
        if(!vetor && !tamanho){
            throw new ReferenceError("Erro função precisa de parametros p/ funcionar")
        } else if(typeof vetor != "object" ){
            throw new TypeError("Array precisar ser do tipo object")
        } else if(typeof tamanho != "number"){
            throw new TypeError("Numero precisa ser do tipo number")
        } else {
            if (vetor.length == tamanho){
                return vetor
            }else {
                throw new RangeError("Tamanho do vetor não é o mesmo do numero enviado")
            }

        }

    }catch(error){
        if(error instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!")
            console.log(error.name)
            console.log(error.message)
        }else if( error instanceof  TypeError){
            console.log("Este erro é um TypeError!")
            console.log(error.name)
            console.log(error.message)
        }else if(error instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(error.name)
            console.log(error.message)
        }else{
            console.log("Tipo de rerro não esperado: " + error)
        }
    }
}

array = [5, 8, 27, 99, 122, 32 ]
console.log(array.length)
console.log( tamanhoVetor(array, 6) )

