const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

let movies = [];

const movieAddHandler = () => {
  const movieTitle = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (movieTitle === "" || extraName === "" || extraValue === "") {
    return;
  }

  const movie = {
    info: {
      title: movieTitle,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(movie);
  console.log(movies);
};

addMovieBtn.addEventListener("click", movieAddHandler);

