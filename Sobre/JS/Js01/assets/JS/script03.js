var valor1, valor2, subtracao;

valor1 = parseInt(prompt("Digite o valor 1: "));
valor2 = parseInt(prompt("Digite o valor 2: "));

if(valor1 > valor2) {
    subtracao = valor1 - valor2;
    alert(subtracao);
} else {
    alert("Número negativo");
}