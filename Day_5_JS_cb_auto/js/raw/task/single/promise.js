let fs = require("fs");
let path = require("path");
function freadPromise(fName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fName, function cb(err, data) {
            if (err) {
                reject(err);
                reject();
            } else {
                resolve();
                resolve();
                // console.log("can't be called multiple times");
            }
        });
    });
}
let frP = freadPromise("../f1.txt");
console.log(frP);
// function call
let thenSeAyaProm = frP.then(scb);
console.log("thenseAyapr", thenSeAyaProm);
function scb(data) {
    console.log(data + "");
    console.log("scb called");
    return undefined;
    // return fs.promises.readFile("f1.txt")
}
// thenSeAyaProm
//     .then(function (ans) {
//         console.log("thenkap cb", ans)
//     })

setTimeout(function(){
    console.log("then se aya p",thenSeAyaProm)
},1000)



// setTimeout(function () {
//     console.log(frP);
// }, 1000);