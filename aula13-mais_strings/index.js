let umaString = "Um \"texto\" texto";

let nova = umaString.replace(/texto/g, "escrito");//com a flag //g para indicar que todas as ocorrências devem ser tradadas
//nova = nova.replace("texto", "escrito");

console.log(nova);

let novas = nova.split("t");

console.log(novas[0]);

console.log("Enter \n. Tab \t. Som? \a. Barra \\. / $ porcentagem %");

console.log(umaString.match(/[a-z]/g));