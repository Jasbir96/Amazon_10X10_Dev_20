let fs = require("fs");
// async function return promise-> reject ,resolve
console.log("Before");
let frP = fs.promises.readFile("f1.txt");
// console.log(frP);
// resolve 
frP
.then(function (data) {
        console.log(data + "");
        console.log("f2 read started");
        return fs.promises.readFile("f2.txt");
    })
    .then(function (data) {
        console.log("f2 data " + data);
    })
    .catch(function (err) {
        console.log(err);
    })
console.log("After");