const alunos = ["Débora", "Vinícius", "Maria", "José"];

alunos[4] = "Sônia";

alunos.push("Antônio");

console.log(alunos);

alunos.unshift("Joaquina");

console.log(alunos);

const casalFeliz = [];

casalFeliz.push(alunos.pop());

casalFeliz.push(alunos.shift());

console.log(alunos);

console.log(casalFeliz);

const novo = alunos.slice(2, 4);

console.log(novo);