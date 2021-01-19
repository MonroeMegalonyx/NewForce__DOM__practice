// Creates a function to write each movie object with proper HTML tags
export function tagMovies(movieObject) {
    return `
    <section class="movie-card">
    <img class="movie-card__image" src=${movieObject.image} alt="Movie Poster" />
    <div class="fish-card__text">
    <p>${movieObject.title}</p>
    <p>${movieObject.director}</p>
    <p>${movieObject.rank}</p>
    </div>
    </section>
    `
};
