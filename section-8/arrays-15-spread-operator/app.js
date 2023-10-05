// spread operator

const prices = [10.99, 8.59, 3.49, 6.79, 4.49, 3.76];

const nameFragments = ["Stefan", "Schwarz"];

const copiedNameFragments = [...nameFragments]; // creates a new array and copy elements in array but it does not create new objects in array(makes a reference value of copiedNameFragments)

nameFragments.push("Mr"); // insert a new element in nameFragments but not in copied array(copiedNameFragments)

console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices)) // Math.min function takes numbers as an arguments not arrays so we use spread operator to pull all the elements from prices array wich we getg comma seperated list of elements wich happens to be numbers

const persons = [{name: "Max", age: 30}, {name: "Manuel", age: 31}];
 // const copiedPersons = [...persons]; // we are copying all the adresses of persons array wich are stored in memory.(reference value!!)


persons.push({name: "Ana", age: 29});
persons[0].age = 31; //  changes key value of the first element in both arrays(persons and copiedPersons) because the copiedPersons is a copied address memory of the objects in the persons array.

const copiedPersons = persons.map(person => ({ // takes original array then copy it but makes new places in memory thus new array is created.
  name: person.name,
  age: person.age
}) );

console.log(persons, copiedPersons);