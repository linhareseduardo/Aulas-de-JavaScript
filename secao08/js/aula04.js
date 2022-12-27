let itexto = document.getElementById('produto');
console.log(itexto);

let spans = document.getElementsByTagName('span');
console.log(spans);

let eles = document.getElementsByClassName('texto');

console.log(eles);

//ler valores

console.log(spans[0].textContent);
console.log(spans[1].innerHTML);

//alterar valores

spans[0].textContent = 'JavaScript';
spans[1].innerHTML = 'Geek University';

let span = document.getElementsByTagName('span')[0];
console.log(span.innerHTML);

span.style.textTransform = 'uppercase'; 

//let inp = document.querySelector('body div.container div.row input');//busca pela tag

//console.log(inp);

let eles2 = document.querySelectorAll('.texto');//busca todos os elementos pela classe

console.log(eles2);

let div1 = document.querySelector('#div1');// busca todos os elementos pela id

console.log(div1);

//let imp = document.querySelector('input[name=produto]');
//console.log(imp);

//imp = document.querySelector('input[name=preco]');

//console.log(imp);

//exemplo 1 

//et btn = document.querySelector('button.btn');

//btn.onclick = function(){
//    alert('Botão clicado...');
//}

//Exemplo 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[nome=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}