// delete key age using spread operator
let obj={
    a:10,
    'name': 'Aadeep',
    age:20,
    ' ': "I am a space",
    'First-name': 'Aadeep'
}

// Delete using delete operator
console.log(obj)
delete obj.age
console.log(obj)

// access using const

const{a,name}=obj; // means a and name 'a' and 'name' mein agayi can directly access it now instea dof dot operator

// const{name,...obj2}=obj; // copy 