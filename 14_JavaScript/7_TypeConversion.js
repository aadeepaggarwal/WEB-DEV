console.log("5==5",5==5);
console.log("'5'==5",'5'==5); // Bada datatype gets converted into smaller one isilye true kehdia
console.log("'5'===5",'5'===5);

let x=10;
let y=10;

console.log("x==y", x==y)// gives true, only comapres data type and value

// Both arrays are converted on two different location/ memory but same value so comparison gives false
// but if shallow copy wala compare karenge to true ayega
//1 False case
let arr=[1,2,3,4];
let arr2=[1,2,3,4];
let arr3=arr;
console.log("arr==arr2", arr==arr2);
//True case: ARRAY MEIN ADDRESS COMPARE HOTA HAI
console.log("arr3==arr", arr3==arr);

console.log("0==[]", 0==[]);// gives tryue kyonki bada wala converts into smaller data type
console.log("+[]", +[]);// convert array into number data type

console.log("0=={}", 0=={});// gives false kyonki object hai
console.log("+{}", +{});// convert obj into number data type-> + ke trhough we can convert things to a number

console.log("\\t==0", 0=='\t'); // added / to tell that print it as string not escape sequence
console.log("\\n==0", 0=='\n'); // escape seq data type and number so data type conversion takes place that is why true
console.log("\\n==\\t", '\t'=='\n'); // false because dono same data dtype hai to type conversion nahi hoga and value alag so false ajayega

// but we cannot convert an array into number so we get NaN

console.log("+[1,2]",+[1,2]); //NaN: thus use strict equality 
console.log("+[[]]",+[[]]); // 0 ajayega convert hoke
console.log("+[[],[]]",+[[],[]]); // NaN Line 32 ki tarag andar wala array 0 ban jayega bahar wala nahi hoga convert so NaN