/* Dada a seguinte lista, de forma decrescente, retorne os dados das 2 listas de forma agrupada, pela seguinte ordem.

usuarios - Crescente: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

frutas - Descrescente:[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” , “Laranja“]

Resultado esperado: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ] */

let lista1 = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
let lista2 = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja'];

lista2.reverse();
let novaLista = [];

for(var i=0; i<lista1.length; i++){
    novaLista.push(lista1[i] + " - " + lista2[i])
}

console.log(novaLista);

