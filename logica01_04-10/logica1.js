/**
 * 1. Invertendo uma String
    Escreva uma função que inverte uma string sem usar métodos prontos como reverse().
 */

function reverseString(str){
    let reverse = ''
    for(let i = str.length - 1; i >= 0; i--){
        reverse = reverse + str[i]
    }
    return reverse
}

console.log(reverseString('Jonas'))

function reversoDoInverso(str){
    let reversao = ''
    for(let i = str.length - 1; i >= 0; i--){
        reversao = reversao + str[i]
    }
    return reversao
}

console.log(reversoDoInverso('BootCamp'))



function nomeReverso(str){
    let reverso = ''
    for(let i = str.length - 1; i >= 0; i--){
        reverso = reverso + str[i]
    }
    return reverso
}

console.log(nomeReverso('adasir uod ue ,sohlif maçaf euq ,marrom euq mim roP .adan melav oãn sortuo so sodot ,etnasnep etnem a rolav uod óS'))

/*
    2. Encontrar o Segundo Maior Número
    Dado um array de números, crie uma função que encontre o segundo maior número sem utilizar a função sort().
 */


function segundoMaiorNumero(arr){
    let maiorNumero = null
    let segundoNumero = null

    for(let num of arr){
        if(num > maiorNumero){
            segundoNumero = maiorNumero
            maiorNumero = num
        } else if(num > segundoNumero && num !== maiorNumero){
            segundoNumero = num
        }
    }
    return segundoNumero
}

console.log(segundoMaiorNumero([10, 11, 12, 13, 14, 15]))






function segundoMaiorNome(nomePequeno, nomeGrande){
    let nome1 = nomePequeno
    let nome2 = nomeGrande
    for(let nome of nomePequeno )
        if(nome > nomePequeno.length){
            nome2 = nome1
            nome1 = nome
        } else if(nome > nome2 && nome2 !== nome1){
            nome2 = nome
        }
        return nome2
}

console.log(segundoMaiorNome(['Jonas', 'Rafael', 'Ana']))