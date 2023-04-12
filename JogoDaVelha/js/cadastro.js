function validarCadastro() {
    user = document.getElementById("user").value;
    senha = document.getElementById("senha").value;
    confSenha = document.getElementById("confSenha").value;

    if(!user && !senha){
        alert("Usuário e Senha em branco, favor preencher");
        document.getElementById("user").focus();
    }else if(!user){
        alert("Usuário em Branco, favor preencher")
        document.getElementById("user").focus();
    }else if(!senha){
        alert("Senha em Branco, favor preencher")
        document.getElementById("senha").focus();
    }else if(!confSenha){
        alert("Confirme sua senha")
        document.getElementById("confSenha").focus();
    }else if(senha != confSenha){
        alert("As senhas não são iguais")
    }
    else{recordNewUser(user,senha);}
}
function recordNewUser(user,senha){
    file = "json/users.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUserCadastro(content,user,senha))
        .catch(err => alert("Problemas na leitura do JSON!"));
}
function checkUserCadastro(content,user,senha){
    var achou = false;
    for(var i=0;i<content.usuarios.length;i++){
        if((content.usuarios[i].user == user )&&(content.usuarios[i].senha == senha)){
            achou = true;
            break;
        }
    }
    if(achou){alert("Usuário existente. Tente outro!!");}
    else{document.getElementsByTagName("form")[0].submit();
        window.open("login.html","_self");
    }
}