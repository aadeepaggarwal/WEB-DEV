class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class student extends person{ // issey student ka prototype gets connected with person ka prototype
    constructor(name,age,marks){
        super(name,age); // means use upar wala constructor of parent
        this.marks=marks; // new var handled here
    }
}

let s= new student("Name1", 19, 80); // can access using child
console.log(s);
console.log(s.__proto__.__proto__== person.prototype);