const cursos = [
    'Programação para leigos',
    'Algoritmos e Lógica de programação',
    'Programação em C',
    'Programaçãoem Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
];

function apresentar(curso, indice){
    console.log(`${indice + 1 } - ${curso}`);
}

cursos.forEach(apresentar);//aqui está acontecendo o callback
console.log('--------------------------');
//usando lambda
cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
});

console.log('--------------------------');
//usando arrow
cursos.forEach((curso,indice) => console.log(`${indice + 1} - ${curso}`));


console.log('--------------------------');

const precos =[23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = [];
for (let p in precos){
    if(precos[p]<50){
        menores.push(precos[p]);
    }
}
console.log('--------------------------');

console.log(menores);

for(let i = 0; i < precos.length; i++){
    if(precos[i]< 50){
        menores.push(precos[i]);
    }
}

console.log('a--------------------------');

console.log(menores);

//forma 1

menores = precos.filter(function(preco){
    return preco < 50;
});

console.log('--------------------------');

console.log(menores);

//Forma 2

menores = precos.filter(preco => preco < 50);

console.log('--------------------------');

console.log(menores);

