/* Aqui vamos iniciar os estudos em html - M2 S2A4 */

// HTML 

// Podemos utilizar os elementos get e querySelector para capturar elementos no html para o Js

/*  
<button id="meuBotao">Enviar</button>
document.getElementById("meuBotao"); // Pegar um item
document.querySelector(".") // Pegar um item
document.querySelectorAll(".") // Pegar vários itens

*/

console.log('Hello World');

/* 
const button = document.getElementById("meuOutroButton");

/* Uma forma de chamar: 
button.addEventListener('click', event => {
    console.log('Você clicou');}) 

// Outra forma
button.addEventListener('click', oi);

function oi(){
    console.log('Você clicou')
}  */

// Forms S2A4

function enviarFormulario(event){
    event.preventDefault(); // Evitar o comportamento padrão do forms
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    console.log('Nome: ',nome);
    console.log('Email: ', email);
    console.log('Mensagem: ',mensagem);

   /*  const usuario = {
        nome: nome,
        email: email,
        mensagem: mensagem
    }    */
}



// S3A1 02:22