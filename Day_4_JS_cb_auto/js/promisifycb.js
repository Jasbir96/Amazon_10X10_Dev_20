let fs=require("fs");
function freadPromise(fName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fName, function cb(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
let frP = freadPromise("f11.txt");
frP.then(function (data) {
    console.log(data+"")
}).catch(function (err) {
    console.log("err", err);
})
