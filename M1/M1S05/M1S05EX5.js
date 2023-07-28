/* Criar um algoritmo que conte o total de vogais baseado na string que foi enviada.

Regra 1: Caso não seja uma string, retorne uma mensagem de erro.

Regra 2: Caso identifique pelo menos 1 vogal, retorne o número exato.

Regra 3: Caso na palavra, não conste nenhuma vogal, retorne uma mensagem informe que não tem nenhuma vogal */

//let menu = '';
let mensagemUsuario = '';
let vogais = ['a','e','i','o','u']
let cont =0;

mensagemUsuario = prompt('Digite uma frase que iremos contar as vogais:');
        if(isNaN(mensagemUsuario)){
            for(var i=0; i<mensagemUsuario.length; i++){
            if(mensagemUsuario.charAt(i)== vogais[0] || mensagemUsuario.charAt(i)== vogais[1] || mensagemUsuario.charAt(i)== vogais[2] || mensagemUsuario.charAt(i)== vogais[3] || mensagemUsuario.charAt(i)== vogais[4]){
                cont ++
            }            
        }
        alert(`Sua frase contem o total de ${cont} vogais`)
    }else if(cont==0 && isNaN(mensagemUsuario)){
        alert('Sua frase não contem vogais')
    }
    else{
        alert(`${mensagemUsuario} não é uma frase válida!`)
    }
