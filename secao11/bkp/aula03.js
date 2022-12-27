/*
    - Conjuntos não aceitam repetições de valores;
    - Conjuntos não são indexados;
*/

// Declarando um conjunto
let cursos = new Set();

// Adicionando valores ao conjunto
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e Lógica de Programação');

// Adicionar valores concatenados
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');
cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

console.log(cursos);

console.log(cursos.has('Banco de Dados'));

cursos.delete('Programação para Leigos');

console.log(cursos);

let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];

let frutas_unicas = new Set(frutas);

console.log(frutas_unicas);