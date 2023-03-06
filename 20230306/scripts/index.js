// esempio modifica classi

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// tutti gli elementi con un determinato tag getElementByTagName
const paragrafi = document.getElementsByTagName("p");
// tutti gli elementi con una determinata classe
const paragrafiRossi = document.getElementsByClassName("rosso");

btn1.onclick = function() {
    // ciclo tutti gli elementi
    for(let i = 0; i < paragrafi.length; i++) {
        // per ogni elemento..
        paragrafi[i].classList.add("evidenzia");
    }
}

btn2.onclick = function() {
    for(let i = 0; i < paragrafiRossi.length; i++) {
        paragrafiRossi[i].classList.add("margineSinistro");
    }
}

btn3.onclick = function() {
    for(let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].classList.remove("evidenzia");
        paragrafi[i].classList.remove("margineSinistro");
    }
}


// esempio lista

const listaPersone = ["Corrado", "Piera", "Renzo", "Rossella"];
const listaUl = document.getElementById("lstPersone");

aggiornaLista();

function aggiornaLista() {
    listaUl.innerText = "";
    for(let i = 0; i < listaPersone.length; i++) {
        listaUl.innerHTML += `
            <li>${listaPersone[i]}</li>
        `;
    }
}
