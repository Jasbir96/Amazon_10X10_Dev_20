// object -> 
// function defintion, function call
// call
// address pass

function fn(param) {
    // param();
    // console.log("current param is ", param());
    fn.invokCount++;
}
//
// variables -> parameter pass  
// fn("abc");
// fn(true);
// fn([1, 2, 3, 4, 5]);
// fn(hello);
// // functions -> variables
// function hello() {
//     console.log("I am inner fn");
//     // return  10;
// }
fn.invokCount = 0;
fn();
console.log(fn.invokCount);
