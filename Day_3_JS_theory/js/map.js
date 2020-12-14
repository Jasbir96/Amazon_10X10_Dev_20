let arr = [1, 2, 3, 4, 5];
// transform every element of an array

function squarer(x) {
    return x * x;
}
let sqArr = arr.map(squarer);

console.log(sqArr);
console.log(arr);



