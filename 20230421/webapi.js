const url = 'https://jsonplaceholder.typicode.com/posts';

// XMLHttpRequest
let req = new XMLHttpRequest();
req.open('GET', url);
req.responseType = 'json';
req.send();
req.onload = function() {
    let data = req.response;
    console.log(data);
}