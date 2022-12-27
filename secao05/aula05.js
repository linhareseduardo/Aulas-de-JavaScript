var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtar_pares(n){
    return n % 2 === 0;
}

console.log(filtar_pares(3));
console.log(filtar_pares(8));

function filtrar_impares(n){
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;
}

var ret = numeros.filter(filtar_pares);
console.log(ret);

ret = numeros.filter(filtrar_impares);
console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
console.log(ret);

var alunos = [ 
    {nome: 'Pedro', nota: 8.5},
    {nome: 'MAria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3}
];

function filtrar_notas_maiores_que_8(aluno){
    return aluno.nota > 8;
}

var filtrados = alunos.filter(filtrar_notas_maiores_que_8);
console.log(filtrados);

// gera um novo array mas a tendencia é que seja menor, essa é a diferença em relação ao map já que no map o array gerado terá o mesmo tamanho