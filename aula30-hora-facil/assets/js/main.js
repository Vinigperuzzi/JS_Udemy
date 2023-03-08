const horas = document.querySelector('.horas');
const data = new Date();
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full'}));
const options = {
    dateStyle: 'full'
}
horas.innerHTML = data.toLocaleDateString('pt-BR', options);