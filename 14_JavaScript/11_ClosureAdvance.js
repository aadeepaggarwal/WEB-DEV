function getFun(){
    let x=10;

    function fun(){
        x++;
        function innerFun(){
            x++;
            console.log(x);
        }
        return innerFun;
    }
    return fun;
}

let newFun=getFun();
// initially getfun gets copied/returned to newfun so uska closure aya x=10
let fun1= newFun(); // yaha se fun1 mein innerfun ayega because that is returned and no new closure is made, but x++ ho agaya tha
// so ab x=11 hai and innerfun fun1 mein hai so fun1 call karne pe innerfun call hoga x++ hoga and 12 13 14 print neeche

fun1();
fun1();
fun1();

let fun2=newFun(); // ab yaha pe innerfun ki copy banegi and x++ 15 ho jayega x
// and on callinf fun2 again innerfun returned tha x++ hpke print honge ab line se saare

fun2();
fun2();
fun2();

fun1();
fun1();