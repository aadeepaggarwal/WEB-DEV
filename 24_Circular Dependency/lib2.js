let lib1 = require('./lib1');
console.log("Inside lib2");
function sub(a, b) {
    return a - b;
}
module.exports.sub = sub; // call be reference because we can do this . thing and call one function by another
module.exports.lib1 = lib1;