// 1. What will be the console statements? 
let x = 10; 
function test() { 
console.log(x); 
let x = 20; 
} 
test(); 
// Ans: un
//Doubt
//2. What will be the console statements? 
var a = 1; 
function test() { 
console.log(a); 
var a = 2; 
console.log(a); 
} 
test(); 
// Ans: undefined, 2
//3. What will be the console statements? 
var x = 10; 
function outer() { 
console.log(x); 
var x = 20; 
function inner() { 
console.log(x); 
var x = 30; 
console.log(x); 
} 
inner(); 
console.log(x); 
} 
outer(); 
 
// ans: un, un, 30,20     
//4. What will be the console statements? 
var y = 50; 
function first() { 
  console.log(y); 
  var y = 100; 
  function second() { 
    console.log(y); 
    var y = 150; 
    console.log(y); 
  } 
  second(); 
  console.log(y); 
} 
first(); 
console.log(y); 
// ns: 50,100,150,150,150
//5. What will be the console statements? 
var a = 5; 
function outer() { 
  function inner() { 
    console.log(a); 
    var a = 10; 
  } 
  inner(); 
  console.log(a); 
  var a = 15; 
  console.log(a); 
} 
outer(); 
 
//Ans: un, un, 10, 15

 
// 6. What will be the console statements? 
var val = 7; 
function fun1() { 
  console.log(val); 
  function fun2() { 
    var val = 14; 
    console.log(val); 
    function fun3() { 
      console.log(val); 
    } 
    fun3(); 
  } 
  var val = 21; 
  fun2(); 
  console.log(val); 
} 
fun1(); 
 // Ans: 7,7,7,21
// 7. What will be the console statements? 
var global = 1; 
function outer() { 
  var global = 2; 
  function inner1() { 
    console.log(global); 
    var global = 3; 
    console.log(global); 
  } 
  function inner2() { 
    console.log(global); 
  } 
  inner1(); 
  inner2(); 
  console.log(global); 
} 
outer();
// Ans 2,3,3,3