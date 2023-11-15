const addMovieBtn = document.getElementById("add-movie-btn");

const addfilterBtn = document.getElementById("filter-title");
const searchBtn = document.getElementById("search-btn");

let movies = [];

const someFnc = () => {
  const titleInput = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (titleInput === "" || extraName === "" || extraValue === "") {
    return alert(
      "Favorite Movie,Extra Name and Value input should not be empty!"
    );
  } else {
    const movieList = document.getElementById('movie-list');
    movieList.classList.add('visible');
    const li = document.createElement('li');
    movieList.append(li);
    li.textContent = 'some text'
    // listMovieEl.innerHTML = 'some text'
  }

  const movieData = {
    title: titleInput,
    name: extraName,
    value: extraValue,
  };
  movies.push(movieData);
  console.log(movieData, movies);
};

addMovieBtn.addEventListener("click", someFnc);
// addFilterBtn.addEventListener('onClick', someFnc);
