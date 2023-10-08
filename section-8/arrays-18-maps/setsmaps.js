// Working with Maps
// usecase:  in below example we want to attach some extra information for each person but we don't want to merge it with existing object because we use this object in multiple places of the application or we copy it but don't want to bloat it with some extra information

const person1 = {name: "Stipe"};
const person2 = {name: "Dane"};

const personData = new Map([[person1, {date: "10.09.2023", price: 10}]]) // creates new Map, map can have any value. In this case person1 is a key, key can be any value you want. we made an object(person1) as a key and attached to it value ({date: "10.09.2023", price:10}). This extra information is not merged into an object. but stored in map
console.log(personData) // will output person1 as a key and {date: "10.09.2023", price: 10} as a value
console.log(personData.get(person1)); // get() method will get data from a map.
console.log(personData.set(person2, [{date: "11.09.2023", price: 11}])); // sets two objects in map as a key and value. key: person2, value: {date: "11.09.2023", price: 11}. map is updated

// output all information from a map methods

//for method

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

// for of loop

for(const key of personData.keys()){ // if we are only interested in keys use keys()
  console.log(key);
}

for(const key of personData.values()){ // if we are only interested in values use values()
  console.log(key);
}

console.log(personData.size); // returns number of elements in the Map or number of key-value-pairs