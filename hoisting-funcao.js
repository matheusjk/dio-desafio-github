function fn() {
    log("Hoisting de função")

    function log(valor) {
        console.log(valor)
    }

    
}

fn()