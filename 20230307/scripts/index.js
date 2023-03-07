const btnInvia = document.getElementById("btnInvia");
const inputNome = document.getElementById("nome");

btnInvia.onclick = function () {
    console.log("NOME: " + inputNome.value);
}