// Array Destructing - Splitting an Array into variables.
 
const nameData = ["Max", "Schwarz", "Mr", 30, true, "Swell"];
/* const firstName = nameData[0];
   const lastName = nameData[1]; */

const [ firstName, lastName, ...otherInformation ] = nameData; // array destructing stores specified elements from the array in the variables, in this case constants.Order of storing elements is from left to right
                             // ... rest operator used for storing all other data from the array
console.log(firstName, lastName, otherInformation); 