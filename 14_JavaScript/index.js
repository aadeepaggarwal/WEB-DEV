// let a=10;
var a=10;
console.log(a);

a="Hello"
console.log(a);

a=true;
console.log(a);

let arr=[1,2,3,4,5];
console.log(arr[0])
console.log(arr)

let arr2=[1,2,3, "Hello", true, "Coding"]; // can have heterogenous arrays
arr2[8]=20; // can have empty items

console.log(arr2);

for(let i=0;i<arr.length;i++){ // let or var any
    const element=arr[i];
    console.log(element);
}
// for of loop
for(let data of arr){
    console.log(data);
}



