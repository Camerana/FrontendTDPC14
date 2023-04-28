
$(document).ready(function () {

    const urlPokemons = "https://pokeapi.co/api/v2/pokemon";
    const pokeContainer = $("#poke-container");

    $.get(urlPokemons, function (data) {
        console.log(data);

        for (poke of data.results) {
            pokeContainer.append( `
            <div class="col-4 mb-3">
                <div class="card" style="width:auto">
                    <div class="card-body">
                    <h4 class="card-title">${poke.name}</h4>
                    <a target="_blank" href="${poke.url}" class="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
            `);
        }


    });

});