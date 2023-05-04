class Match {
    constructor(id, team1, team2) {
        this.id = id;
        this.team1 = team1;
        this.team2 = team2;
    }
}

class Team {
    constructor(id, nome, nazione, gruppo, rankGruppo, logo, estratto) {
        this.id = id;
        this.nome = nome;
        this.nazione = nazione;
        this.gruppo = gruppo;
        this.rankGruppo = rankGruppo;
        this.logo = logo;
        this.estratto = estratto;
    }
}

let team1 = new Team(1, 'Man. City', 'ENG', 'A', 1, 'MCT.png', false);
let team2 = new Team(2, 'Paris', 'FRA', 'A', 2, 'PSG.png', false);
let team3 = new Team(3, 'Liverpool', 'ENG', 'B', 1, 'LIV.png', false);
let team4 = new Team(4, 'Atlético', 'SPA', 'B', 2, 'ATL.png', false);
let team5 = new Team(5, 'Ajax', 'NED', 'C', 1, 'AJA.png', false);
let team6 = new Team(6, 'Sporting CP', 'POR', 'C', 2, 'SPO.png', false);
let team7 = new Team(7, 'Real Madrid', 'SPA', 'D', 1, 'RMD.png', false);
let team8 = new Team(8, 'Inter', 'ITA', 'D', 2, 'INT.png', false);
let team9 = new Team(9, 'Bayern', 'DEU', 'E', 1, 'BAY.png', false);
let team10 = new Team(10, 'Benfica', 'POR', 'E', 2, 'BEN.png', false);
let team11 = new Team(11, 'Man. United', 'ENG', 'F', 1, 'MUN.png', false);
let team12 = new Team(12, 'Villareal', 'SPA', 'F', 2, 'VIL.png', false);
let team13 = new Team(13, 'Losc', 'FRA', 'G', 1, 'LOS.png', false);
let team14 = new Team(14, 'Salzburg', 'AUT', 'G', 2, 'SAL.png', false);
let team15 = new Team(15, 'Juventus', 'ITA', 'H', 1, 'JUV.png', false);
let team16 = new Team(16, 'Chelsea', 'ENG', 'H', 2, 'CHE.png', false);

let allTeams = [team1, team3, team5, team7, team9, team11, team13, team15, team2, team4, team6, team8, team10, team12, team14, team16];
let teamFascia1 = [team1, team3, team5, team7, team9, team11, team13, team15];
let teamFascia2 = [team2, team4, team6, team8, team10, team12, team14, team16];

let numeroIncontro = 1;
let allMatch = [];

popolaTabellaTeam();


const btn = document.getElementById('btnSorteggia');
btn.onclick = function () {

    while (numeroIncontro < 9) {

        // debugger;

        // 1. estraggo un team random dall'array con 16 squadre (che non sia ancora stato estratto)         OK;
        // 1b. setto come "estratto" il team appena estratto
        // 2. ciclo le 16 squadre:                                                                          OK;
        //     a. individuo quelle che possono battersi con la squadra estratta al punto 1                  OK;
        //      b. inserisco queste squadre in un array                                                     OK;
        // 3. da questo nuovo array estraggo una squadra a random trovando il primo match                   OK;
        // 3b. setto come "estratto" il team appena estratto                                                OK;
        // 5. ripeto l'operazione per gli altri 7 incontri

        // 1.
        let teamRandom1 = cercoTeamRandom(allTeams);
        // console.log(teamRandom1.nome);
        while (teamRandom1 == null) {
            teamRandom1 = cercoTeamRandom(allTeams);
        }
        // 1b.
        teamRandom1.estratto = true;

        // 2.
        let teamEstraibili = [];
        allTeams.forEach(function (item) {
            // 2a.
            if (item.nazione != teamRandom1.nazione
                && item.gruppo != teamRandom1.gruppo
                && item.rankGruppo != teamRandom1.rankGruppo) {
                // 2b.
                teamEstraibili.push(item);
            }
        });
        // console.log(teamEstraibili);

        // 3.
        let teamRandom2 = cercoTeamRandom(teamEstraibili);
        while (teamRandom2 == null) {
            teamRandom2 = cercoTeamRandom(teamEstraibili);
        }
        // 3b.
        teamRandom2.estratto = true;

        let match = new Match(numeroIncontro, teamRandom1, teamRandom2);
        allMatch.push(match);

        numeroIncontro++;

    }

    allMatch.forEach(function (item) {
        // console.log(`${item.id}: ${item.team1} VS ${item.team2}`);
        document.getElementById('bodyTabMatch').innerHTML += `
            <tr>
                <td>
                    ${item.id}
                </td>
                <td>
                    ${item.team1.nome} (${item.team1.nazione}) [${item.team1.rankGruppo}]
                    VS
                    ${item.team2.nome} (${item.team2.nazione}) [${item.team2.rankGruppo}]
                </td>
                <td>
                    <img class="teamsLogo" src="images/uclTeamsLogo/${item.team1.logo}">
                    <img class="teamsLogo" src="images/uclTeamsLogo/${item.team2.logo}">
                </td>
            </tr>
        `;
    });
}

/*
    cerca squadra random
        verifica che non sia estratta altrimenti ne cerca un'altra
        una volta trovata, la setta copme estratta e ritorna quel team
    parametro 1: array in cui cercare
    return: oggetto di tipo Team 
*/
function cercoTeamRandom(collezione) {

    let indiceRandom = Math.floor(Math.random() * collezione.length);
    let randomTeam = collezione[indiceRandom];
    if (!randomTeam.estratto) {
        return randomTeam;
    }
    else
        return null;

}


function popolaTabellaTeam() {
    const tabellaTeam = document.getElementById('bodyTabTeam');

    tabellaTeam.innerHTML = '';

    allTeams.forEach(function (item) {

        let classeColore = '';
        if (item.estratto == true) {
            classeColore = 'table-danger';
        }

        tabellaTeam.innerHTML += `
            <tr class="${classeColore}">
                <td>
                    ${item.nome} (${item.nazione}) 
                </td>
                <td>
                ${item.gruppo} ${item.rankGruppo}
                </td>
                <td>
                    (${item.nazione})
                </td>
            </tr>
        `;
    });

}


