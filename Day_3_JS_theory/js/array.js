// array is a collection of homogeneous datatypes
// array -> anything ,js me possible
// let arr;
// object 
let arr = [
    1,
    1.1,
    "string",
    'styr',
    null,
    [1, 2, 3, 4, 5],
    function hello() {
        console.log("I am fn inside an array");
    },
    { name: "Jasbir" }
];
// similar to other langauges
// console.log(arr[5][2]);
// console.log(arr.length);
// arr[95]="last element";
// console.log(arr);
// console.log(arr.length);
// addLast -> push ,removeLast-> pop
// addFirst-> unshift,removeFirst-> shift
// arr[6]();
// arr[95]="smsabsmdsb";
// // type cohersion
// let a="striasddsng";
// console.log(Number(arr))
// console.log(10<Number(arr))
// for(let i=0;i<arr;i++){
//     console.log("hello");
// }
arr[10] = "hello";
arr["random"] = "random val";
// for (let prop in arr) {
//     // console.log(prop, " : ", obj.prop);
//     console.log(prop, " : ", arr[prop]);
// }
console.log(arr.length);