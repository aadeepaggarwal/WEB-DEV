// objects is a new data type in JavaScript

let obj={
    a:10,
    name: 'Aadeep',
    age:20,
    ' ': "I am a space",
    'First-name': 'Aadeep'
}

console.log(obj);

console.log(obj.a); // accessing one element of obj

// accessing a space element in object
// this wont work: console.log(obj.' ');
console.log(obj[' ']);
console.log(obj['First-name']);

for(let key in obj){
    console.log(key, ": ", obj[key]); // obj[key] gives value
}

// Deep and Shallow copy

let x=obj; // makes a shallow copy
// on changing through x, obj also changes

console.log(obj); //old
console.log(x);
x.a=100;
console.log(obj); //new obj because x changed it as well
console.log(x);

// Deep copy

let y={... obj}; // deep copy by Spread operator

console.log(obj); //old
console.log(y);
y.a=200;
console.log(obj); //new obj because y did not change it 
console.log(y);

// can write console.log('x',x,"obj",obj)

