// Mais um exemplo de utilizar um evento dentro do HTML / CSS

const input = document.querySelector("#meuInput");

function verificarTecla(event){
    if(event.key==="Enter"){
        console.log("A tecla foi pressionada!")
    }
}

input.addEventListener('keydown',verificarTecla)