function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, //nome: nome  ---> Por ser o mesmo nome o motor js entende que o retorno é o valor passado
        sobrenome, idade}; //Dá para deixar tudo em linha inclusive.
}

const pessoas = [];
pessoas.push(criaPessoa('Vinícius', 'Peruzzi', 30));
pessoas.push(criaPessoa('Débora', 'Peruzzi', 29));
pessoas.push(criaPessoa('Antônio', 'Garcia', 25));

console.log(pessoas);