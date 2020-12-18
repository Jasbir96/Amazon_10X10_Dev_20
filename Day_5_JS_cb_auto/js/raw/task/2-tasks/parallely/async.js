// 2 file read serially with async functions 
let fs = require("fs");
console.log("Before");
console.log("F1 read started");
fs.readFile("../../f1.txt", cb1);
function cb1(err, data) {
    console.log("f1 data:" + data);
}
// console.log("F2 read started");
fs.readFile("../../f2.txt", cb2);
function cb2(err, data) {
    console.log("f2 data:" + data);
}
console.log("after");

