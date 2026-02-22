// Promisifying these functions
// function Download(url, cb) {
//     console.log("Download starts")
//     setTimeout(() => {
//         console.log("Download ends")
//         let movie = url.split('/').pop();
//         cb(movie);
//     }, 2000);
// }

// function Compression(movie, cb) {
//     console.log("Compression starts")
//     setTimeout(() => {
//         console.log("Compression ends")
//         let compressedMovie = movie.split('.')[0] + '.zip';
//         cb(compressedMovie);
//     }, 2000);
// }

// function Uploading(compressedMovie, cb) {
//     console.log("Uploading starts")
//     setTimeout(() => {
//         console.log("Uploading ends")
//         let newUrl = 'http://codingblocks.com/newMovies/'+compressedMovie
//         cb(newUrl)
//     }, 2000);
// }

function Download(url) {
    return new Promise(function (res, rej) {
        if (url.split('.').pop() != 'mp4') return rej("Invalid movie format to download");

        console.log("Download starts")
        setTimeout(() => {
            console.log("Download ends")
            let movie = url.split('/').pop();
            res(movie);
        }, 2000);
    });
}

function Compression(movie) {
    return new Promise((resolve, reject) => {
        if (movie.split('.').pop() != 'mp4') return reject("Invalid movie format to compress the movie, please use mp4");
        console.log("Compression starts")
        setTimeout(() => {
            console.log("Compression ends")
            let compressedMovie = movie.split('.')[0] + '.zip';
            resolve(compressedMovie);
        }, 2000);
    })
}

function Uploading(compressedMovie) {
    return new Promise((res, rej) => {
        console.log("Uploading starts")
        setTimeout(() => {
            console.log("Uploading ends")
            let newUrl = 'http://codingblocks.com/newMovies/' + compressedMovie
            res(newUrl)
        }, 2000);
    })

}

let url = 'http://codingblocks.com/movies/datastructures.mp4'

Download(url)
    .then(movie => {
        console.log(movie)
        return Compression(movie) // this is also returned as a promise
    })
    .then(compressedMovie => {
        console.log(compressedMovie)
    })
// Shorter Way
Download(url)
    .then(Compression)
    .then(Uploading)
    .then(newUrl => {
        console.log(newUrl)
    })
    .catch(err => {
        console.log(err)
    })


/* Longer Way- same as callback hell
Download(url)
    .then(movie => {
        console.log(movie)
        Compression(movie)
            .then(compressedMovie => {
                console.log(compressedMovie);
                Uploading(compressedMovie)
                    .then(newUrl => {
                        console.log(newUrl)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    })
    .catch(err => {
        console.log(err)
    })
*/

/*
let p = new Promise(function (res, rej) {
    res("Hi");
})

    p.then(msg => {
        console.log(msg)
        return "How are you?"
    })
    .then(msg => {
        console.log(msg)
    })
ALL HAVE SAME MEANING, bracket lagao ya nahi
p.then((msg) => {
    console.log(msg)
})

p.then(function (msg) {
    console.log(msg)
})

p.then(function solve(msg) {
    console.log(msg)
})
*/

