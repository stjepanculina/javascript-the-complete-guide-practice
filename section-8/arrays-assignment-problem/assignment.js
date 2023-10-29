// 1.assignment  a; Filter the numbers greater than 5

someArray = [2, 4, 1, 6, 7, 5, 9.6, 4, 3];

const filterArray = someArray.filter((someArray, number) => {
    number = someArray > 5;
    return number;
} );

console.log(filterArray);

// b; Map every number to an object wich holds the number on some property(e.g.: num)

const mapObject = someArray.map((nums ) => {
    const mappedObject = {num: nums};
    return mappedObject;
});

console.log(mapObject);

// c; reduce the array to a single number (multiplication of all numbers)

const multiMapObject = someArray.reduce((prevValue, curValue) => {
    return prevValue + curValue
}, 0);
console.log(multiMapObject);

// 2. assignment; Write a function ("findMax") which executes some logic that finds the largest number in a list of arguments. Pass the array from task 1 split up into multiple arguments to that function.

const findMax = (someArray) => {
    const largestNumber = Math.max(...someArray);
    return largestNumber;
};
console.log(findMax(someArray));

// 3. Tweak the "findMax" function such that it finds both the minimum and maximum and returns those as an array. Then use destructuring when calling the function to store the two results in separate constants.

const findMax2 = (someArray) => {
     let minMax = [];
    const maxNum = Math.max(...someArray);
    const minNum = Math.min(...someArray);
     minMax.push(maxNum,minNum);
}

