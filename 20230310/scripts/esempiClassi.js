class Persona {
    #nome;
    constructor(userid, firstname, anno) {
        this.id = userid;
        this.#nome = firstname;
        this.anno = anno;
    }
    getNome() {
        return this.#nome;
    }
    saluta() {
        return `ciao io sono ${this.#nome}`;
    }
    cambiaNome(nuovoNome) {
        if (nuovoNome != "") {
            this.#nome = nuovoNome;
        }
    }
    static infoClass() {
        console.log(`questa è la class Persona`)
    }
    static differenzaEta(anno1, anno2) {
        console.log(anno1 - anno2);
    }
}

class Studente extends Persona {
    constructor(userid, firstname, mediaVoti) {
        super(userid, firstname);
        this.mediaVoti = mediaVoti;
    }
    saluta() {
        return `bella zio, io sono ${this.getNome()}`;
    }
    static infoClass() {
        console.log("questa è la class Studente")
    }
}

class Docente extends Persona {
    constructor(userid, firstname, materia) {
        super(userid, firstname);
        this.materia = materia;
    }
    saluta() {
        return `buonasera, io sono ${this.getNome()}`;
    }
    static infoClass() {
        console.log("questa è la class Docente")
    }
}


const ul = document.querySelector("ul");
const arrayPersone = [];

const p1 = new Persona(1, "Pino");
// p1.#nome = "Lino";
// p1.cambiaNome("Maria");
// console.log(p1)
// console.log(p1.getNome())

const p2 = new Persona(2, "Maria");
const p3 = new Persona(3, "Lara");
const p4 = new Persona(4, "Sara");

arrayPersone.push(p1, p2, p3, p4);

for (p of arrayPersone) {
    ul.innerHTML += `<li>${p.getNome()}</li>`
}

// ereditarietà
// polimorfismo
// incapsulamento

const s1 = new Studente(65, "Paolo", 45);
s1.cambiaNome("Olaf")
console.log(s1.saluta());

const d1 = new Docente(45, "Nicola", "storia");
console.log(d1.saluta());


Persona.infoClass();


const p5 = new Persona(9, "Piera", 1953)
const p6 = new Persona(10, "Corrado", 1944)

Persona.differenzaEta(p5.anno, p6.anno);
