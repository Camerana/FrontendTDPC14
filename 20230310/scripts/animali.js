let contatoreAnimali = 0;
class Animale {
    #id;
    #nome;
    #numeroZampe = 0;
    #munitoDiAli = null;
    constructor(nome) {
        contatoreAnimali++;
        this.#id = contatoreAnimali;
        this.#nome = nome;
        alert(this.saluta())
    }
    getId() {
        return this.#id;
    }
    faiVerso() {
        return "";
    }
    getNome() {
        return this.#nome;
    }
    saluta() {
        return `${this.faiVerso()}, io sono ${this.#nome}`;
    }
    infoClasse() {
        return "animale"
    }
    setNumeroZampe(value) {
        this.#numeroZampe = value;
    }
    setMunitoDiAli(value) {
        this.#munitoDiAli = value;
    }
    getNumeroZampe() {
        return this.#numeroZampe;
    }
    getMunitoDiAli() {
        return this.#munitoDiAli;
    }
}

class Gatto extends Animale {
    constructor(nome) {
        super(nome)
        this.setNumeroZampe(4);
        this.setMunitoDiAli(false);
    }
    faiVerso() {
        return "Meooow"
    }
    infoClasse() {
        return "gatto"
    }
    faiLeFusa() {
        return "Frr Frr Frr"
    }
}

class Piccione extends Animale {
    constructor(nome) {
        super(nome)
        this.setNumeroZampe(2);
        this.setMunitoDiAli(true);
    }
    faiVerso() {
        return "Urrru Urrru";
    }
    infoClasse() {
        return "piccione"
    }

}



const inputNome = document.querySelector("#nome");
const radioGatto = document.querySelector("#gatto");
const radioPiccione = document.querySelector("#piccione");
const btnCrea = document.querySelector("#btnCrea");
const tbody = document.querySelector("tbody");

btnCrea.onclick = function () {
    if (inputNome.value != "") {
        let animale;
        if (radioGatto.checked) {
            animale = new Gatto(inputNome.value);
        } else {
            animale = new Piccione(inputNome.value);
        }
        inputNome.value = "";
        popolaTabella(animale);
    } else {
        alert("devi inserire un nome!")
    }
}

function popolaTabella(a) {
    let capacitaVolare;
    if (a.getMunitoDiAli())
        capacitaVolare = "può volare";
    else capacitaVolare = "non può volare";
    tbody.innerHTML += `
    <tr>
        <td>${a.getId()}</td>
        <td>${a.getNome()}</td>
        <td>${a.infoClasse()}</td>
        <td>
          	<button class="btn btn-sm btn-outline-success" onclick="alert('${a.faiVerso()}')"
              >verso</button>
        </td>
        <td>
          	<button class="btn btn-sm btn-outline-success" onclick="alert('${a.saluta()}')"
              >saluta</button>
        </td>
        <td>
            <ul>
                <li>
                    n° ${a.getNumeroZampe()} zampe
                </li>
                <li>
                    ${capacitaVolare}
                </li>
            </ul>
            
        </td>
    </tr>
    `;
}

