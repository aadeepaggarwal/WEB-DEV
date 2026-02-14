function CreateAccount(name, college){
    let balance=0;

    function deposit(amt){
        balance+=amt;
    }
    function credit(amt){
        if(balance>=amt){
            balance-=amt;
        }
        else{
            throw new Error("Insufficient Balance");
        }
    }
    function checkbalance(){
        return balance;
    }

    function details(){
        console.log("Name", name);
        console.log("College", college);
        console.log("Balance", balance);
    }

    return { // returnng an abject jisme key ye hai and value function descri[tion automatically]
        credit, // or "Credit":credit,
        deposit,
        checkbalance,
        details
    }
}

let Person1Account= CreateAccount("Person1","DTU"); // ek copy person 1 ke liye banegi
let Person2Account= CreateAccount("Person2","NSUT"); // ek copy alag person 2 ke liye banegi

Person1Account.deposit(1000);
Person1Account.details();

Person2Account.details();
Person2Account.credit(100); // gives error of insufficient balance