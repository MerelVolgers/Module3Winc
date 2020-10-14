const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = 'Bram';
const totalAmount = 90;

if (age >= 18) {
    console.log("Mag naar binnen");
} else {
    console.log("mag niet naar binnen");
}



if (isFemale) {
    console.log("True");
} else {
    console.log("false");
}



if (diverStatus === "bob") {
    console.log("U mag rijden");
} else {
    console.log("U mag niet rijden");
}


if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Je betaalt de normale ticket prijs");
}

if (name === 'Bram' || name === 'sarah') {
    console.log("Jij krijgt een gratis biertje!");
} else {
    console.log("Wij zijn vandaag 50 jaar!");
}

if (totalAmount >= 25) {
    console.log("Jij krijgt gratis vega bitterballen");
} else if (totalAmount >= 50) {
    console.log("Jij krijgt een gratis portie nachos!");
} else if (totalAmount >= 100) {
    console.log("Jij krijgt een gratis fles champagne!");
} else {
    console.log("Geef meer geld uit en krijg iets gratis!");
}