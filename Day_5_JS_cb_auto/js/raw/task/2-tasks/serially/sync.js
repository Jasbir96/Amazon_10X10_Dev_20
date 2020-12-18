let fs = require("fs");
console.log("Before");
console.log("F1 read started");
let data = fs.readFileSync("../../f1.txt")
console.log("F1 data", data.toString())
console.log("F2 read started");
data = fs.readFileSync("../../f2.txt");
console.log("F2 data", data.toString())
console.log("after");