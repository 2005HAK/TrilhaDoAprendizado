function detalhes(n) {
    let detalhes = document.getElementsByClassName('detalhes');
    let botao = document.getElementsByClassName('botao');

    for (var i = 0; i < 11; i++) {
        if (n == i) {
            if (n == 0 || n == 5 || n == 10) {
                detalhes[n].style.cssText = "visibility: visible;" + "display: flex;" + "border-radius: 0 .5em .5em .5em;";
            } else if(n == 4 || n == 9) {
                detalhes[n].style.cssText = "visibility: visible;" + "display: flex;" + "border-radius: .5em 0 .5em .5em;";
            } else {
                detalhes[n].style.cssText = "visibility: visible;" + "display: flex;" + "border-radius: .5em;";
            }
            botao[n].style.cssText = "text-shadow: none;"+"color: #000000;"+"background-color: #ebebeb;" + "border: none;" + "border-top: 1px solid black;" + "border-right: 1px solid black;" + "border-left: 1px solid black;" + "border-radius: .5em .5em 0 0;" + "top: 13px";
        } else {
            detalhes[i].style.cssText = "visibility: hidden;" + "display: none;";
            botao[i].style.cssText = "background-color: #000000;";
        }
    }
}