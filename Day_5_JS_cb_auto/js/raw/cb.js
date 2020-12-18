// synchronous
let fs = require("fs");
// file size 
// console.log("File read start");
// let binContent = fs.readFileSync("f1.txt");
// console.log(binContent);
// console.log("now i  can do something")
// // console.log(binContent + "");

console.log("Line number 10","File read started");
fs.readFile("f1.txt", cb);
function cb(err, data) {
    console.log("data: " + data);
    console.log("File read complete");
}
console.log("Line number 17","file read is still been done");
console.log("Line number 18","I can do other activities");