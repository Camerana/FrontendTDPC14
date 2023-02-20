let testo = "ciao io sono testo creato con javascript...";
testo = testo.replace("ciao", "hola");
let index = testo.indexOf("javascript");
console.log(index);

let testo2 = 'ciao hola';
let y = testo2.substring(5,7) //ho
console.log(y);
// selezionare l'elemento che ha un id specifico 
const contenuto = document.getElementById("contenuto");
// inserire del testo nell'elemento
contenuto.innerText = testo;


const x = document.getElementById("pippo");
x.innerText = 'ciaone'; 


let numero = 45.487587348758765834;
numero = numero.toFixed(2); //45.49
console.log(numero);


const colori = ["rosso", "giallo", "verde", "blu"];
console.log(colori);

colori.pop();
console.log(colori);

colori.push("magenta");
console.log(colori);

colori.shift();
console.log(colori);

colori.unshift("ciano");
console.log(colori);









