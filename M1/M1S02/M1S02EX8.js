//prompt ("Digite um número");

let iniciarCompra = document.getElementById("enviar");
iniciarCompra.onclick = clicou;

var number = "";

function numberUsuario(){
  
    do{
    
    var numeroSoma = "";
    

    number = prompt("Digite um número");
    // numeroSoma = numeroSoma + number;

    }
    while(number != 0) 

}




function clicou(){
    numberUsuario();  
    
}

console.log(number);


/* const handleChangeNumero = (e) => {
    usuario.numero = e.target.value;
}

iniciarCompra.addEventListener("change", handleChangeNumero); */

