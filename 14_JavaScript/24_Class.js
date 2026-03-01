class person{
    #marks;
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.#marks=marks;
    }
    printDetails(){
      console.log("Name: ", this.name);
      console.log("Age: ", this.age);
      console.log("Marks: ", this.#marks);
    }
    // getter and setter are functions but they behave like properties
    get marks(){
        return this.#marks;
    }
    set marks(m){
        this.#marks=m;
    }// accessed not like functions but rather properties eg. p,marks=70
}
// // same using normal way
// function person2(name,age){
//     this.name=name;
//     this.age=age;
// }

// // to make sub function in fucntion way
// person2.prototype.printDetails= function(){
//     console.log("Name: ", this.name);
//     console.log("Age: ", this.age);
// }

console.log(typeof(person)) // gives function because person is a function with its prototype
// let p= new person2("Name_1",19)
let p= new person("Name",19,80)
console.log("Name: ", p.name); // accessible outside the class
// console.log("Marks: ", p.marks); // error not accessible private data member
// console.log(p)
console.log("Outside function", p.marks); // getter ka use hua hai yaha
p.marks = 70; // setter use hua hai yaha
p.printDetails()
