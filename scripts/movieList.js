// Creates a function to list out each movie in the HTML index, using imported functions from other two files

import { getMovies } from "./movieData.js";
import { tagMovies } from "./movieString.js";

// First link to the correct spot in the index file
let movieBox = document.querySelector("#container");

// Then create a new function that takes each movie, writes it with HTML tags, and appends it to the list with all the movies to put in the index
export function listMovies() {
    // Make a new list of each movie for this script
    const allMovies = getMovies();
    // create an html block that will be updated with each movie
    let movieHTML = "";
    // loop over each movie in our list, add the html tags, and then add it to the end of the html block we just created
    for (let i = 0; i < allMovies.length; i++) {
        movieHTML += tagMovies(allMovies[i]);
    }
    // after looping through each movie and adding html, paste all that into earlier link for the index with any other one time html text needed
    movieBox.innerHTML = `${movieHTML}`;
}