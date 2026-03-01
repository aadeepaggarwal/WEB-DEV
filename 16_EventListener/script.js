let btn= document.getElementById('btn')

// btn.onclick= function(){
//     console.log("Clicked")
// }
//  // if writeen again then overrides it
// btn.onclick= function(){
//     console.log("i was Clicked")
// }

// using add event listener
btn.addEventListener('click', ()=>{
    console.log("Clicked")
})
// not overridden 
btn.addEventListener('click', ()=>{
    console.log("I am Clicked")
})

// directly adding ebent listener without variables

document.querySelector('#mydiv')
    .addEventListener('mouseenter',()=>{
        console.log("Mouse Entered MyDiv")
    })
// keypress: pressed, keydown: jab key chhodi, keyup: when key is being pressed
document.querySelector('body')
    .addEventListener('keypress',(ev)=>{
        // jo bhi event hoga uski info ev variable mein ayegi
        console.log(ev.key)
        console.log(ev) // gives full event details
    })
