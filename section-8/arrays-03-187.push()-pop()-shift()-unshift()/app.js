/* // this lecture is showing different ways of creating arrays

const numbers = [1, 2, 3];
console.log(numbers);

/* const moreNumbers = new Array(5); // array made like this will output message (empty x 5) because it is emppty an has lenght 5. new keyword can be used but it is not necessary
console.log(moreNumbers);

const yetMoreNumbers = Array.of(5, 2); // niche cases
console.log(yetMoreNumbers); 

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems); // useful for converting array-like or iterable objects to real arrays
console.log(arrayListItems);

const hobbies = ["Sport", "Cooking"]; // strings

const personalData = [30, "Max", {someObject: []}]; // mixed data types

const analyticsData = [[1.6, 1], [-5.4, 2.1]]; // multidimensional arrays having multiple arrays

for (const data of analyticsData) { // this code would not work if there is number in array or some other noniterable object
    for (const dataPoint of data) {
        console.log(dataPoint);
    }
};  */

const hobbies = ["Sports", "Cooking"];
hobbies.unshift("Coding"); // add first element in array
hobbies.push("Reading"); // add last element in array
hobbies.pop(); // removes last element in array
 //const poppedValue = hobbies.pop(); // we can store opped values too!
 hobbies.shift(); // removes first element
 hobbies[1] = "Coding"; // this replace elemnt with another one
/*  hobbies[5] = "Reading" // rarely used*/
console.log(hobbies);

 // confused about names shift and unshift? shift moves element to te left so it deletes it from array unlike shift wich is opposite of shift function
