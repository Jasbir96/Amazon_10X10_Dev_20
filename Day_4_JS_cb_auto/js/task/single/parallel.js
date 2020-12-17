console.log("Line number 10", "File read started");
fs.readFile("f1.txt", cb);
function cb(err, data) {
    console.log("data: " + data);
    console.log("File read complete");
}
console.log("Line number 17", "file read is still been done");
console.log("Line number 18", "I can do other activities");