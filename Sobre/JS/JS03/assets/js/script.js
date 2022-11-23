var number;

number = parseInt(prompt("Digite um número de 1 a 7: "));

switch (number) {
    case 1:
        alert("O dia correspondente é domingo.");
        break;
    case 2:
        alert("O dia correspondente é segunda-feira.")
        break;
    case 3:
        alert("O dia correspondente é terça-feira.")
        break;
    case 4:
        alert("O dia correspondente é quarta-feira.")
        break;
    case 5:
        alert("O dia correspondente é quinta-feira.")
        break;
    case 6:
        alert("O dia correspondente é sexta-feira.")
        break;
    case 7:
        alert("O dia correspondente é sabado.")
        break;
    default:
        alert("Não é possivel converter para um dia da semana.")
        break;
}