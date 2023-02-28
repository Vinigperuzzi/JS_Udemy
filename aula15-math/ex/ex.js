let num = window.prompt('Informe um número:');

while (num == null) {
    num = window.prompt('Voccê precisa informar um valor para que a sequência possa seguir:');
}

num = parseInt(num);

const numero = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numero.innerHTML = num;
texto.innerHTML = `<p>Raiz quadrada: ${num ** 0.5}<br /></ p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}<br /></ p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}<br /></ p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}<br /></ p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.ceil(num)}<br /></ p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}<br /></ p>`;
