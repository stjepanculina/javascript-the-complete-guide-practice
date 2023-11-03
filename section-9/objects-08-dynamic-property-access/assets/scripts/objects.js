const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovieHandler = () => {
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
    let text = movie.info.title + " - ";
    for(const key in movie.info) { // for in loops for each element in array movie
      if (key !== "title") { //  if it's not title proceed with code
        text = text + `${key} : ${movie.info[key]}` // outputting dynamic properties
      }
      
    }
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
    id: Math.random(),
  };
  movies.push(newMovie);
  renderMovieHandler();
  console.log(newMovie);
};

addMovieBtn.addEventListener("click", addMovieHandler);
//searchBtn.addEventListener(click);
