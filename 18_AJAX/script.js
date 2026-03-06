// let url= 'https://jsonplaceholder.typicode.com/todos/' // if site link agalat then error ajayega

/*
Upar wale url ka data lena hai

1. Fetch API: Inbuilt hai browser ka
2. Axios: 3rd party system, need to download it to use it
3. XMLHttpRequest: Used inside all
4. jQuery
*/

// feth is a promise
// we get an array of 200 items 
// ye fetch ka syntax hai jaha 2 then aate hain, pehla extract karne ko dusra koi task perform karne ko
/*
fetch(url)
    .then(res =>{ // res likhte hain because we assume that it returns response
        // we store it inside a variable that we have as named as res, can name it anything
        return res.json();

    })
    .then(data =>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
*/

// let todosList = document.querySelector('.todosList');


// fetch(url)
//     .then((x) => {
//         return x.json();
//     })
//     .then(function (data) {
//         // Show this data on the browser
//         // console.log(data)
//         for (let i = 0; i < data.length; i++) {
//             // console.log(data[i]);
//             const { id, userId, title, completed } = data[i];
//             console.log(id, userId, completed, title);
//             // 1. Create element
//             let li = document.createElement('li');
//             li.innerText = `Title: ${title}, 
//             userId: ${userId},
//             completed: ${completed},
//             title: ${title}`

//             todosList.appendChild(li);
//         }
//     })
//     .catch(err => {
//         return err
//     })


// same using fucntion

let todosList = document.querySelector('.todosList');
let url = 'https://jsonplaceholder.typicode.com/todos/';
function updateTodos(data) {
    // Always empty the content of todosList
    todosList.innerText = '';
    
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        const { id, userId, title, completed } = data[i];
        console.log(id, userId, completed, title);
        // 1. Create element
        let li = document.createElement('li');
        li.innerText = `Title: ${title}, 
            userId: ${userId},
            completed: ${completed},
            title: ${title}`

        todosList.appendChild(li);
    }
}


fetch(url)
    .then((x) => {
        return x.json();
    })
    .then(function (data) {
        // Show this data on the browser
        // console.log(data)
        updateTodos(data);
    })
    .catch(err => {
        return err
    })