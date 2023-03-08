
/*Função que desabilita o rolar de página, na verdade, ao rolar volta para o local inicial*/
function disable(){
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
    };
}

    
function enable() {
    window.onscroll = function() {};
    setTimeout(disable, 500);
}   //Função que habilita a rolagem, isso acontece para que seja possivel rolar para área indicada.
    //Só é chamada quando algum botão de link é clicado, isso pode ser visto no .html
    //Dá um tempo para conseguir rolar a página e logo desabilita de novo.


disable();