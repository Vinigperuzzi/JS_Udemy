let nome = window.prompt("Digite o seu nome");
const nomeP = document.querySelector(".nome");
if (nome == null){
    nome = 'Visitante';
}
nomeP.innerHTML += ` Bem vinda(o), ${nome}!`

function eventoSubmit(){
    document.querySelector('.form').addEventListener('submit', function (e){
        const horas = document.querySelector('.horas');
        e.preventDefault();
        const p = document.createElement('p');
        p.innerHTML = pegaHora();
        console.log(pegaHora());
        p.classList.add('botaHora');
        horas.innerHTML = '';
        horas.appendChild(p);
    });
}

function pegaHora(){
    let data = new Date();
    let dataFormatada = formataData(data);
    return dataFormatada;
}

function getDiaSemana(data){
    let dia;
    switch (data.getDay()) {
        case 0: dia = 'Domingo';
        break;
        case 1: dia = 'Segunda-feira';
        break;
        case 2: dia = 'Terça-feira';
        break;
        case 3: dia = 'Quarta-feira';
        break;
        case 4: dia = 'Quinta-feira';
        break;
        case 5: dia = 'Sexta-feira';
        break;
        case 6: dia = 'Sábado';
        break;
        default: dia = '';
        break;
    }
    return dia;
}

function getMes(data){
    let mes;
    switch (data.getMonth()){
        case 0: mes = 'Janeiro';
        break;
        case 1: mes = 'Fevereiro';
        break;
        case 2: mes = 'Março';
        break;
        case 3: mes = 'Abril';
        break;
        case 4: mes = 'Maio';
        break;
        case 5: mes = 'Junho';
        break;
        case 6: mes = 'Julho';
        break;
        case 7: mes = 'Agosto';
        break;
        case 8: mes = 'Setembro';
        break;
        case 9: mes = 'Outubro';
        break;
        case 10: mes = 'Novembro';
        break;
        case 11: mes = 'Dezembro';
        break;
        default: mes = '';
        break;
    }
    return mes;
}

function getHora(data){
    let hora = data.getHours() >= 10 ? data.getHours() : `0${data.getHours()}`;
    return hora;
}

function getMinutes(data){
    let minutos = data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`
    return minutos;
}

function getSeconds(data){
    let segundos = data.getSeconds() >= 10 ? data.getSeconds() : `0${data.getSeconds()}`;
    return segundos;
}

function formataData(data){
    let dia = getDiaSemana(data);
    let diaMes = data.getDate();
    let mes = getMes(data);
    let hora = getHora(data);
    let minutos = getMinutes(data);
    let segundos = getSeconds(data);

    return `${dia}, ${diaMes} de ${mes} de ${data.getFullYear()} <br> ${hora}:${minutos}:${segundos}`;
}

eventoSubmit();