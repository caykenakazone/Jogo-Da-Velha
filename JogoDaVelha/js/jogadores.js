
function confirmarNomes() {
    j1 = document.getElementById("j1").value;
    j2 = document.getElementById("j2").value;
    if (!j1) {
        alert("Informe o nome do jogador 1");
    }
    else if (!j2) {
        alert("Informe o nome do jogador 2")
    } else {
        localStorage.setItem("jog1", j1);
        localStorage.setItem("jog2", j2);
        window.open('jogo.html', '_self')
    }
}