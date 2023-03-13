const btnInvia = document.getElementById("btnInvia");
const inputNome = document.getElementById("nome");

// radio input
const radioMas = document.getElementById("maschio");
const radioFem = document.getElementById("femmina");

// checkbox input
const sport1 = document.getElementById("sport1");
const sport2 = document.getElementById("sport2");
const sport3 = document.getElementById("sport3");

// evento che intercetta la selezione dell'input
// sport1.onchange = function() {
//     alert("selezionato!")
// }

btnInvia.onclick = function () {
    console.log("NOME: " + inputNome.value);

    if(radioMas.checked) {
        console.log(radioMas.value);
    }
    else if(radioFem.checked) {
        console.log(radioFem.value);
    }
    else {
        console.log("errore");
    }

    if(sport1.checked) {
        console.log(sport1.value);
    }
    if(sport2.checked) {
        console.log(sport2.value);
    }
    if(sport3.checked) {
        console.log(sport3.value);
    }

    location.reload();
}