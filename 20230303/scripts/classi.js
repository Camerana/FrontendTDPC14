const btnCambiaColore = document.getElementById("btnCambiaColore");
const btnReset = document.getElementById("btnReset");
const pars = document.getElementsByTagName("p");

btnCambiaColore.onclick = function () {
    for (let i = 0; i < pars.length; i++) {
        // console.log(pars[i].classList)
        pars[i].classList.add("rosso");
    }
    btnCambiaColore.classList.add("btn", "btn-success");
}

btnReset.onclick = function() {
    for (let i = 0; i < pars.length; i++) {
        pars[i].classList.remove("rosso");
    }
}

// function cambiaColore() {}