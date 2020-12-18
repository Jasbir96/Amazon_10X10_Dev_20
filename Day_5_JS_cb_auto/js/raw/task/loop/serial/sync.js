let fileList = ["../../f1.txt", "../../f2.txt", "../../f3.txt"]
let fs = require("fs");
for (let i = 0; i < fileList.length; i++) {
    let data = fs.readFileSync(fileList[i]);
    console.log("data of file: ", i + 1, data.toString());
}