
m1.innerText = "Hello World"
// m1.innerHTML = '<h1>Hulk</h1>'
m1.innerText = '<h1>Hulk</h1>'
m1.innerText = '<h1>Hulk</h1>'

// Changing CSS
let m4 = document.querySelector('#movie-4');
// m4.style.color = 'blue'; // This will add inline css

// Adding a class
m4.classList.add('newmovie')
// Removing a class
m4.classList.remove('movie');

setInterval(() => {
    // m4 par newmovie nhi h toh add kardo, else newmovie added h toh hatado
    m4.classList.toggle('newmovie');
}, 100);
