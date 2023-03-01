


let tarefasDiarias = [
    "Estudar",
    "Trabalhar",
    "Exercícios",
    "Entreterimento",
    "Meditar"
]

let enviar = document.getElementById("enviar");

enviar.addEventListener('click', buscar);

function buscar(){
    let buscarTarefa = document.getElementById('buscarTarefa').value;
    
    let buscar = tarefasDiarias.find(tarefa => {
        return tarefa === buscarTarefa;
    }) 
    if(buscar){
    window.alert(buscar + " está na sua lista de tarefas.");
    }else {
        window.alert("Tarefa não está na sua lista de tarefas.")
    }
}





/* tarefasDiarias.forEach(tarefas => {
    console.log(tarefas);
}); */