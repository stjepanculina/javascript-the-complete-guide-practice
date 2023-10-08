// WeakSet
// usecase: where we have an application where we store for example data, in a set or other arrays, where you eventually will let go of data, then we want to make sure it gets garbage collected.Garbage collector clears a specified data from memory

let person = {name: "Stipe"};

const persons = new WeakSet(); //  makes a WeakSet. We can only store objects and arrays in WeakSet
persons.add(person);


// ... some operations
person = null;

console.log(persons);

// WeakSet allows garbage collection to delete items that are part of the set as long as no other part of your code uses these items