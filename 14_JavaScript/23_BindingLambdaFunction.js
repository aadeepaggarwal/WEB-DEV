let person=()=> {
    console.log(this.name);
    console.log(this.age);

}
let s={
    name: 'Person1',
    age: 19
}
let s2={
    name: 'Person2',
    age: 20
}

// Person function is almbda function and created in the main window, so it will take only that that is mentioned inside the window object

person.call(s);
person.call(s2);// get undefined because window mein defined nahi name and age, and labda wala global se lega
// yani window