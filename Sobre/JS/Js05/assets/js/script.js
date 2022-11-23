var tabuada, n, cont = 0;

n = parseInt(prompt("Entre com o valor da tabuada: "));

while(cont < 11){
    t  = n * cont;
    document.write("<h2>"+t+"</h2>");
    cont++;
}