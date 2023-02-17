
// Comando para pegar o botão atualizar e colocar um evento nele
const atualizar = document.getElementById("atualizar");
atualizar.onclick = clicou;

// Comando utilizado para realizar a troca da imagem
const imagem = document.querySelector("#imagem");
//imagem.setAttribute(`src`,`https://coodesh.com/blog/wp-content/uploads/2021/03/papel-de-um-fullstack-scaled.jpg`);

// Comando para pegar o email e o nome do usuario e armazenar em uma variável
let url =document.getElementById("url");
let email = document.getElementById("email");
let user = document.getElementById("user");
let meuEmail = document.getElementById("meuEmail");
let meuNome = document.getElementById("meuNome");


// Definindo variáveis
var usuario = {
    url:"https://www.projetodraft.com/wp-content/uploads/2017/08/full-stacker.jpg",
    email:"",
    user:"",
}

// Comando para definir uma função para trocar informações da url, email e usuário
const handleChangeUrl = (e) => {
    usuario.url = e.target.value;
}

const handleChangeEmail = (e) => {
    usuario.email = e.target.value;
}
const handleChangeUser = (e) => {
    usuario.user = e.target.value;
}

//Comando para trocar as informações registradas pelo usuário
url.addEventListener("change", handleChangeUrl);
email.addEventListener("change", handleChangeEmail);
user.addEventListener("change", handleChangeUser);


// Função para salvar os dados do usuário no localStorage
function salvarDados () {
    localStorage.setItem("url:", usuario.url);
    localStorage.setItem("email:", usuario.email);
    localStorage.setItem("nome:", usuario.user);
}

// Atribuir a imagem 

function setarImagem(){

    imagem.setAttribute("src", usuario.url);
    meuEmail.innerText = usuario.email;
    meuNome.innerHTML = usuario.user;
}

// Código para apagar o forms

function apagaforms(){
    document.getElementById("form1").reset();
}

// Função para ativar o botão de clique
function clicou () {
    
    setarImagem();

    salvarDados();
    
    apagaforms();
    
}

localStorage.clear();






