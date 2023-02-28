function saudacao(nome1, nome2, nome3){
    return `Bom dia ${nome1}, ${nome2} e ${nome3}!`;
}

function soma (x = 1, y = 2){
    return x + y;
}

console.log(saudacao("Pedro", "Paulo", "Vinícius"));
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());