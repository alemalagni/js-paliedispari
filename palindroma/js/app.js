// Funzione
function palindroma(word) {
    let pal = "";

    for (let i  = 0; i < word.length; i++) {
        pal = word[i] + pal;
    }
    
    if ( pal.toString() === word ) {
        console.log("La parola è palindroma")
    } else {
        console.log("La parola non è palindroma")
    }
}

// Script
const word = prompt("Inserire la parola");
palindroma(word);