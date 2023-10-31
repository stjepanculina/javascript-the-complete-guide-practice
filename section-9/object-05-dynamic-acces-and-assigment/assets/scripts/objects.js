const movieList = document.getElementById("movie-list");
console.log(movieList);
// movieList.style.backgroudnColor = "red";
movieList.style["background-color"] = "red"; // acessing a string in style property thanks to square brackets
movieList.style.display = "block";

let person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
  1.5: "hello",
};

person.age = 29; // modifying an object values

person.isAdmin = true; // adding an object values

// person.greet = undefined  sets an object value to undefined but does not delete it

// person.greet = null same as undefined but sets it to null instead

delete person.greet; // deletes an object value and key value

console.log(person["first name"]); // with a square bracket we can access object key names wich are in named in primitive value string.

console.log(person[1.5]); //  accessing key names with brackets wich value is type of number , there is no need for apostrophe. 

console.log(person); // output will show an object and if that object has some number/s as key value it will show them in ascending order
