/* -------------------- M1S02EX6 -------------------- */

console.log("Hello");
// Número que o usuário digita
let numeroUsuario = document.getElementById("numeroUsuario");
let enviar = document.getElementById("enviar");
enviar.onclick = clicou;

var usuario = {
    number:""
}

var numeroTabuada = 10;

const handleChangeNumero = (e) => {
    usuario.number = e.target.value;
}

numeroUsuario.addEventListener("change", handleChangeNumero);

//Função com laço for para realizar a tabuada
function tabuada() {

    for(i =1; i <= numeroTabuada; i++){
        //console.log(usuario.number + " X " + i + " = " + (usuario.number * i));
        console.log(`${usuario.number} X ${i} = ${usuario.number * i}`)
    }
}

function clicou(){
    console.log(tabuada());
}
