/* -------------------- M1S02EX6 -------------------- */

console.log("Hello");
// Número que o usuário digita
let numeroUsuario = document.getElementById("numeroUsuario");
let enviar = document.getElementById("enviar");
enviar.onclick = clicou;

var usuario = {
    number:""
}

const handleChangeNumero = (e) => {
    usuario.number = e.target.value;
}

numeroUsuario.addEventListener("change", handleChangeNumero);

function clicou(){
    console.log(usuario.number);
}
