
$(document).ready(function () {

    const urlPokemons = "https://pokeapi.co/api/v2/pokemon";
    const pokeContainer = document.querySelector("#poke-container");

    $.get(urlPokemons, function (data) {
        console.log(data);

        for (poke of data.results) {
            pokeContainer.innerHTML += `
            <div class="col-4">
                <div class="card" style="width:400px">
                    <div class="card-body">
                    <h4 class="card-title">${poke.name}</h4>
                    <a target="_blank" href="${poke.url}" class="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
            `;
        }


    });

});