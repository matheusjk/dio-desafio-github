var currentNumberWrapper = document.getElementById('currentNumber')

var btnIncremento = document.getElementsByName("adicionar")[0]

var currentNumber = 0

// var btnIncremento = document.querySelectorAll("button[name='adicionar']")

document.addEventListener('click', function(evento) {
    if(evento.target.name == "adicionar"){
        // btnIncremento.disabled = false
        incremento()
        
    }else {
        btnIncremento.disabled = false
        decremento()
    }
})

function incremento(){
    if(currentNumber <= 15){
        // currentNumberWrapper.style.color = 'black'
        currentNumber = currentNumber + 1
        currentNumberWrapper.innerHTML = currentNumber
        btnIncremento.disabled = false
    }else {
        btnIncremento.disabled = true;
    }
    
}

function decremento(){
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
}



function recebeNumeros(a, b){
    soma = a + b
    if(a === b){
        return "Numeros são iguais"
    }else if(soma > 10){
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20` 
    }else if(soma < 20){
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20` 
    }
}

