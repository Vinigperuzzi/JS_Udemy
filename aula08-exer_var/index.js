const nome = 'Vinícius';
const sobrenome = 'Garcia Peruzzi';
const idade = 30;
const peso = 127;
const alturaEmM = 1.78;
let imc;
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM);
let anoUltimoAniver = 2022;
anoNascimento = anoUltimoAniver - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg\ntem', alturaEmM, 'de altura e seu IMC é', imc);
console.log(nome, 'nasceu em', anoNascimento, ".");
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é ${imc}`);