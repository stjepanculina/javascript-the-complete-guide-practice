const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  // we use default argument so searchFilterHandler can pass argument to renderMovie. if searchFilterHandler is not used empty string is passed to rendermovie function
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  const filteredMovies = !filter // if filter is not truthy (fitler is empty string) then movies is passed to variable filteredMovies. if filter truthy then title from object newMovie in array movies is passed to variable filteredMovies
    ? movies 
    : movies.filter(movie => {
        movie.info.title.includes(filter);
      });

  movieList.innerHTML = "";

  filteredMovies.forEach( movie => {
    // depending on filteredMovies value
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - "; // chaining method
    for (const key in movie.info) {
      // for in loops for each element in array movie
      if (key !== "title") {
        //  if it's not title proceed with code
        text = text + `${key} : ${movie.info[key]}`; // outputting dynamic properties
      }
    }
    console.log(filteredMovies);
    movieEl.textContent = text;
    movieList.appendChild(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (title === "" || extraName === "" || extraValue === "") {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };
  movies.push(newMovie);
  renderMovies();
  console.log(newMovie);
};

const searchFilterHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  console.log(filterTerm)
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchFilterHandler);
