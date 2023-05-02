


const inputNome = document.querySelector("#inputNome");
const btnCerca = document.querySelector("#btnCerca");
const btnMagia = document.querySelector("#btnMagia");
const selectCities = document.querySelector("#selectCities");



if(1 === "1") {
    alert("passo da qui");
}





selectCities.addEventListener("change", function(event) {
    console.log(event.target.value);
});


// gestire l'evento
// btnCerca.onclick = function() {
//     console.log(inputNome.value);
// }

btnCerca.addEventListener("click", function(event) {
    console.log(inputNome.value);
    console.log(event);
});

btnMagia.onclick = function() {
    //debugger;
    inputNome.value = "Pippo";
}

inputNome.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        console.log("ha pigiato enter");
    } 
    else {
        console.log("NON ha pigiato enter");
    }
});






