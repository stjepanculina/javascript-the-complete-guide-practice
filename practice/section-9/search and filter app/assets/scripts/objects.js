const addMovieBtn = document.getElementById("add-movie-btn");

const searchBtn = document.getElementById("search-btn");

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

const someFnc = () => {
  const addfilterBtn = document.getElementById("filter-title").value;
  // const inputText = addfilterBtn.toString();
  const filteredMovies = movies.filter((movie) => {
    movie.titleInput.includes(addfilterBtn);
  });
  console.log(filteredMovies);
};
const renderMovies = (movieInfo = "") => {
  const movieList = document.getElementById("movie-list");
  movieList.classList.add("visible");
  const li = document.createElement("li");
  movieList.append(li);
  li.innerHTML = `${movieInfo.title} - ${movieInfo.name} ${movieInfo.value}`;
};

addMovieBtn.addEventListener("click", getAndPushData);
searchBtn.addEventListener("click", someFnc);
