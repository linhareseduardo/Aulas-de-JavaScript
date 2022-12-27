const idade = 19;
const nome = 'Geek';

console.log(nome + ' tem ' + idade + ' anos.' );

function soma_3(idade){
    return idade + 3;
}
// Templete strings

console.log(`${nome} tem ${idade + 3} anos.`);
console.log(`${nome} tem ${soma_3(idade)} anos.`);

/*
    Em template strings usa-se a crase, e não aspas simples ou acento agudo
    não é ´
    não é '
    é `
*/