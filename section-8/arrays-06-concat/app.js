// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, 1,5, -5, 10];
// const storedResults = testResults.slice(2);
const storedResults = testResults.concat( [3.99, 2] ); // unlike push(), concat() will add new element/s to the existing array and will also return a brand new array with parameters if added

testResults.push(5.91);

console.log(storedResults, testResults.indexOf(1.5)); // indexof() show desired index of value in array DO NOT WORK FOR OBJECT because objects are refferences(two objects are never same)

const personData = [{name: "Manuel"}, {name: "Max"}];
console.log(personData.indexOf({name: "Manuel"})); // indexOf() will not work on objects

const maxIndex = personData.find((person, idx, persons) => { // find() will search elements in array and when it finds it will immediately stop. will not make a copy of element because we work with same object
    return person.name === "Max";                            // accept up to three arguments
});

const max = personData.findIndex((person, idx, persons) => {
    return person.name === "Max";
});

console.log(maxIndex);
console.log(max);