/**
 * 
 * Lecture 7.179: Starting with the Application Logic
 * 
 * Robert Hieger
 * 12/05/2022
 * 
 * OBJECTIVE: The objective of Lecture 7.179 is to capture
 * the two elements in the modal that confirms deletion of
 * a movie. There is one DOM object for the "No (cancel)"
 * button and a second for the "Yes" button confirming the
 * deletion of the movie.
 * 
 * The second objective is to declare two event listeners
 * wired to the "No" and "Yes" buttons on the modal. The
 * "No" button event listener should have a callback
 * function that closes the confirmation modal and hides
 * the backdrop. The "Yes" button event listener closes
 * the modal, hides the backdrop and removes the specified
 * movie item.
 * 
 * Additionally, references to renamed functions have
 * to be updated. A couple of bugs remain, but these
 * will be address in Lecture-7.180.
 * 
 * SOME SAMPLE URLs for movie images:
 * 
 * 1. The Tall Guy
 *    https://m.media-amazon.com/images/I/51N9GBFJTWL.jpg
 * 
 * 2. My Cousin Vinny
 *    https://m.media-amazon.com/images/I/51B5VNCN7QL.jpg
 * 
 * 3. Life Stinks
 *    https://m.media-amazon.com/images/I/5146F7FCH9L.jpg
 * 
 * 4. Harry Potter and the Order of the Phoenix
 *    https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1580415741004-5K6ZFHXVINGT91CV90IG/HP5+Ultimate+Edition+Blu-Ray.jpg?format=1500w
 * 
 */


// DOM Objects
const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document
  .querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal
  .querySelector('.btn--passive');
const confirmAddMovieButton =
  cancelAddMovieButton.nextElementSibling;
const userInputs =
  addMovieModal.querySelectorAll('input');
const textEntryDefault =
  document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');
const deleteMovieModal =
  document.getElementById('delete-modal');

// Declare Datastore to contain movie objects:
const movies = [];

// Check length of movies array. If not empty,
// hide default message and display the movie(s).
const updateUI = () => {
  if (movies.length === 0) {
    textEntryDefault.style.display = 'block';
  } else {
    textEntryDefault.style.display = 'none';   
  }
}; 

// Render Movie Element to Screen
const renderMovieElement =
  (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML =
    `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement
      .addEventListener(
        'click', confirmDeleteMovieHandler.bind(null, id)
    );
    listRoot.append(newMovieElement);
};

const deleteMovieHandler = (movieId) => {
  // Contains index of movieId
  // passed to function.
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  toggleBackdrop();
  updateUI(); // check if there is any movies if not displays correspoding text from "entry-text" card
  deleteMovieModal.classList.toggle("visible"); // closes "delete modal" modal
};

// Delete a Movie Element from the Screen
const confirmDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  // DOM Objects
  const cancelDeletionButton =
    deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionButton =
    deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true)); //hacky solution. Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

    confirmDeletionButton =
    deleteMovieModal.querySelector('.btn--danger');

  // EventListeners
/*   confirmDeleteMovieHandler.removeEventListener("click", deleteMovieHandler.bind(null, movieId)); // will not work because there is "bind" function
 */  cancelDeletionButton.removeEventListener(
  "click", closeMovieDeletionModal
  );
  cancelDeletionButton.addEventListener(
    'click', closeMovieDeletionModal
  );
  confirmDeletionButton.addEventListener(
    'click', deleteMovieHandler.bind(null, movieId)
  );
};

// Allows user to cancel deletion of a movie
const closeMovieDeletionModal = () => {
   toggleBackdrop(); // hides backdrop
  deleteMovieModal.classList.remove('visible');
};

// Callback Functions
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

// Closes modal for movie entry
const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
  clearMovieInput();
};

// Reveals modal for movie entry
const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

// Empties movie input fields
const clearMovieInput = () => {
  for (const input of userInputs) {
    input.value = '';
  }
  
};

// Removes Modal and backdrop on "Cancel" button click
const cancelAddMovieHandler  = () => {
  closeMovieModal();  // closes entry modal
  clearMovieInput();  // empties input data
  toggleBackdrop(); // hides backdrop
};

// Removes backdrop any time modal closes
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};

// Handles creation of movie objects to be stored
// in movies array.
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert(
      'Please enter valid values' +
      ' (rating between 1 and 5).'
    );
    return;
  }

  // Holds movie object to be pushed to movies array:
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);

  // For Diagnostic purposes only
  console.log(movies);

  // Removes modal and backdrop
  closeMovieModal();

  // Remove backdrop
  toggleBackdrop();
  
  // Clear modal input fields
  clearMovieInput();

  // Insert new movie into DOM and display on page
  renderMovieElement(
    newMovie.id, newMovie.title,
    newMovie.image, newMovie.rating
  );

  // Hide default entry message
  updateUI();
};

// EventListeners
startAddMovieButton
  .addEventListener('click', () => {
    showMovieModal();
  });

backdrop.addEventListener(
  'click', backdropClickHandler
);

cancelAddMovieButton.addEventListener(
  'click', cancelAddMovieHandler
);

confirmAddMovieButton.addEventListener(
  'click', addMovieHandler
);
