// esercizio tabella
const persone = [
    {
        id: 1001,
        nome: "pino"
    },
    {
        id: 1002,
        nome: "laura"
    }
]

const tbody = document.getElementById("tbl");

for (let i = 0; i < persone.length; i++) {
    tbody.innerHTML += `
        <tr>
            <td>${persone[i].id}</td>
            <td>${persone[i].nome}</td>
        </tr>
    `;
}

