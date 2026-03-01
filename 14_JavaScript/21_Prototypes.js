// function person(){
//     console.log("I am a person")
// }

// function humam(){
//     console.log("I am a Human")
// }

// person.prototype=Object.create(humam.prototype); // make human parent of person

// returns true if we run person.prototype==human.protoype

// Inheritance example

function Teacher(){
    console.log("I am a Teacher")
}
function Student(){
    console.log("I am a Student")
}
function Person(){
    console.log("I am a Person")
}

Teacher.prototype=Object.create(Person.prototype);
Student.prototype=Object.create(Person.prototype);

console.log(Teacher.prototype.__proto__==Person.prototype); // Gives True
console.log(Teacher.prototype.__proto__.__proto__==Object.prototype); // true
console.log(Teacher.prototype.__proto__.__proto__.__proto__==null); // True

// eg. Number(123)  is function
// Number.prototype.constructor gives back 123