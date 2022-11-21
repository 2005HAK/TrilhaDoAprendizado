var numero;

numero = parseInt(prompt("Digite um número: "));

if (numero % 7 == 0){
    alert("O número é divisivel por 7.");
} else if (numero % 3 == 0){
    alert("O número é divisivel por 3.");
} else {
    alert("Não é divisivel nem por 7 nem por 3.");
}