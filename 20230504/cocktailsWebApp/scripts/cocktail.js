// variabili globali
const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const divCocktail = document.querySelector("#containerCocktail");
const inputCocktail = document.querySelector("#inputCocktail");
const btnCerca = document.querySelector("#btnCerca");
const selectFavCocktail = document.querySelector("#selectFavCocktail");


// logica
callApi(urlCocktail, stampaCocktail);



// eventi
btnCerca.onclick = ()=> {
    // sbianca sezione cocktail
    divCocktail.innerHTML = "";
    // leggere l'input dell'utente
    const cocktailRicercato = inputCocktail.value;
    // comporre la nuova url 
    const nuovaUrl = urlCocktail + cocktailRicercato; // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=moj
    // richiamare la nuova api
    // loggare a schermo le nuove card
    callApi(nuovaUrl, stampaCocktail);
    // ripulire input
    inputCocktail.value = "";
}

selectFavCocktail.addEventListener("change", function(event) {
    //console.log(event.target.value);
    divCocktail.innerHTML = "";
    callApi(urlCocktail + event.target.value, stampaCocktail);
});


// funzioni
function callApi(url, callback) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        callback(data);
    });
}

function stampaCocktail(data) {
    for(c of data.drinks) {
        //console.log(c.strDrink);
        divCocktail.innerHTML += `
            <div class="col-md-3 col-sm-6">
                <div class="card my-2 classeCustom">
                    <img class="card-img-top" src="${c.strDrinkThumb}" alt="Card image">
                    <div class="card-body">
                    <h4 class="card-title">${c.strDrink}</h4>
                    <p class="card-text">
                        <b>Categoria:</b>
                        <br>${c.strCategory}
                    </p>

                    <button data-bs-toggle="collapse" data-bs-target="#D${c.idDrink}"
                    class="btn btn-danger">Ricetta</button>
                    <div id="D${c.idDrink}" class="collapse">
                        ${c.strInstructionsIT || "istruzioni non disponibili" }
                    </div>

                    </div>
                </div>
            </div>
        `;
    }
}