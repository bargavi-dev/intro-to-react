function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function (other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

Person.prototype.info = function () {
    console.log('Hello my name is' + " " + this.name + ". " + 'My email is' + " " + this.email + ". " + 'My phone number is' + " " + this.phone + '.');
}

const Neighbors = [
    new Person('Sonny', 'sonny@hotmail.com', '483-485-4948'),
    new Person('Jordan', 'jordan@aol.com', '495-586-3456')
]



// Neighbors[0].greet(Neighbors[1])
// Neighbors[1].greet(Neighbors[0])

// Neighbors.forEach((person) => {
//     person.info();
// })


// console.log(Neighbors[0]['email'], Neighbors[0]['phone'])

// console.log(Neighbors[1]['email'], Neighbors[1]['phone'])

