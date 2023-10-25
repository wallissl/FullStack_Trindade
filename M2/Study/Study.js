/* INÍCIO DOS ESTUDOS EM HTML - M2 S2A4 */ 

// Podemos utilizar os elementos get e querySelector para capturar elementos no html para o Js

/*
    // HTML <button id="meuBotao">Enviar</button>
    document.getElementById("meuBotao"); // Pegar um item
    document.querySelector(".") // Pegar um item
    document.querySelectorAll(".") // Pegar vários itens
*/

//Aqui temos um exemplo de como referênciar o ID que está no HTML para executar uma função ou apenas instânciar a função "oi" referênciando dentro do próprio HTML para realizar a ação do evento que está no javascript: 

/* 
    // atribuindo o Id meuOutroButton para a variável button;
    const button = document.getElementById("meuOutroButton");
    //função atribuida ao evento addEventListener 'click'
    button.addEventListener('click', event => {
        console.log('Você clicou');})

    // Outra forma é você adicionar o evento a variável e chamar a função 'oi' fora da função addEventListener
    // button.addEventListener('click', oi);
        

    function oi(){
        console.log('Você clicou')
    } 
*/
 
/* 
// Forms S2A4 - Aqui vamos capturar os dados enviados pelos campos do formulário através da função 'enviarFormulario'

function enviarFormulario(event){
    event.preventDefault(); // Evitar o comportamento padrão do forms que tenta encontrar um metodo de envio e uma ação - get post e mostra as informações enviadas na url.

    // Pegar o valor digitado nos campos do formulário (html)
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Mensagem para imprimir
    console.log('Nome: ',nome);
    console.log('Email: ', email);
    console.log('Mensagem: ',mensagem);

    // Caso queira atribuir as informações em um objeto.
        const usuario = {
        nome: nome,
        email: email,
        mensagem: mensagem
    }   
} */

// -------------------------------------------------------------

//  S3A1 - Trabalhando mais com eventos

/*

// Podemos utilizar um contador para veficiar quantas vezes as teclas foram pressionadas.
let contador =0;
function verificarTecla(e){
    console.log(e)
    contador += 1;
    console.log(contador) 
} */

// Trabalhando com Arrow function

/*
let botao = document.getElementById('btnEntrar');

botao.addEventListener('click', ()=> {
    console.log('Você clicou') // Essa função que é acionada após o click é chamada de callback
}) */

// Agora um exemplo da função sendo trabalhada de forma normal

document.addEventListener('click',voceClicou) // Nesse caso estou chamando qualquer click que houver o document

function voceClicou(){
    console.log('Você clicou')  
}


// S3A1 02:22