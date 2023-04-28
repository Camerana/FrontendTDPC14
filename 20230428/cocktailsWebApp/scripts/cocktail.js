// variabili globali
const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const divCocktail = document.querySelector("#containerCocktail");
const inputCocktail = document.querySelector("#inputCocktail");
const btnCerca = document.querySelector("#btnCerca");


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
                <div class="card my-2" style="width:auto">
                    <img class="card-img-top" src="${c.strDrinkThumb}" alt="Card image">
                    <div class="card-body">
                    <h4 class="card-title">${c.strDrink}</h4>
                    <p class="card-text">
                        <b>Categoria:</b>
                        <br>${c.strCategory}
                    </p>

                    <button data-bs-toggle="collapse" data-bs-target="#D${c.idDrink}"
                    class="btn btn-danger">Collapsible</button>
                    <div id="D${c.idDrink}" class="collapse">
                        ${c.strInstructionsIT}
                    </div>

                    </div>
                </div>
            </div>
        `;
    }
}

// script
    // chiamata base web api                    OK
    // input utente e button e lettura dato
        // rifare chiamata url aggiornata
    //creazione funzioni per generazione card


// bootstrap 5 ...
    // libreria
    // capire quali componenti usare
    // personalizzare css