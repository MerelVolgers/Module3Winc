// Opdracht 1: Een click event vastmaken aan een button

// Gebruik een click event en "attach" het click event aan de button
// Wanneer er op de button geklikt wordt, geef een alert: "button clicked" (net zoals je in de video hebt gezien)

const alertButton = document.getElementById("mybutton");
alertButton.addEventListener("click", function () {
  alert("button clicked!");
});


// Opdracht 2:

// Voeg een tweede button toe aan je HTML met de tekst "Change Background"

// geef de body tag de class "blue-background"

// Maak een nieuwe functie die de volgende functionaliteiten in zich heeft:

// Maak een klik event vast aan de nieuwe button

// Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element. 

// const backgrButton = function () {
//     const bodyElement = document.body;
//     bodyElement.classList.add ("red-background");
// };

// const colorButton = function () {
//     const changeColorButton = document.getElementById ("changebackgr");
//     changeColorButton.addEventListener ("click" , function () {
//         backgrButton();
//     });
// };

// colorButton();

// Opdracht 3:

// We gaan de changeColor functie veranderen zodat de achtergrondkleur ook weer terug veranderd naar rood wanneer er op de knop wordt geklikt. De achtergrondkleur wordt dan "getoggeld" , met andere woorden: erop gezet en er weer afgehaald en er weer opgezet, etc.
// Verander de naam van de functie van changeColor naar toggleColor
// In plaats van het toevoegen van een extra class "red-background" aan de classlist gaan we de class togglen. Gebruik Google om erachter te komen hoe je dit doet. Hint: toggle.


const backgrButton = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle ("red-background");
};

const colorButton = function () {
    const toggleColorButton = document.getElementById ("changebackgr");
    toggleColorButton.addEventListener ("click", function() {
        backgrButton();
    });
    
};

colorButton();

