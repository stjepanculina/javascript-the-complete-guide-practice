const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.console.log(filteredMovies);

  filteredMovies.forEach((movie) => {
    // forEach elemnt (movie) in global movies array, perform designated code
    const movieEl = document.createElement("li");
    if ("info" in movie) {
      // checks if info keyword exist in movie object
      // checks for property existance
      console.log(true);
    } else {
      console.log(false);
    }
    if (movie.info === undefined) {
      // checks if info keyword exist in movie object
      // also checks for property existance
      console.log(true);
    } else {
      console.log(false);
    }
    // const { info, ...otherProp } = movie; // object destructuring.right side of = is object we want to destruct,left side of = is key names we need(info). (...otherProp) => using rest operator to add other property besides info
    //  const { title: movieTitle } = info;  destructuring info object  and changing key name "title" to "movieTitle"
    // let text = movie.getFormatedTitle() + ' - '; // thanks to this keyword we can call a function ("getFormatedTitle") inside an object
    // another method for this keyword
    const { getFormatedTitle } = movie; // destructured function from object movie
    getFormatedTitle = getFormatedTitle.bind(movie); // binds this keyword to movie object
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  console.log(extraName);

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    /*     getFormatedTitle: function () { longer syntax
      return this.info.title.toUpperCase(); 
    }, */
    getFormatedTitle() {
      return this.info.title.toUpperCase(); // this keyword is refering to this object ("newMovie")
    },
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
