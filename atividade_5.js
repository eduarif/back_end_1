var idade1 = 14
var idade2 = 17
var idade3 = 36


/* if (idade1 < 16) {
    console.log ("Não pode votar")
} else if (idade1 >= 18) {
    console.log ("Voto obrigatório.")
}else {
    console.log  ("Voto opcional.")
}

if (idade2 < 16) {
    console.log ("Não pode votar")
} else if (idade2 >= 18) {
    console.log ("Voto obrigatório.")
}else {
   console.log ("Voto opcional.")
}

if (idade3 < 16) {
    console.log ("Não pode votar")
} else if (idade3 >= 18) {
    console.log ("Voto obrigatório.")
}else {
    console.log ("Voto opcional.")
} */

function verificarIdadeVoto (idade){
    if (idade < 16) {
        console.log ("Não pode votar")
    } else if (idade >= 18) {
        console.log ("Voto obrigatório.")
    }else {
        console.log  ("Voto opcional.")
    }
}

verificarIdadeVoto(idade1)
verificarIdadeVoto(idade2)
verificarIdadeVoto(idade3)