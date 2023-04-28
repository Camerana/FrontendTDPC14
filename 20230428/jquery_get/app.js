$(document).ready(function(){

    // jQuery methods go here...

    const url = "https://jsonplaceholder.typicode.com/todos";

    $.get(url, function(data) {
        console.log(data);
    });





});