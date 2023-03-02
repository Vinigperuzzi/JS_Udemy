let data = new Date();/*Pega o horário no formato americano, com o seguinte padrão:
                        dia da semana, mês, dia, ano, hora, minuto, segundo, fuso horário, e descrição do fuso
                        MAS PEGA O HORÁRIO NA HORA DA ATRIBUIÇÃO E MANTÉM 
                        */


function testaData(){
    data = new Date();//Para atualizar o horário
    console.log(data.toString());
}

// console.log(data.toString());
// setTimeout(testaData, 2000);

// console.log(new Date(2023, 0, 1, 15, 21, 32).toString());

// console.log('dia', data.getDate());
// console.log('mês', data.getMonth());
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('min', data.getMinutes());
// console.log('seg', data.getSeconds());
// console.log('miliseg', data.getMilliseconds());
// console.log('dia semana', data.getDay());

function formataData(data) {
    const dia = zeroEsq(data.getDate());
    const mes = zeroEsq(data.getMonth() + 1);
    const ano = zeroEsq(data.getFullYear());
    const hora = zeroEsq(data.getHours());
    const min = zeroEsq(data.getMinutes());
    const seg = zeroEsq(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroEsq(num){
    return num >= 10 ? num : `0${num}`;
}

const novaData = new Date();
const dataFormatada = formataData(novaData);
console.log(dataFormatada);