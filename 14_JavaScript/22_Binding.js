// IMPLICIT BINDING
let newstudent= {
    Name: 'Person1',
    Age: 19,
    City: 'Delhi',
    printDetails: function(){
        console.log("Name ", this.Name)
        console.log("Name ", this.Age)
        console.log("Name ", this.City)
        this.Country="Pakistan" // can even create it like this
    }
}

newstudent.printDetails();

// EXPLICIT BINDING
/*
Three Functions are there for explicit binding
1. CALL
2. APPLY
3. BIND

*/
function PrintStudent(country){
    console.log("Name", this.Name)
    console.log("Name", this.Age)
    console.log("Name", this.City)
    console.log(country)
}

function PrintStudent2(country,language){
    console.log("Name", this.Name)
    console.log("Age", this.Age)
    console.log("City", this.City)
    console.log(country)
    console.log(language)
}
let newstudent1= {
    Name: 'Person1',
    Age: 19,
    City: 'Delhi',
    
}
let newstudent2= {
    Name: 'Person2',
    Age: 20,
    City: 'Delhi',
    
}
// ab this fucntion using call tells ki kisko call karna hai
//              CALL
PrintStudent.call(newstudent1,"India");
PrintStudent.call(newstudent2,"USA"); // call mein directly pass the argument wali country like this

//      APPLY: Gove data as an array instead of direct arguments

PrintStudent2.call(newstudent1,["India","JAVA"]); // need to pass the arguments as an array

//      BIND
// can bind first then call function alag se
// CALL and APPLY mein immidiately call hota hai function bind mein nahi hota
let fun=PrintStudent2.bind(newstudent1);
fun("India","Java"); // called later binded earlier

// OR second way

let fun2=PrintStudent2.bind(newstudent2,"USA","Java");
fun2(); // called later only, but already given already

//      NEW KEYWORD: below this wala function acts as a constructor function when we use new keyword
function Person(name,age){
    this.name=name;
    this.age=age;
}

let Person1= new Person("Person1",19);
console.log(Person1)