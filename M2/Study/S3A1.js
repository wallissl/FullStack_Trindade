console.log("Hello World");

let teclas = 0;

function verificarTeclas(e){
    console.log(e.target.value)
    teclas += 1;
    console.log(teclas)
}

document.addEventListener('click', verificarTeclas)

console.log(teclas)