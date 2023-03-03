function mostraResultado(resultadoImc, resultado){
    document.querySelector('.resultado').style.background = 'rgb(86, 211, 113)';
            
    resultadoImc = resultadoImc.toFixed(1);
    resultado.innerHTML = `Seu IMC é ${resultadoImc}.<br>`;

    if (resultadoImc < 18.5) {
        resultado.innerHTML += `Você se encaixa em <span>ABAIXO DO PESO</span>.`;
        document.querySelector('span').style.color = 'yellow';
    } else if (resultadoImc >= 18.5 && resultadoImc < 25){
        resultado.innerHTML += `Você se encaixa em <span>PESO NORMAL</span>, Parabéns!`;
        document.querySelector('span').style.color = 'green';
    } else if (resultadoImc >= 25 && resultadoImc < 30){
        resultado.innerHTML += `Você se encaixa em <span>SOBREPESO</span>.`;
        document.querySelector('span').style.color = 'yellow';
    } else if (resultadoImc >= 30 && resultadoImc < 35){
        resultado.innerHTML += `Você se encaixa em <span>OBESIDADE GRAU 1</span>.`;
        document.querySelector('span').style.color = 'yellow';
    } else if (resultadoImc >= 35 && resultadoImc < 39.9){
        resultado.innerHTML += `Você se encaixa em <span>OBESIDADE GRAU 2</span>.`;
        document.querySelector('span').style.color = 'orange';
    } else {
        resultado.innerHTML += `Você se encaixa em <span>OBESIDADE GRAU 3</span>. Cuidado!!`;
        document.querySelector('span').style.color = 'red';
    }
}

function eventoSubmit(){
    const form = document.querySelector('.form');
    form.addEventListener('submit', recebeEventoForm);
    
    function recebeEventoForm(evento) {
        const peso = form.querySelector('#input-peso');
        const altura = form.querySelector('#input-altura');
        const resultado = document.querySelector('.resultado');
        evento.preventDefault();
        
        if (parseFloat(peso.value) && parseFloat(altura.value)){
            let resultadoImc = (peso.value / (altura.value * altura.value));
            mostraResultado(resultadoImc, resultado);
        } else {
            document.querySelector('.resultado').style.background = 'rgb(187, 51, 96)';
            resultado.innerHTML = `Você digitou algum valor inválido para peso ou altura`;
        }
    }
}

eventoSubmit();
