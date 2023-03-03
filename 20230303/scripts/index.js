const button = document.getElementById("btn");
const paragrafo = document.getElementById("par");


button.onclick = coloraDiRosso;


function coloraDiRosso() {
    // console.log("ciao");

    paragrafo.style.color = "red";
    paragrafo.style.backgroundColor = "yellow";
    paragrafo.style.padding = "20px";
    paragrafo.style.borderRadius = "4px";

    paragrafo.innerHTML = "ciaone <b style='color:blue;'>ciaone</b> ciaone";
}


// esempio lista dinamica

const button2 = document.getElementById("btn2");
const lista = document.getElementById("lst");
const nome = "Lino";
const nomi = ["Walter", "Jesse", "Mike", "Donatella"];

for (let i = 0; i < nomi.length; i++) {
    lista.innerHTML += `<li>${nomi[i]}</li>`;
}

// button2.onclick = function () {
//     lista.innerHTML += `<li>${nome}</li>`; // alt+96
//     //"<li>" + nome + "</li>";
// }


const button3 = document.getElementById("btn3");
const paragrafi = document.getElementsByTagName("p");
const parSpeciali = document.getElementsByClassName("specialPar");


button3.onclick = function () {
    console.log(paragrafi)
    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].style.backgroundColor = "red";
    }
    for (let i = 0; i < parSpeciali.length; i++) {
        parSpeciali[i].style.backgroundColor = "green";
    }
}
