const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

let movies = [];

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

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
  renderMovies();
  console.log(movies);
};

addMovieBtn.addEventListener("click", movieAddHandler);
