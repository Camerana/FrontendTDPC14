// const ul = document.querySelector("ul");
// const arrayPersone = []


const persona = {
    id: 1,
    nome: "Pippo",
    interessi: ["cucina", "musica"],
    patentato: false,
    residenza: {
        via: "Roma, 42",
        cap: 34543354
    }
}

const persona2 = {
    id: 2,
    nome: "Giovanni",
    interessi: ["cucito", "basket"],
    patentato: true,
    residenza: {
        via: "Torino",
        cap: 4564654
    },
    saluta: function() {
        console.log(`ciao io sono ${this.nome}`)
    }
}

persona2.saluta()

// arrayPersone.push(persona, persona2)

// for(p of arrayPersone) {
//     ul.innerHTML += `
//     <li>${p.nome}</li>
//     `; 
// }

// const li = document.createElement("li");
// li.innerText = persona.nome;
// ul.appendChild(li);



