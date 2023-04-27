// oggetto js
const p = {
    name: 'John',
    congnome: "White",
    age: 30,
    car: null,
    favColors: ['blue', 'red'],
    address: {
        cap: 943348,
        citta: "torino",

    }
};



const data = `
[
    {
        "id": 42,
        "titolo": "Guida galattica per autostoppisti",
        "numeroPagine": 4354,
        "generi": [
            "fantasy",
            "romanzo"
        ]
    },
    {
        "id": 11,
        "titolo": "Pippo",
        "numeroPagine": 32,
        "generi": [
            "giallo",
            "horror"
        ]
    }
]
`;

// trasformato stringa in oggetto js
const libriObj = JSON.parse(data);

// console.log(libriObj[0].titolo);

// modificato oggetto js
libriObj[0].annoPubblicazione = 1980;
console.log(libriObj[0]);

// trasformato in stringa
const libriStr = JSON.stringify(libriObj);

console.log(typeof(libriStr)); // stringa

