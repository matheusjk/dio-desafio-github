// retorna o tamanho de uma string
const textSize = "Texto".length
console.log(`Quantidade de letras: ${textSize}`)


// reotrna um array quebrando a string por um delimitador
const splittedTexto = "Texto".split('x')
console.log("\n Array com as posições separadas pelo delimitador: ", splittedTexto)


// busca por um valor e sbstitui por outro
const replacedTexto = "Texto".replace("Texto", 'ola')
console.log("\n Substituição de valor", replacedTexto)

// retorna a "fatia" de um valor
const ultimoCaracter = 'Texto'.slice(-1)
console.log("\n Ultima letra de uma string:", ultimoCaracter)

const todosSemUltimoCaracter = 'Texto'.slice(0, -1)
console.log("\n Valor da string da primeira letra menos a ultima:", todosSemUltimoCaracter)

const segundoAteFim = 'Texto'.slice(1)
console.log('\n Valor da string da segunda letra até a última:', segundoAteFim)

// retorna N carateres a partir de uma posição
const doisCaractereDepoisPrimeiraPos = 'Texto'.substring(0, 2)
console.log("\n As duas letras primeiras são:", doisCaractereDepoisPrimeiraPos)