function numerosPares(array){
    if(!array || !array.length){
        return -1
    }
    for(let linha in array){
        if(array[linha] % 2 === 0 && array[linha] != 0){
            array[linha] = 0
        }
    }
    return array    

}



console.log(numerosPares([2, 5, 6, 9, 77, 25, 20, 14, 49, 46, 33, 0]))