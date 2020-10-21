// While loop:

// Maak en nieuwe map en nieuwe javascript file.
// Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
// Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.


// let myColors = ['yellow','blue', 'red', 'orange'];

// let i = 0;
// while (i < myColors.length) {
//     console.log(myColors [i] );
//     i ++;
// }
// console.log("Alle kleuren zijn geprint");

// // For loop:

// // Gebruik dezelfde array als startpunt.
// // Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
// // Gebruik de lengte van de array in je for loop: array.length
// // Het schrijven van een for of while loop kan best veel ruimte in beslag nemen. Daarnaast is het ook makkelijk om een foutje te maken.

// for ( i = 0; i < myColors.length ; i++) {
//     console.log(myColors [i] );
// }
// console.log("Alle kleuren zijn geprint")

// forEach:

// Gebruik dezelfde kleuren-array als startpunt
// Gebruik de forEach array method, om alle items in je array te loggen naar de console.
// Dit waren simpele oefeningen. De kern van deze oefening zit in het begrijpen van een for loop/ while loop ten opzichte van een array method. Beantwoord de volgende vragen en zet dit als comment onderin je file.

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// Hoeveel regels neemt mijn forEach method in beslag?
// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

let myColors = ["yellow","blue", "red", "orange"];

myColors.forEach((color) => console.log(color));



// for loop is 3 regels <> while loop is 5 regels
// for each is 1 regel
// voordelen array method: 
// a) geen verstikking in infinite loop 
// b)je hoeft niet bij te houden bij welke i je bent 
// c)direct toegang tot item dmv callback function
// d) semantischer: foreach geeft meteen aan wat je gaat doen

// je kunt een array method niet geburiken op een object
