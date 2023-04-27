/* Crie um perfil em HTML/CSS e faça com que ele seja populado com informações obtidas da API do seu github.
Você pode mudar o final do endpoint com seu usuário para obter suas informações.
https://api.github.com/users/walberson */


console.log('Hello world')

async function buscarDados () {
    try {
        let userGit = document.getElementById('user');
        let nameGit = document.getElementById('name');
        let idGit = document.getElementById('id');
        let bioGit = document.getElementById('bio');

       
        const response = await fetch('https://api.github.com/users/wallissl');

        let dados = await response.json()
        console.log(dados);
        
        let userConverte = JSON.stringify(dados.login);
        let nameConverte = JSON.stringify(dados.name);
        let idConverte = JSON.stringify(dados.id);
        let bioConverte = JSON.stringify(dados.bio);

        userGit.innerText = userConverte;
        nameGit.innerHTML = nameConverte;
        idGit.innerHTML = idConverte;
        bioGit.innerText = bioConverte;


    } catch(e){
    
    }

}
buscarDados();