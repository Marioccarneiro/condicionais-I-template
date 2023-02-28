// exericio 1 condicao simples

// const velocidade = 15
// console.log(A sua velocidade e ${velocidade})

// console.log(Voce esta a cima da velocidade maximo permitida.)


// if(velocidade > 80){
//     console.log(Voce esta a cima da velocidade maximo permitida.)

// }

// //exercicio condicao composta

// const estaChovendo = true

// if(estaChovendo) {
//     console.log(As roupas estao no varal)
// } else {
//     console.log(Bora surfar, esta sol)
// }


// Pratica Guiada 1 - A

const boolean1 = false
const boolean2 = true

// if (boolean1) {
//     alert(`Boolean 1 é TRUE.`)
    
// } else { 
//     alert(`Boolean 1 é FALSE.`)
// }

// Pratica Guiada 1 - B

const boolean3 = false

if (boolean1 === boolean2) {
//     alert(`Boolean 1 e Boolean 2 são IGUAIS!`)
// } else if (boolean2 === boolean3) {
//     alert(`Boolean 2 e Boolean 3 são IGUAIS!`)
// } else if (boolean1 === boolean3) {
//     alert(`Boolean 1 e Boolean 3 são IGUAIS!`)
// } else {
//     alert(`Não existem valores iguais!`)
}

const temOvo = true
const temFarinha = true
const temLeite = true
const temAcucar = true

/*
if (!temOvo) {
    console.log(`OVO:` , temOvo)
    console.log(`Nao tem ovo, deixa queto.`)
} else if (!temFarinha) {
    console.log(`FARINHA:` , temFarinha)
    console.log(`Tem ovo, mas não tem farinha. Deixa quieto.`)
} else if (!temLeite) {
    console.log(`LEITE:` , temLeite)
    console.log(`Mesmo com ovo e farinha, não tem leite`)
} else if (!temAcucar) {
    console.log(`ACUCAR:` , temAcucar)
    console.log(`Temos leite, ovos e farinha mas não tem acucar.`)
} else {
    console.log(`AGORA VAI TER BOLINHO!`)
}
*/

// Pratica Guiada 2

const idade = 29

// if (idade < 16) {
//     console.log(`Você NÃO pode votar.`)
// } else if (idade < 18 || idade >= 70){
//     console.log(`Você PODE votar. - facultativo`)
// } else if (idade >= 18) {
//     console.log(`Você DEVE votar.`)
// } else {
//     console.log(`Dado inválido`)
// }

// Pratica Guiada 3

const media = 11

    if (media >= 5 && media <= 10){
    console.log(`APROVADO`) 
    } else if (media >= 3) {
    console.log(`RECUPERACAO`)
    }else if (media < 3 && media > 0) { 
    console.log(`REPROVADO`) 
    }else {
    console.log(`Dado Invalido`)
}
