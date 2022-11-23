/*fonções sem retorno*/

function somar(n1, n2){
    var resultado;

    resultado = n1 + n2;
    alert("Função sem retorno "+resultado)
}

somar(24, 80)

/*fonção com retorno*/

function subtrair(n1, n2){
    var resultado;

    resultado = n1 - n2;

    return(resultado);
}

alert("Função com retorno "+subtrair(23, 45))
