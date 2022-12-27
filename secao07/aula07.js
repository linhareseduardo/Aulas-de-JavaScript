const curso ={
    nome: 'Programação em JavaScript',
    horas: 25,
    preco:27.99
}

console.log(curso);
console.log(typeof(curso));

console.log("+++++++++++++++++++++++++++++");

console.log(Object.keys(curso));
console.log(Object.values(curso));

console.log("+++++++++++++++++++++++++++++");

console.log(Object.entries(curso));

console.log("+++++++++++++++++++++++++++++");

Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
});

console.log("+++++++++++++++++++++++++++++");

Object.entries(curso).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`);
});

console.log("+++++++++++++++++++++++++++++");

Object.defineProperty(curso, 'publicacao', {
    enumerable: true,
    writable: true,
    value: '24/10/2022'
});

curso.publicacao = '01/01/2023';

console.log(curso);

console.log(curso.publicacao);

// const outro = {}
//Object.defineProperty(outro, '', {
//};)

Object.freeze(curso);
curso.nome = 'Dança da Garrafa';
console.log(curso);

console.log("+++++++++++++++++++++++++++++");

const usuarios = [
    {nome: 'Aline Morais', empresa: 'GeekUniversity'},
    {nome: 'Ricardo Brandão', empresa: 'Google'},
    {nome: 'Felipe Xavier', empresa: 'Sony'}
];

console.log(usuarios);

console.table(usuarios);

console.table(curso);
