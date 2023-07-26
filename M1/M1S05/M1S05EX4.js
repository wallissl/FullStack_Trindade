/* Utilizar o array de objetos:

[
{nome: "luis", idade: 26},
{nome: "norma", idade: 16},
{nome: "daiana", idade: 26},
{nome: "jorge", idade: 16},
{nome: "kauan", idade: 16},
{nome: "charles", idade: 26},
{nome: "marco", idade: 16},
{nome: "bruno", idade: 16}
]

Retornar uma lista separada pelos usuários com idades menores de 18 e outra com os usuários maiores ou iguais a 18. */

let dadosUsuarios = [
    {nome: "Luis", idade:16},
    {nome: "norma", idade: 16},
    {nome: "daiana", idade: 26},
    {nome: "jorge", idade: 16},
    {nome: "kauan", idade: 16},
    {nome: "charles", idade: 26},
    {nome: "marco", idade: 16},
    {nome: "bruno", idade: 16}
]

let maiores = [];
let menores = [];

dadosUsuarios.forEach((e) => {

    if(e.idade <18){
        menores.push(e)
    }else{
        maiores.push(e)
    }    
})

var menoresJson = JSON.stringify(menores);
var maioresJson = JSON.stringify(maiores);

console.log(`Clientes menores de idade:\n${menoresJson}\n\nClientes maiores de idade:\n${maioresJson}`)
//console.log(`Clientes menores de idade:\n${maioresJson}`)
