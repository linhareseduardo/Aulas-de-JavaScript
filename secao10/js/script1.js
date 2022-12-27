// AJAX (XMLHttpRequest) - Asynchronous JavaScript and XML

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function(){
    //Limpar o conteúdo da div
    div.innerHTML = '';
    
    // Instanciando objeto ajax
    let ajax = new XMLHttpRequest();

    // Abrir uma conexão (GET, POST, PUT, DELETE...)
    ajax.open('GET',`https://api.github.com/users/${input.value}`);

    // Enviar a requisição
    ajax.send(null);

    ajax.onreadystatechange = function(){

        // Criar elemento span
        let spanNone = document.createElement('span');

        // Criar a variável none
        let txtNone = '';

        /* 
            ajax.readyState -> 0 -> Antes da conexão ser aberta
            ajax.readyState -> 1 -> Após abrir a conexão
            ajax.readyState -> 2 -> headers (cabeçalhos) foram recebidos
            ajax.readyState -> 3 -> Carregando o corpo da requisição(conteúdo/dados)
            ajax.readyState -> 4 -> O conteúdo (dados) está pronto para uso         
        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                //transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                //SE o usuario possui nome
                if(usuario['nome'] !== null){
                    txtNone = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['avatar_url']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else{
                    txtNone = document.createTextNode(`O usuário ${input.value} não tem nome.`);
                }
                // Adicionar o texto ao span e o span a div
                spanNone.appendChild(txtNone);
                div.appendChild(spanNone);

                // Limpar o input
                input.value = '';
            }else{
                txtNone = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                // Adicionar o texto ao span e o span a div
                spanNone.appendChild(txtNone);
                div.appendChild(spanNone);
            }
        }
    }
}