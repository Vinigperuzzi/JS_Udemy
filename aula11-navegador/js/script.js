alert('Com a nossa mensagem');
window.alert('Redução disso');

let teste = window.confirm('Entre informando seu nome ou cancele para entrar sem informar');

if (teste){
    let nome = window.prompt('Digite seu nome');
    alert(`Você digitou ${nome}`);
}

let num1 = parseInt(window.prompt("Digite um número"));
let num2 = parseInt(window.prompt("Digite outro número"));
let resultado = num1 + num2;
alert(`A soma é ${resultado}`);