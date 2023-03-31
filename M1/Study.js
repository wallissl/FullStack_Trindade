// Módulo 01 - Semana 01 - Variáveis, operadores, estruturas relacionais e condicionais, function, GitHub, Scrum.

/*

console.log("Hello World"); // Mensagem simples para imprimir no console.

var meuObjeto = {
    nome:'Wallis',
    idade:30,
    endereco:"Rua Manoel Cardoso de Abreu",
    info : {

        olhos: 'castanhos',
        cor: 'azul'

    }
} // Criando um objeto e adicionando um objeto dentro dele.

console.log(meuObjeto.info.cor);

var minhaLista = ['Wallis',30,'Manoel Cardoso de Abreu'];
console.log(minhaLista[1]); // Criando um Array (lista)

// É possível misturar listas com objetos.
var alunos = [{
    nome: 'Wallis',
    sala: 3,
    idade: 7
    }, {
        nome: 'Ana',
        sala: 2,
        idade: 5
    },{
        nome: 'Kami',
        sala: 1,
        idade: 2,
    }
];

console.log(alunos[2].nome);

console.log( `O endereço da sua rua é: ${minhaLista[2]}`);



// Funções condicionais

let n1 = 19;
let n2 = 20;
if(n1 > n2){
    console.log('O número 1 é maior que o 2')
}else{
    console.log('O número 2 é maior que o 1')
} // If simples sobre estruturas condicionais

console.log(n1 > n2?  'o número 1 é maior que o 2' : 'O número 2 é maior que o 1') // Aqui foi utilizado o operador ternário, uma forma mais resumida de fazer um if e else.

let fruta = 'banana'

switch(fruta){
    case 'banana':
        console.log('Acertou');
    break;
    case 'maça':
        console.log('Maça é legal');
    break;
    default:
        console.log("Sem frutas no momento");    
} // Aqui temos uma estrutura switch case, utilizado para comprar condicionais com base e uma informação.



//Função void
numero1 = 30;
numero2 = 20;

function soma(){
    console.log(numero1 + numero2)
} // Aqui temos uma função sem retorno, void, é uma função sem retorno porque não retorna nada para o usuário além de uma informação, não tem uma interação direta com ele. Podemos utilizar esse tipo de função, por exemplo, em um site de compras quando o usuário clica em um botão e abre um leque de opções.

console.log(soma())

// Função com retorno

function soma(n1, n2){
var n1 = prompt('Digite o primeiro número');
var n2 = prompt('Digite o segundo número');
return alert(parseInt(n1)+parseInt(n2))
} // Aqui temos uma função que irá retornar um alert com a soma dos números que o usuário digitou, ou seja é uma função que precisará receber parâmetros.

soma();



//Módulo 01 - Semana 02 - Estrutura de repetição.

// Estruturas de repetição

var contador = 5;

for(var i = 0; i <= contador; i++){
    console.log(i);
} // Modelo típico do laço for, utilizado para repetir uma ação até que uma condição seja verdadeira.

numerosDaSorte = [7,8,9];

for(var i=0; i<numerosDaSorte.length; i++){
    console.log('O número da sorte é: ' + numerosDaSorte[i]);
} // For utilizado para percorrer uma arrei até que uma condição seja verdadeira e imprimir os itens.

numerosDaSorte.forEach((numero)=>{
    console.log('Os números são:', numero);
}) // ForEach, muito utilizado para simplificar o laço for tradicional, você pode percorrer uma array sem a necessidade de especificar o índice.



// Exemplo de utilização do forEach para tirar uma média.
const numeros = [10,10,10,10];
let somaNumeros = 0;

numeros.forEach((numero)=>{
    somaNumeros = somaNumeros + numero;
});

const media = somaNumeros / numeros.length;
console.log(media);



var contador = 0;
while(contador <5){
    console.log('contador:', contador);
    contador++
} // Aqui temos o while, enquanto, serve para realizar uma determinada ação até que uma condição seja verdadeira.

meuNumero = 0;
do{
    console.log('Aqui tem um laço com do: ' + meuNumero);
    meuNumero++
    
}while(meuNumero <3) // Aqui temos um modelo utilizando o do while, que é executado ao menos uma vez antes de entrar na repetição.

*/


