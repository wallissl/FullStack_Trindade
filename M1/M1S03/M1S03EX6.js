/* Utilize a API abaixo para buscar um json e criar um cartão com as informações de um usuário do Ricky and Morty.
Onde você vê o número um, pode mudar para qualquer número até 800 que vai buscar um personagem diferente.
https://rickandmortyapi.com/api/character/1 */

const atualizar = document.getElementById('atualizar');
atualizar.onclick = clicou;

let number = document.getElementById('number'); 
var usuarioNumber;
let imagem = document.getElementById("imagem");
//let imagem = document.querySelector("#imagem");

async function buscarDados () {
    try {
        
        let nameApi = document.getElementById('name');
        let speciesApi = document.getElementById('species');
        let idApi = document.getElementById('id');

        const response = await fetch(`https://rickandmortyapi.com/api/character/${usuarioNumber}`);

        let dados = await response.json()
        console.log(dados);                
       
        let nameConverte = JSON.stringify(dados.name);
        let speciesConverte = JSON.stringify(dados.species);
        let idConverte = JSON.stringify(dados.id);
       
        nameApi.innerHTML = nameConverte;
        speciesApi.innerText = speciesConverte;
        idApi.innerHTML = idConverte;      

    } catch(e){
    
    }
}

const handleChange = (e) => {
    usuarioNumber = e.target.value;
}

number.addEventListener("change",handleChange);

function setarimagem(){
    imagem.setAttribute("src",`https://rickandmortyapi.com/api/character/avatar/${usuarioNumber}.jpeg` )
}  

function clicou(){
buscarDados();
setarimagem();

}