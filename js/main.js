function clicou() {


    let texto = document.getElementById("agradecimento");

    texto.innerHTML = "Botão clicado";
    texto.style = "cursor:pointer";

}

function redirecionar() {
    //window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}