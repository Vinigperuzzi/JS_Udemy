function eventoSubmit (){
    const form = document.querySelector('.form');
    
    // form.onsubmit = function (evento) {
        //     evento.preventDefault();
        //     alert(1);
        //     console.log(typeof(evento));
        // };
        
        
        form.addEventListener('submit', recebeEventoForm);
        const entradas = [];
        const resultado = document.querySelector('.resultado');
        
        function recebeEventoForm (evento) {
            const nome = form.querySelector('.nome');
            const sobrenome = form.querySelector('.sobrenome');
            const peso = form.querySelector('.peso');
            const altura = form.querySelector('.altura');
            evento.preventDefault();
            entradas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });
            console.log(entradas);
            resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
}

eventoSubmit();
