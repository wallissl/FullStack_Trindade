let enviar = document.getElementById("enviar");
enviar.onclick = clicou;

let valorDoPao = document.getElementById("valorDoPao");
let numeroDePaes = document.getElementById("numeroDePaes")

var usuario = {
    numero:"",
    valor:"",
}

var totalTabela = 50;

// Variável que é inicializada para inserir o valor que o usuário digitar no campo usuário;
const handleChangeNumero = (e) => {
    usuario.numero = e.target.value;
}

const handleChangeValor = (e) => {
    usuario.valor = e.target.value;
}

// Comando utilizado para escutar o que o usuário digitar e mandar para o handleChangeNumero
numeroDePaes.addEventListener("change", handleChangeNumero);

valorDoPao.addEventListener("change", handleChangeValor);

function tabela(){
    for(i =1; i <= totalTabela; i++){
        console.log(` ${i} - R$${usuario.valor*i}`)
    }
}

function clicou(){
    console.log(tabela());
}