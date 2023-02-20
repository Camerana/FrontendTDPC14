let firstName = "Walter";
const numero = 42;

// numero += 2;
firstName = "Mike";


const lastName = 'White';

// backticks: ALT + 96
let testo = `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Optio nisi odit repellat unde eligendi dolor pariatur
    vero. Quas delectus doloremque suscipit enim voluptatibus
    dolorum officia omnis, dolorem animi. Dolorum, natus.
`; 


console.log('questo è un log');
console.log(lastName);
console.log('firstName è uguale a: ' + firstName);

console.log('firstName è uguale a: ' + firstName + ' e lastName è uguale a: ' + lastName)

// template literal:
console.log(`
    firstName è uguale a: ${firstName} e lastName è uguale a: ${lastName}
`)

const persone = [ "mike", "paul", "sara" ];
console.log(persone);
console.log(persone[2]);
console.log(persone.length);

for(let i = 0; i < persone.length; i++) {
    console.log(persone[i]);
}


const persona = {
    nome: "Julia",
    cognome: "Roberts",
    coloriPreferiti: [ "rosso", "verde" ],
    tagliaScarpe: 42,
    nubile: true,
    residenza: {
        citta: "",
        cap: 0998987
    }
}

persona.nome = "Sara";
// persona = {
//     nome: 'aaa'
// }
console.log(persona)

const urlGoogle = 'https://......'; 

// let test = 'aaa';
// test = 42;
// test = [ 43, 54, 545]; 



const 

