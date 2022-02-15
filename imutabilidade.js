const user = {
    name: "Matheus",
    ultimoNome: "Hilario"
}

function pegaNome(user) {
    return { 
        user,
        nomeCompleto: `${user.name} ${user.ultimoNome}`
    }
}

const usuarioNomeCompleto = pegaNome(user)

console.log(usuarioNomeCompleto, user)

