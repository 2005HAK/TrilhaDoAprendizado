/*Fazer um rograma que exiba se um valor é maior que o outro*/

var n1, n2, decision;

do {
    n1 = parseInt(prompt("Entre com um valor: "));
    n2 = parseInt(prompt("Entre com outro valor: "));
    
    if (n1 < n2) {
        alert("O número " + n1 + " é menor que " + n2);
    } else if (n2 < n1) {
        alert("O número " + n2 + " é menor que " + n1);
    } else {
        alert("Os números " + n1 + " e " + n2 + " são iguais");
    }

    decision = parseInt(prompt("Continuar? (1 - Sim e 2 - Não)"));
} while (decision == 1);

