// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."




const favoriteMovie = {
    title: "The road to heaven",
    duration: 120,
    stars: ["Michael", "Meryl", "Samuel"]
};

let printMovie = (movie) => {
    let message = (`${movie.title} lasts for ${movie.duration} minutes. Starring: ${movie.stars}.`);
    console.log(message);
}

printMovie(favoriteMovie);