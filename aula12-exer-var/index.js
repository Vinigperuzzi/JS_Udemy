let varA = 'A';
let varB = 'B';
let varC = 'C';
console.log(varA, varB, varC);

let temp = varA;
varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);