const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const divCocktail = document.querySelector("#containerCocktail");

callApi(urlCocktail, stampaCocktail);



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
            <p>${c.strDrink}</p>
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