const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");

let movies = [];

const getAndPushData = () => {
  const titleInput = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (titleInput === "" || extraName === "" || extraValue === "") {
    return alert(
      "Favorite Movie,Extra Name and Value input should not be empty!"
    );
  } else {
    if (!titleInput || !extraName || !extraValue) {
      titleInput.trim();
      extraName.trim();
      extraValue.trim();
    }
    const movieData = {
      title: titleInput.toUpperCase(),
      name: extraName,
      value: extraValue,
      id: Math.random(),
    };
    movies.push(movieData);
    console.log(movieData, movies);
    //renderMovies();
    renderMovies(movieData);
  }
};

const filterMovies = () => {
  const addfilterBtn = document.getElementById("filter-title").value.toUpperCase();
  // const inputText = addfilterBtn.toString();
  const filteredMovies = movies.filter((movie) =>
    movie.title.includes(addfilterBtn)
  );
  movieList.classList.remove('visible');
  movieList.innerHTML = "";
  renderMovies("", filteredMovies);
};

const renderMovies = (movieInfo = "", filteredMovie) => {
  movieList.classList.add('visible');
  if (!movieInfo) {
    filteredMovie.forEach((element => {
      const li = document.createElement('li');
      movieList.append(li);
      li.innerHTML = `${element.title} - ${element.name} ${element.value}`;
    }))
  } else {
    const li = document.createElement('li');
    movieList.append(li);
    li.innerHTML = `${movieInfo.title} - ${movieInfo.name} ${movieInfo.value}`;
  }
};

addMovieBtn.addEventListener("click", getAndPushData);
searchBtn.addEventListener("click", filterMovies);
