let test = 10;

const testIsPari = pari(test);
if (testIsPari) {
    alert(`il numero ${test} è pari`);
}
else {
    alert(`il numero ${test} è dispari`);
}


if (test == '42') {
    // debugger; 
    // f10 istruzione per istruzione
    // f11 entrare dentro le funzioni
    // f8 saltare al prossimo debugger
    settaContenuto();
}
else {
    saluta('utente');
}




function settaContenuto() {
    const div = document.getElementById('contenuto');
    div.innerText = 'setta contenuto';
}

function saluta(nome) {
    alert('ciao ' + nome);
}

function somma(num1, num2) {
    const tot = num1 + num2;
    return tot;
}

function pari(num1) {
    if (num1 % 2 == 0)
        return true;
    else return false;
}