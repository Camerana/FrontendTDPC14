/*
    commento multilinea
*/

console.log('inizio file js');
// dichiarazione e inizializzazione
var nome;
nome = 'Walter';
// concatenazione stringhe:
console.log('il mio nome: ' + nome);

var eta = 55;

// errore: banana non esiste!
// console.log(banana);

// attenzione ai possibili problemi di var
eta = 'pippo';
var colore = 'rosso';
var colore = 42;


// post 2015: let e const
const cognome = 'White';
let cittaResidenza = 'Ivrea';

// non la posso modificare
// cognome = 'Ciao';
cittaResidenza = 'Roma'; 

let disponibile = true;
let coloriPreferiti = ['rosso', 'blu', 42, true];

console.log(coloriPreferiti);
console.log(coloriPreferiti[2]);

const valore = 666.66;

const animale = {
    nome: 'Giotto',
    eta: 13,
    tipo: 'cane',
    sottoTipo: 'dalmata',
    vivo: false,
    colori: ['nero', 'bianco'],
    proprietario: {
        nome: 'Alessandro',
        nazionalita: 'italiano'
    }
}

animale.vivo = true;
// animale = 42;

animale.pelo = 'corto';

console.log(animale);
console.log(animale.sottoTipo);
console.log(animale.proprietario.nazionalita);
console.log(animale.colori[1]);
console.log(animale.vivo);


const numeri = [42, 3, 6, 90, 42];
numeri[1] = 42;
console.log(numeri);

// per verificare il tipo di una variabile
console.log(typeof(animale.eta));

console.log('fine file js');






