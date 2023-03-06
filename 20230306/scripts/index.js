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
        // paragrafi[i].classList.add("text-warning");
        // console.log(paragrafi[i].classList);
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

const btn4 = document.getElementById("btn4");
const inputNome = document.getElementById("nome");
const inputPwd = document.getElementById("pwd");

btn4.onclick = function() {
    const nome = inputNome.value;
    // const pwd = inputPwd.value;
    // if(nome == "") {
    //     alert("non hai inserito il nome")
    // } 
    // else {
    //     alert("ciao " + nome);
    //     console.log(pwd);
    // }
    if(nome != "") {
        listaPersone.push(nome);
        aggiornaLista();
        inputNome.value = "";
    }
}

aggiornaLista();

function aggiornaLista() {
    listaUl.innerText= "";

    for(let i = 0; i < listaPersone.length; i++) {
        // listaUl.innerHTML += `
        //     <li>${listaPersone[i]}</li>
        // `;
        const itemPersona = document.createElement("li");
        itemPersona.innerHTML = `${listaPersone[i]}`;
        listaUl.appendChild(itemPersona);
    }
}

const div = document.getElementById("sezione3");

// 1. creare h2
const intestazione = document.createElement("h2");
// 2. valorizzare suo contenuto
intestazione.innerText = "HAHAHA";

const paragrafo = document.createElement("p");
paragrafo.innerText = "hahaha";

// 3. appendere al div l'h2
div.appendChild(intestazione);
div.appendChild(paragrafo);


