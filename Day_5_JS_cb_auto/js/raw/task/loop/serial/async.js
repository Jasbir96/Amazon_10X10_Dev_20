let fileList = ["../../f1.txt", "../../f2.txt", "../../f3.txt"]
let fs = require("fs");
// serial not working
// for (let i = 0; i < fileList.length;) {
//     let data = fs.readFile(fileList[i], function (err,data) {
//         console.log("data of file: ", i + 1, data.toString());
//         i++;
//     });
// }
// serial working
serialReader(0);
function serialReader(i) {
    if (i == fileList.length) {
        return;
    }
    fs.readFile(fileList[i], function (err, data) {
        console.log("data of file: ", i + 1, data.toString());
        serialReader(i + 1);

    })

}