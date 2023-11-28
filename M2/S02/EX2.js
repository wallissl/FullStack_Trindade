console.log('Hello');

let boton = document.getElementById('botaoConta');
let aLink = document.getElementById('aLink');

function clicou(){
    
    console.log('clicou!');
    boton.style.background = 'var(--link-color)';
    aLink.style.color = '#fff';
 
}

function saiu(){
    
    console.log('saiu!')
    boton.style.background = '#f0f0f0';
    aLink.style.color = 'var(--link-color';
 
}

boton.addEventListener("mouseover",clicou);
boton.addEventListener("mouseout",saiu);



