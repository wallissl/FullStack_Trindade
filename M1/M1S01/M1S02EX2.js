/* Comando para editar o html dentro da página 
let modify = document.getElementById("login");
modify.innerHTML = `<button id="login" style=margin-top:50px;> Logar </button>`; */

// Outra forma: document.querySelector("H1").style.color="blue"; 

// Posso utilizar um getElemente para pegar um elemento dentro do HTML atribuir uma variavel e depois adicinar um evento para essa variável

const login = document.getElementById("login");
login.onclick = clicou;

/* Ou... login.addEventListener(`click`,clicou) */

/* Função que será acionada quando eu clicar com um alert
function clicou () {
    alert('Voce clicou');
} */



var usuario = {
    username:"",
    password:"",
}


// Pegando o meu usuario e senha dentro do Input:
let user = document.getElementById("user");
let password = document.getElementById("password");

/* Defininco minhar função: e mostrando dentro do console
const handleChange = (e) => {
    console.log(e.target.value);
} */

// Inserindo a informção digitada pelo usuário dentro do meu objeto:

// Adicionar o valor que o usuário digitou:

const handleChangeUser = (e) => {
    usuario.username = e.target.value;
    
}

const handleChangePassword = (e) => {
    usuario.password = e.target.value;
}

user.addEventListener("change", handleChangeUser);
password.addEventListener("change", handleChangePassword);


// Modelo do alert utilizando Template String
function clicou () {
    alert(`O usuário que você digitou é: ${usuario.username}, logado \n A sua senha é: ${usuario.password}`);
}