var cor_do_item1 = "verde"
var cor_do_item2 = "azul"
var cor_do_item3 = "amarelo"
var cor_do_item4 = "vermelho"

function verificarPreco (cor){
    if (cor === "verde") {
        console.log ("O preço é R$10,00")
    } else if (cor === "azul") {
        console.log ("O preço é R$20,00")
    } else if (cor === "amarelo") {
        console.log ("O preço é R$30,00")
    } else if (cor === "vermelho") {
        console.log ("O preço é R$40,00")
    }
}

verificarPreco("verde")
verificarPreco("azul")
verificarPreco("amarelo")
verificarPreco("vermelho")