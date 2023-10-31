let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};

person.age = 29; // modifying an object values

person.isAdmin = true; // adding an object values

// person.greet = undefined  sets an object value to undefined but does not delete it

// person.greet = null same as undefined but sets it to null instead

delete person.greet; // deletes an object value and key value

console.log(person);