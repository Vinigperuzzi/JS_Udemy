const x = false;

x ? console.log('true') : console.log('false');

const resul = 5 > 10 ? 'sim' : 'não';
console.log(resul);

function teste(t){
    t ? console.log('Era verdadeiro') : teste(true);
}

teste(true);
teste(false);//Pegadinha