let userNumber = document.getElementById("userNumber");
let userText = document.getElementById("userText");


enviar.addEventListener('click', validador);

function validador(){
    userNumber = document.getElementById("userNumber").value;
    userText = document.getElementById("userText").value;
    if(userNumber && userText != ""){
    window.location.href=`//api.whatsapp.com/send?phone=${userNumber}%C3%BAmero&text=${userText}`;
    }else{
        validador()
    }
    
}