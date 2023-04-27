const url = 'https://jsonplaceholder.typicode.com/albums';

const req = new XMLHttpRequest();
req.open('GET', url);
req.responseType = 'json';
req.send();
req.onload = function () {
    let data = req.response;
    // console.log(data);

    //popolaTabella(data);

}

// function popolaParagrafo(albums) {
//     const p = document.querySelector("p");
//     p.innerText = albums[10].title;
// }



// ciclare l'array 
// per ogni elemento dell'array:
// creare una riga nella tabella
// creare 3 celle con i dati:
// id album	
// titolo	
// user id

function popolaTabella(albums) {

    // for(let i = 0; i < albums.length; i++) {
    //     console.log(albums[i]);
    // }

    const tbody = document.querySelector("tbody");

    for (a of albums) {
        //console.log(a);   

        tbody.innerHTML += `
            <tr>
                <td>${a.id}</td>
                <td>${a.title}</td>
                <td>${a.userId}</td>
            </tr>
        `;
    }
}




const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
const photo1 = document.querySelector("#photo1");
const divPhotos = document.querySelector("#photos");

getApi(urlPhotos);
function getApi(url) {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.responseType = 'json';
    req.send();
    req.onload = function () {
        let data = req.response;
        //console.log(data);

        //stampaPhoto1(data);
        stampaTuttePhotos(data);

    }
}

function stampaTuttePhotos(photos) {
    console.log(photos);
    
    for(let i = 0; i< 10; i++) {
        divPhotos.innerHTML += `
        <div class="col-4">
            <div class="card" style="width:200px">
                <img class="card-img-top" src="${photos[i].thumbnailUrl}" 
                    alt="Card image">
                <div class="card-body">
                <h4 class="card-title">${photos[i].id}</h4>
                <p class="card-text">${photos[i].title}</p>
                <p class="card-text">
                    <a target="_blank" href="${photos[i].url}">clicca qui</a>
                </p>
                </div>
            </div>
        </div>
        `;
    }
        
    
}

function stampaPhoto1(photos) {
    console.log(photos[0]); 
    photo1.innerHTML = `
    <div class="card" style="width:200px">
        <img class="card-img-top" src="${photos[300].thumbnailUrl}" 
            alt="Card image">
        <div class="card-body">
        <h4 class="card-title">${photos[300].id}</h4>
        <p class="card-text">${photos[300].title}</p>
        <p class="card-text">
            <a target="_blank" href="${photos[300].url}">clicca qui</a>
        </p>
        </div>
    </div>
    `;
}
