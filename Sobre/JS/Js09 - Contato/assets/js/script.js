function enviar() {
    var nome = document.getElementById("nome"); 
    var email = document.getElementById("email");
    var ok = false;

    if(nome.value != "" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOf("@") != -1){
            alert("Agradecemos seu contato");
            ok = true;
        } else {
            alert("Digite seu email");
        }
    } else {
        alert("Digite seu nome completo");
    }
    
    return(ok);
}