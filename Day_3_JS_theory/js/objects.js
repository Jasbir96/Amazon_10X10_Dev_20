// key :value pair
// string: any Js Type,

let obj = {
    name: "Steve",
    "last Name": "Rogers",
    address: {
        city: "Manhatten",
        state: "New York"
    },
    age: 45,
    friends: ["peter", "bruce"]
};
// console.log(obj);
// console.log(obj.name);
// get 
// console.log(obj.address.city);
// console.log(obj.friends);
// console.log(obj["last Name"]);
// set update -> 
// update
// obj.address = "india";
// // set
// obj.movies = ["civil war", "winter soldier"]
// console.log(Array.isArray(obj.age));
// // console.log(typeof obj.name);
// delete obj.friends;
// console.log(obj);
// for (let key in obj) {
    // console.log(key , " : " , obj[key]);
// }
// .opertor literally match 
console.log(obj.prop);
for (let prop in obj) {
    // console.log(prop, " : ", obj.prop);
    console.log(prop, " : ", obj[prop]);


}