// Funzione
function genCpu() {
    return parseInt(Math.random() * 5 + 1);
}

function risultato(tot) {
    return tot % 2 
}

// Script
const scelta = prompt("Scegliere tra pari e dispari");
if ( scelta != "pari" || scelta != "dispari" ) {
    console.log("Scelta non valida");

} else {
    const numUser = parseInt(prompt("Scegliere un numero tra 1 e 5"));

    if ( numUser < 1 || numUser > 5 ) {
        console.log("Scelta non valida");
    } else {
        let tot = numUser + genCpu();
        if ( (risultato(tot) === 0 && scelta === "pari") || (risultato(tot) === 1 && scelta === "dispari") ) {
            console.log("Ha vinto l'utente");
        } else {
            console.log("Ha vinto il computer");
        }
    }
}