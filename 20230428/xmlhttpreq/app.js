const url = "https://jsonplaceholder.typicode.com/todos";

const req = new XMLHttpRequest();
req.open("GET", url);
req.send();
req.responseType = "json";
req.onload = ()=> {
    const data = req.response;
    console.log(data);
}