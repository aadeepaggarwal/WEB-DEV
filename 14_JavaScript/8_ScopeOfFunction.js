// functional scope of variable
function fun(){
    var a=10;
    console.log(a);
}
fun();
//console.log(a); // gives error because var a is in the scope of the function fun()

//Scope of var

var a2=-10; // hoisted outside function ka scope
function fun2(){
    console.log(a2); // ye undefined dega kyonki LHS hoist ho gaya function ke scope mein tha but value nahi mili thi
    var a2=10;
    console.log(a2); // issey 10 ajayega because yaha value assign hui
}
fun2(); // gives output as undefined then 10 because sirf LHS hoist hua not the value, so value jaha di hai wahin assign hogi