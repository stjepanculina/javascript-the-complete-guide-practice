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

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
// hobbies[5] = 'Reading'; // rarely used
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, "Reading"); // insert element between two arrays. 1  index number to insert element, 0  how many elements to delete.
console.log(hobbies);

// hobbies.splice(0, 1); // removes first element (0 is index number, 1 is delete count)
const removedElements = hobbies.splice(-2, 1); // we can store removed element too
console.log(removedElements);
console.log(hobbies);