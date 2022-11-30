function detalhes(n){
    let detalhes = document.getElementsByClassName('detalhes');
    let botao = document.getElementsByClassName('botao');

    for(var i=0; i < 11; i++){
        if(n==i){
            detalhes[n].style.cssText = "visibility: visible;"+"display: flex;";
            botao[n].style.cssText = "background-color: #b1b1b1;"+"top: .4em";
        } else {
            detalhes[i].style.cssText = "visibility: hidden;"+"display: none;";
            botao[i].style.cssText = "background-color: #000000;";
        }
    }
}