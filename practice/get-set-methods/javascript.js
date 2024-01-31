class People {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstname){
        this._firstName = newFirstname;
    }
    get firstName() {
        console.log(this._firstName);
    }
}

const people = new People('Spongebob', 'Squarepants', 30);
console.log(people.firstName)
console.log(people.firstName = 'Nogalo')
console.log(people.lastName)
console.log(people.age)
console.log(people.age = 25)

