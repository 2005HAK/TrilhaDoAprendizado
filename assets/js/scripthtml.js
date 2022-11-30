function detalhes(n){
    let detalhes = document.getElementsByClassName('detalhes');
    let botao = document.getElementsByClassName('botao');

    for(var i=0; i < 11; i++){
        if(n==i){
            detalhes[n].style.cssText = "visibility: visible;"+"display: flex;"+"border-radius: 0 0 .5em .5em;";
            botao[n].style.cssText = "background-color: #ebebeb;"+"border: none;"+"border-top: 1px solid black;"+"border-right: 1px solid black;"+"border-left: 1px solid black;"+"border-radius: .5em .5em 0 0;"+"top: 13px";
        } else {
            detalhes[i].style.cssText = "visibility: hidden;"+"display: none;";
            botao[i].style.cssText = "background-color: #000000;";
        }
    }/*arrumar as bordas dos detalhes*/
}