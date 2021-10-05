let arr1 = [0,2,4,6];
let arr2 = [0,2,4,6];


console.log(arr1 === arr2);
arr2 = arr1;
arr2[1] = 5;
console.log(arr1[1]);
console.log(arr1);
console.log(arr2);

function doSomething(value){
    myValue = value;
    myValue.name="unknown";

}


let item1= {name: 'ABC'};
doSomething(item1);
console.log(item1.name);

function doSomething2(value) {
    value = 100;
}
let isNum = true;
doSomething2(isNum);
console.log(isNum);



let arr1 = []; //array

let obj = {}; //object

console.log(typeof arr1);

console.log(arr1.length);

arr1 = [10, true, 1, 'unknown', ['A', 'B', 'C'], { id: 1, name: 'Adam' }]; //array is untyped

console.log(arr1[arr1.length - 1]);

console.log(arr1[arr1[2]]); // [integer expression]


console.log(arr1[4][2]);
console.log(arr1[5].name);

let arr3 = ['hello'];
let arr4 = [...arr3];
console.log(arr4);
