// map() method
const origObjArray = [{price:10.99}, {price: 3.99}, {price: 7.97}, {price: 3.29}];

const mapedArray = origObjArray.map((prices) => { // callback function iterates trough every element in array 
    return prices.price; // selects property of property name
});
console.log(mapedArray); // we are only left with new array of numbers

// reduce() method

const reduceArray = mapedArray.reduce((prevVal, currVal) => {
    return prevVal + currVal;
},0);

console.log(reduceArray); // shows returned array with a sum of all elements

// method without map()

const shorterMethod = origObjArray.reduce((prevVal, currVal) => {
    return prevVal + currVal.price; // this way we only selects property of an object thus eliminating need of an array
}, 0);

// method with map() and reduce() combined

const combinedMethod = origObjArray.map((prices) => {
    return prices.price;
}).reduce((prevVal, currVal) => {
    return prevVal + currVal;
}, 0);

console.log(combinedMethod);

//make it even shorter tnx to arrow function

const combined = origObjArray.map(prices => prices.price).reduce((prevVal, currVal) => prevVal + currVal);
// We call .reduce() directly on the result of map() (which produces an array, that's why this is possible). 
// Hence we can avoid storing the mapped array in a separate constant or variable that we might not need in any other place.
console.log(combined); 