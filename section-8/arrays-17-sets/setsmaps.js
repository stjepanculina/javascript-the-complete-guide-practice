// working with Sets
// sets are data structures wich help you manage unique values.

const ids = new Set([1, 2, 3]) // makes a new Set. Data types in Set can be arrays, another Set, node list etc...
ids.add(2); // should add a new element 2 but there is already same element in set so it gets ignored  In set every element is unique
console.log(ids); // shows a existing value number 2 and doesn't show a new value number 2. In set every element is unique


// iterating through set with a method entries()

const newIds = new Set(["Hi", "from", "set!"]);
 newIds.add(2);
  for (const entry of newIds.entries()) { // entries() returns an iterable of [v,v] pairs of every value in set
    console.log(entry);
  };


// deleting elment from the set

const id = new Set(["Hi", "There", "Fella"]);

/* const deleteResult = deletFromSet(id);
console.log(deleteResult);
console.log(id);
 */

if(id.has("Hi")) { // checks whether id set has element "Hi", if yes execute id.delete("Hi")
    id.delete("Hi")
};

console.log(id);