// const fs = require('fs/promises');
// const path = require('path');

// let filePath = path.join(__dirname, 'todos.json');

// class Todos {
//     // ye function saare todos ko print karwata hai
//     static async getTodos(){
//         let todos= await fs.readFile(filePath);
//         todos=JSON.parse(todos);
//         return todos;
//     }
    
//     static async addTodo(todo) {
//         const { name, description } = todo;
//         // 1. Read the existing todos
//         let todos = await fs.readFile(filePath);
//         todos = JSON.parse(todos);
//         // 2. Add your new todo
//         todos.push({
//             name,
//             description,
//             id: new Date().getTime(),
//             completed: false
//         })
//         // 3. Update all the todos in todos.json
//         await fs.writeFile(filePath, JSON.stringify(todos));
//     }

//     static async deleteTodo(id) {
//         // 1. Read all the existing todos
//         let todos = await fs.readFile(filePath);
//         todos = JSON.parse(todos);
//         // 2. Remove the todo that is equal to
//         // id user want to delete
//         let newTodos = todos.filter(t => {
//             if (t.id === id) return false;
//             return true;
//         })
//         // 3. Write the updated todos inside file
//         await fs.writeFile(filePath, JSON.stringify(newTodos));
//     }

//     static async updateTodo(todo) {
//         console.log(todo)
//         // 1. Read all the todos
//         let todos = await fs.readFile(filePath); // purana data lo pele pura
//         todos = JSON.parse(todos);
//         // 2. Find the index jiske object ka data update hoga 
//         // purane data ke sath naya data likh
//         let i = todos.findIndex(t => t.id == todo.id);
//         // naya dat alikha hua ab write kardo
//         console.log(i)
//         if (i != -1) {
//             todos[i].name = todo.name || todos[i].name
//             todos[i].description = todo.description || todos[i].description// means if jo update karna hai woh nahi hai to purana wala lelo, aur agar hai to updat kardo
//             if(typeof(todo.completed) !== undefined){
//                 todos[i].completed = todo.completed
//             }
//             await fs.writeFile(filePath, JSON.stringify(todos));
//         }
//     }

//     static async increasePriority(id) {
//         // 1. Read all the todos
//         let todos = await fs.readFile(filePath);
//         todos = JSON.parse(todos);

//         // Find the index jiski priority increase krni hai
//         let i = todos.findIndex(t => t.id == id);
//         if (i != -1 && i != 0) {
//             [todos[i], todos[i - 1]] = [todos[i - 1], todos[i]]
//             await fs.writeFile(filePath, JSON.stringify(todos));
//         }
//     }

//     static async decreasePriority(id) {
//         // 1. Read all the todos
//         let todos = await fs.readFile(filePath);
//         todos = JSON.parse(todos);
//         let i = todos.findIndex(t => t.id == id);
//         if (i != -1 && i != (todos.length - 1)) {
//             [todos[i], todos[i + 1]] = [todos[i + 1], todos[i]]
//             await fs.writeFile(filePath, JSON.stringify(todos));
//         }
//     }
// };

// let task = new Todos(); // class ka object banaya hai, agar function name men static laga du directly call kar sakte hain function class name se
// // task.addTodo({ name: 'Cricket', description: "Play for fun" });
// // task.deleteTodo(1775911607717);
// // task.updateTodo({
// //     id: 1775912379693,
// //     completed: false,
// //     description: 'Basketball is fun-1'
// // })
// // task.decreasePriority(1775913427384)
const fs = require('fs/promises');
const path = require('path');

let filePath = path.join(__dirname, 'todos.json');

class Todos {

    static async getTodos() {
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);

        return todos;
    }

    static async addTodo(todo) {
        const { name, description } = todo;
        // 1. Read the existing todos
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);
        // 2. Add your new todo
        todos.push({
            name,
            description,
            id: new Date().getTime(),
            completed: false
        })
        // 3. Update all the todos in todos.json
        await fs.writeFile(filePath, JSON.stringify(todos));
    }

    static async deleteTodo(id) {
        // 1. Read all the existing todos
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);
        // 2. Remove the todo that is equal to
        // id user want to delete
        id = Number(id); // Convert string to num
        let newTodos = todos.filter(t => {
            if (t.id === id) return false;
            return true;
        })
        // 3. Write the updated todos inside file
        await fs.writeFile(filePath, JSON.stringify(newTodos));
    }

    static async updateTodo(todo) {
        console.log(todo)
        // 1. Read all the todos
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);
        // 2. Find the index jiske object ka data update hoga
        let i = todos.findIndex(t => t.id == todo.id);

        if (i != -1) {
            todos[i].name = todo.name || todos[i].name
            todos[i].description = todo.description || todos[i].description
            await fs.writeFile(filePath, JSON.stringify(todos));
        }
    }

    static async increasePriority(id) {
        // 1. Read all the todos
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);

        // Find the index jiski priority increase krni hai
        let i = todos.findIndex(t => t.id == id);
        if (i != -1 && i != 0) {
            [todos[i], todos[i - 1]] = [todos[i - 1], todos[i]]
            await fs.writeFile(filePath, JSON.stringify(todos));
        }
    }

    static async decreasePriority(id) {
        // 1. Read all the todos
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);
        let i = todos.findIndex(t => t.id == id);
        if (i != -1 && i != (todos.length - 1)) {
            [todos[i], todos[i + 1]] = [todos[i + 1], todos[i]]
            await fs.writeFile(filePath, JSON.stringify(todos));
        }
    }
};


module.exports = Todos;