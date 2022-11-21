var nome, idade, cpf;

nome = prompt("Qual o seu nome? ");
idade = prompt("E a sua idade? ");

alert("Bem vindo "+nome+"! Você tem "+idade+" anos.");

if (idade >= 18){
    cpf = prompt("Digite seu CPF: ");
    alert("Seu CPF é "+cpf+".");
} else {
    alert("Você é menor de idade.")
}