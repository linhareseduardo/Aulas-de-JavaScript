var cursos=[
    'Programação para leigos',
    'Algoritmos e lógica de programação',
    'Programação em C',
    'Programação em python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
];

console.log(cursos);
console.log(cursos.length);

//definir uma função
function imprimir(curso,indice){
    console.log(indice +' - '+curso);
}

//cursos.forEach(imprimir);

// utilização de uma função anônima(lambda/callbak) e template string

cursos.forEach(function(curso,indice){
   // console.log(`${indice} - ${curso}`)
});

for(var i=0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}