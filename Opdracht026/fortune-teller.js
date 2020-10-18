// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.



const tellFortune = (jobTitle , geographicLocation , partnersName , numberOfChildren) => {
    let future = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`
    console.log(future);
};

tellFortune("nurse", "alabama", "Hans", "2");
tellFortune("fireman", "Rotterdam", "William", "1");
tellFortune("horsewhisperer", "countryofoldmen", "gianni", "100");


