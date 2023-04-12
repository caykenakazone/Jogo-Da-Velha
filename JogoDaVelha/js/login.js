function validarLogin() {
    user = document.getElementById("user").value;
    senha = document.getElementById("senha").value;

    if(!user && !senha){
        alert("Usuário e Senha em branco, favor preencher");
        document.getElementById("user").focus();
    }else if(!user){
        alert("Usuário em Branco, favor preencher")
    }else if(!senha){
        alert("Senha em Branco, favor preencher")
        document.getElementById("senha").focus();
    }else{loginProcess(user,senha);}
}
function loginProcess(user,senha){
    file = "json/users.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUserLogin(content,user,senha))
        .catch(err => alert("Problemas na leitura do JSON!"));

    
}
function checkUserLogin(content,user,senha){
    var achouUser = false;
    for(var i=0;i<content.usuarios.length;i++){
        if((content.usuarios[i].user == user )&&(content.usuarios[i].senha == senha)){
            achouUser = true;
            break;
        }
    }
    if(achouUser){window.open("jogadores.html")}
    else{alert("Usuário inexistente");}
}