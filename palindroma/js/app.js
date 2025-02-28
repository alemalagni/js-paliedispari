// Funzione
function palindroma(word) {
    let pal = null;
    for (let i  = word.length; i > 0; i--) {
        pal[ word.length - i ] = word[i];
    }
    if ( pal === word ) {
        console.log("La parola è palindroma")
    } else {
        console.log("La parola non è palindroma")
    }
}

// Script
const word = prompt("Inserire la parola");
palindroma(word);