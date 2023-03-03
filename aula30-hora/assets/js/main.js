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

function formataData(data){
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

    let diaMes = data.getDate();

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

    let hora = data.getHours() >= 10 ? data.getHours() : `0${data.getHours()}`;
    let minutos = data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`;
    let segundos = data.getSeconds() >= 10 ? data.getSeconds() : `0${data.getSeconds()}`;

    return `${dia}, ${diaMes} de ${mes} de ${data.getFullYear()} <br> ${hora}:${minutos}:${segundos}`;
}

eventoSubmit();