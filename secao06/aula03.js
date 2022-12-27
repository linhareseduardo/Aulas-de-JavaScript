function calcular_idade(ano_nascimento){
    const data = new Date();//gera a data atual
    const idade = data.getFullYear() - ano_nascimento;
    return idade;
}

let d = new Date();

console.log(d.getFullYear());

console.log(calcular_idade(1996));


let ret = calcular_idade(2002);
console.log(ret);

function calcula_idade2(ano_nascimento){
    const data = new Date();
    const idade = data.getUTCFullYear() - ano_nascimento;
    console.log(idade);
}

calcula_idade2(1899);

const data = new Date();
console.log('Data completa: ' + data);
console.log('Ano: '+data.getFullYear());
console.log('Mês: ' + data.getMonth());

function somar(num1,num2){
    return num1 + num2;
}

console.log(somar(4,6));
console.log(somar(4));
console.log(somar(4,6,8));
console.log(somar(4,6,8,6,9,5,2,144,555));