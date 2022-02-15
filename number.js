const numero = 12.5509

// transformar numero p/ string
const numberParaString = numero.toString()
console.log("Número transformado em string", typeof numberParaString)

// retorna número com um número de casas decimais
const fixedDuasDecimais = numero.toFixed(2)
console.log("\n Número com as duas casas decimais:", fixedDuasDecimais)

// transforma uma string em float
console.log("\n String parseada p/ float", parseFloat('13.22'))


// transforma uma string em int
console.log('\n string parseada p/ int: ', parseInt("13.99"))


