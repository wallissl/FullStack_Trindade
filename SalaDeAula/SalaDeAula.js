
// ---------------------  AULA 13/02/23 - M1S3A1 - FUNÇÕES DE ARRAY  ---------------------


/* // Minha lista
// let copa2026 = ["Brasil","França","Alemanha","Italia"];


// Comando que serve para você adicionar mais um nome ao final da lista
// copa2026.push("Argentina");


// Comando que serve para você adicionar mais um nome no início da lista
//copa2026.unshift("Campeche");


// Comando que serve para você adicionar mais um conteúdo no meio do código - Sendo o primeiro comando para informar o número do índice onde será adicionado, o segundo é o número de itens após o índice que será apagado e o último é a informação que será inserida.
//copa2026.splice(3,0,"Equador");

// Comando que serve para você remover o último elemento do array
//copa2026.pop();

//console.log(copa2026);  

 Exemplo do uso novamente do forEach
    copa2026.forEach( (time) => {
    console.log(time);
}) 

 // Pegando a lista criada em HTML
let list = document.getElementById("list");

// Inserindo elementos dentro da lista
    copa2026.forEach( (time) => {
    let li = document.createElement("li");
    li.innerText = time
    list.appendChild(li)
}); 

//Transcrever array - Você pode criar uma nova lista através de uma já pronta alterando os valores
const numeros = [1,2,3,4,5,6,7,8,9];
const dobro = numeros.map( (numero) => {
    return numero *2;
})
console.log (dobro); */


/* // Filtrar Array - Você pode criar um filtro onde só passar quem tiver uma determinada condição que você determine
const numeros = [1,2,3,4,5,6,7,8,9];
const menorQueCinco = numeros.filter( (numero) => {
    return numero < 5
})
console.log(menorQueCinco); */


/* // Testar uma lista, saber se todos os itens de um array é um número por exemplo (Um detalhe quando você não utiliza as chaves dentro de um arrow function ele se torna uma função explicita que é realizado com apenas uma linha.). 
const numeros = [1,2,3,4,5,6,7,8,9];
console.log( numeros.every( (num) => num < 40 )) */


// ---------------------  AULA 14/02/23 - M1S3A2 - REDUZIR UM ARRAY - MODELARIZAÇÃO  ---------------------

/* console.log("Hello");

const carteiras = [29.55,41.22,33.54,12.12];

const carteiraTotal = carteiras.reduce((acumulador,valorAtual) =>{
    return acumulador = acumulador + valorAtual;
})

console.log(carteiraTotal); */

/* const carteiras = [29.55,41.22,33.54,12.12];

const carteiraTotal = carteiras.reduce((acumulador,valorAtual, indiceAtual, array) =>{
    acumulador += valorAtual;
    if (indice === array.length -1) {
        return acumulador / array.length;
    }else{
        return acumulador;
    }
}) */


// MÓDULOS -- Utilizamos para poder importar e exportar conteúdos entre os nossos arquivos.

/* import {aluno, boaNoite, meuNome} from './variables.js';

import imprime from './variables.js';

console.log(aluno, boaNoite)
meuNome();

imprime();

// Outra forma 

import * as variaveis from "./variables.js"

console.log(variaveis.aluno); */



/* tarefasDiarias.forEach(tarefas => {
    console.log(tarefas);
}); 

// ---------------------  AULA 16/02/23 - M1S3A2 - TRABALHANDO COM PROMESSAS  ---------------------

console.log("Hello");
const somaDoisNumeros = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(a+b);
        },2000)
    });
};

somaDoisNumeros(3,1).then((soma) => console.log(soma)); */