/* Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria', 'Luis’, 'Danilo’, 'José’]

Através de lógica de programação, remova os duplicados e exiba quais nomes que estavam duplicados e a nova lista sem eles.

Exemplo:

José, Danilo, ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria', 'Luis’]

‌

Regra 1: Não é necessário nenhum envio de dados.

Regra 2: Deve remover somente os duplicados, e deixar uma lista com os items únicos

Regra 3: Exibir o resultado dos deletados conforme no exemplo. Printar os dados que foram deletados e exibir a lista sem duplicados. */

let lista1 = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];

let novaLista = [];
let duplicados = [];

for(let i=0; i<lista1.length; i++){

    if(!novaLista.includes(lista1[i])){
        novaLista.push(lista1[i])
    }else{
        duplicados.push(lista1[i])
    }
}

console.log(duplicados + " [" + novaLista + "]")

