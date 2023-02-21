// variabili

// elementi html
const p = document.getElementById("primo");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");

// logica dell'app
settaTesto();

// gestione degli eventi
button3.onclick = coloraTesto;

button4.onclick = function () {
    p.style.color = "#ffccad";
}

p.on
// funzioni
function settaTesto() {
    // const p = document.getElementById("primo");
    console.log(p.innerText); // ciao
    p.innerText = "testo javascript";
}

function saluta() {
    alert('ciao dalla funzione saluta');
}

function coloraTesto() {
    p.style.color = "red";
    p.style.backgroundColor = "yellow";
}