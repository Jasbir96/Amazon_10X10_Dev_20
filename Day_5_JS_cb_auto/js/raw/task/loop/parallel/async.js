let fileList = ["../../f1.txt", "../../f2.txt", "../../f3.txt"]
let fs = require("fs");
// serial not working
for (let i = 0; i < fileList.length; i++) {
     fs.readFile(fileList[i], function (err,data) {
        console.log("data of file: ", i + 1, data.toString());
    });
}