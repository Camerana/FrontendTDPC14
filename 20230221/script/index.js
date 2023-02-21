// variabili
const testoParagrafo = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto quas commodi hic harum iusto alias qui voluptatem dolor ducimus aperiam fugit repellendus, corrupti ipsa minima dolores itaque obcaecati amet.
`;
const testoVerde = "hai cliccato sul tasto VERDE";
const testoGiallo = "hai cliccato sul tasto GIALLO";
const testoRosso = "hai cliccato sul tasto ROSSO";

// elementi html
const uno = document.getElementById("uno");
const due = document.getElementById("due");
const tre = document.getElementById("tre");
const reset = document.getElementById("reset");

const p = document.getElementById("paragrafo");


// logica dell'applicazione:
valorizzaParagrafo();




// funzioni
function valorizzaParagrafo() {
    p.innerText = testoParagrafo;
    p.style.color = "white";
}



// eventi
uno.onclick = function () {
    p.innerText = testoVerde;
    p.style.color = "lightgreen";
}
due.onclick = function () {
    p.innerText = testoGiallo;
    p.style.color = "yellow";
}
tre.onclick = function () {
    p.innerText = testoRosso;
    p.style.color = "red";
}

reset.onclick = valorizzaParagrafo;