// prompt ("Digite um número");

let iniciarCompra = document.getElementById("enviar");
iniciarCompra.onclick = clicou;


var number="";
var somaNumero=0;
var incremento =0;
var valorDinheiro = 0;

let valores = [];


const handleChangeNumero = (e) => {
    number = e.target.value;
}

iniciarCompra.addEventListener("change", handleChangeNumero);


function vaiSomar(){      

somaNumero = (somaNumero) + (number);

console.log(number);

}

function clicou(){
    
  while(number !== 0 ){
    number = parseFloat(prompt("Digite o valor da compra:").replace(',','.'));
    vaiSomar();
    incremento ++;
    valores.push(number);
  }

  valorDinheiro = parseFloat(prompt("Informe o valor total em dinheiro para o pagamento da compra:"))
  while(valorDinheiro < somaNumero){
  if(valorDinheiro < somaNumero){
    console.log("Valor insuficiente para o pagamento");
    valorDinheiro = parseFloat(prompt("Informe outro valor para pagamento em dinheiro"));
  }
}  

  console.log("Lojas Tabajara");
  
  for(i=0; i<valores.length -1; i++){
  console.log( "Produto " + (i +1) + ": R$" + (valores[i]));
  }

  console.log("Total: R$ " + somaNumero);
  console.log("Dinheiro pago: R$ " + valorDinheiro);
  console.log("Troco: R$ " + ((valorDinheiro - somaNumero)));

  // Resetar para valores padrão
  
  number = "";
  somaNumero=0;
  incremento =0;
  valorDinheiro = 0;
  valores = [];

}