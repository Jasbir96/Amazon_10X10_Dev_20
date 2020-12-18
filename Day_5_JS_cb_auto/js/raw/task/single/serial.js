// synchronous
let fs = require("fs");
// file size 
// console.log("File read start");
let binContent = fs.readFileSync("f1.txt");
console.log(binContent);
// console.log("now i  can do something")
// // console.log(binContent + "");
