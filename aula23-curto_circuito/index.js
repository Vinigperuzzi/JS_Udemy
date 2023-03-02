//Possui curto circuito

function oi(){
    return 'Oi!';
}

const vaiExecutar = 'Vini';

console.log(vaiExecutar && oi());

const corUsuario = null;
const corPadrão = 'Preto';

const corDoSite = corUsuario || corPadrão; //Pode ser usado para setar o primeiro valor válido para uma variável.
console.log(corDoSite);

