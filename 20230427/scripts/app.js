
$(document).ready(function () {

    // jQuery methods go here...
    const urlCocktails = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.get(urlCocktails, function(data) {
        console.log(data);
    });
    
});






// const persone = ["Gino", "Pino"];

// persone.forEach(function(p) {
//     console.log(p);
// });

// setTimeout(function() {}, 7000);

// persone.forEach(p => {
//     console.log(p);
// });

// setTimeout(() => { }, 7000);

// const urlCocktails = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


// callApi(urlCocktails, stampaDati)


// function callApi(url, callback) {
//     const req = new XMLHttpRequest();
//     req.open("GET", url);
//     req.send();
//     req.responseType = "json";
//     req.onload = function () {
//         const data = req.response;
//         callback(data);
//     }
// }

// function stampaDati(data) {
//     console.log(data);
// }




// test1(test2);
// function test1(callback) {
//     setTimeout(function() {
//         console.log("test1");
//         let uova = 42;
//         callback(uova);
//     }, 5000);
// }
// function test2(numeroUova) {
//     console.log("test2: " + numeroUova);
// }





// console.log("inzio script");
// let uova = getUova();
// console.log(uova);
// console.log("fine script");




// function getUova() {
//     setTimeout(function() {
//         console.log("getUova eseguita");
//         return 42;
//     }, 4000);
// }








// console.log("inzio script");
// saluta();
// console.log("fine script");




// function saluta() {
//     setTimeout(function() {
//         console.log("saluta eseguita");
//     }, 4000);
// }








// function esegui() {
//     // fa cose...
//     for (let i = 0; i < 50000000; i++) {
//         const d = new Date();
//     }
//     console.log("esegui terminata");
// }











// RIPASSO:
// const urlCocktails = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// const req = new XMLHttpRequest();
// req.open("GET", urlCocktails);
// req.send();
// req.responseType = "json";
// req.onload = function() {
//     const data = req.response;
//     console.log(data)
// }