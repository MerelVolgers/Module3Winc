// Schrijf een loop die "iterate" van 0 tot 20. 
// Voor elke loop, check of het huidige nummer even is of oneven (odd).
// Console.log het nummer.

// Tip: gebruik de modulo functionaliteit.

// Resultaat in de console:
// 1 is oneven 
// 2 is even 
// 3 is oneven 
// 4 is even 
// etc.... 



for (i=0; i <= 20; i++){
    if (i % 2 === 0){ // i % 2 === 0; filtert alle nummers die even zijn: namelijk: 2/2, 4/2, 6/2 > alle even nummers kun je blijven delen door twee tot je 0 overhoudt!
    console.log(i + " is even");
    } else{
console.log(i + " is odd");
    }
}
