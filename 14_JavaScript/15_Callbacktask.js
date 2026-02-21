// parallel ko callback use karke sequential karna hai download compress upload
// function download(cb1) {
//     console.log("Download starts")
//     setTimeout(() => {
//         console.log("Download ends")
//         cb1();
//     }, 2000);
// }

// function Compression() {
//     console.log("Compression starts")
//     setTimeout(() => {
//         console.log("Compression ends")
//         Uploading();
//     }, 2000);
// }

// function Uploading() {
//     console.log("Uploading starts")
//     setTimeout(() => {
//         console.log("Uploading ends")
//     }, 2000);
// }

// download(Compression)

//OR

function download(cb) {
    console.log("Download starts")
    setTimeout(() => {
        console.log("Download ends")
        cb(Uploading);
    }, 2000);
}

function Compression(cb) {
    console.log("Compression starts")
    setTimeout(() => {
        console.log("Compression ends")
        cb();
    }, 2000);
}

function Uploading() {
    console.log("Uploading starts")
    setTimeout(() => {
        console.log("Uploading ends")
    }, 2000);
}

download(Compression)


// Callback hell

function download(cb) {
    console.log("Download starts")
    setTimeout(() => {
        console.log("Download ends")
        cb();
    }, 2000);
}

function Compression(cb) {
    console.log("Compression starts")
    setTimeout(() => {
        console.log("Compression ends")
        cb();
    }, 2000);
}

function Uploading(cb) {
    console.log("Uploading starts")
    setTimeout(() => {
        console.log("Uploading ends")
        cb();
    }, 2000);
}
// nested function call->call back hell
download(function(){
    Compression(function(){
        Uploading(function(){
            console.log("All Done");
        })
    })
})