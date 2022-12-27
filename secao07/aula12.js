/*

JSON - JavaScript Objet Notation

*/

const curso = {
    nome: 'Programação em JavaScript',
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}

console.log(curso);
console.log(curso.preco());
console.log(typeof(curso));
console.log('+++++++++++++++++++++++++++++');

// Convertendo o Objeto JavaScript para JSON

const json = JSON.stringify(curso);
console.log(json);//JSON
console.log(typeof(json));
console.log('+++++++++++++++++++++++++++++');


// Convertendo de JSON para Objeto JavaScript

const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));
/*
console.log('+++++++++++++++++++++++++++++');
const json_errado = "{'nome': 'Programação em JavaScript', 'preco':27.99}";
console.log(json_errado);
console.log(typeof(json_errado));
const novo_obj = JSON.parse(json_errado);
//console.log(novo_obj);
*/
console.log('+++++++++++++++++++++++++++++');
const json_correto = '{"nome": "Programação em JavaScript", "preco":27.99}';
console.log(json_correto);
console.log(typeof(json_correto));
const novo_obj2 = JSON.parse(json_correto);