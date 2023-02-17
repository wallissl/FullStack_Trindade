/* -------------------- M1S02EX5 -------------------- */

/* function boaNoite () {
    console.log("Boa noite")
} */

/* Utilizado para executar a contagem para executar a função 1x
setTimeout(boaNoite,3000); */

/* Utilizado para executar a contagem para executar a função deiversas vezes
setInterval(boaNoite,2000); */

let cronometro = document.getElementById("cronometro");
cronometro.onclick = clicou;

function ativar() {
    var number =10;

    function boaNoite () {
        
        if (number ==0){
            
            clearTimeout(time);    
            cronometro.innerText = "Seu tempo acabou!! Tente novamente!!";
            
                
        }else{
            number--
            cronometro.innerText = number;              
        }     
    }
    var time = setInterval(boaNoite,1000);
}

function clicou() {

   ativar();
}

