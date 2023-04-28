const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }).catch(err => console.lot(err));

