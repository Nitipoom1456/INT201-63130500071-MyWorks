//sort() & findIndex()
//sort()
//Functionless
//syntax: sort()
let arr1 = [5, 32, 2, 17, 24, 14, 33];
console.log(arr1.sort());
//output [14, 17, 2, 24, 32, 33, 5]
//จะเรียงจากเลขเริ่มต้นไม่ได้เรียงจากค่าของข้อมูล
let g9 = ['poom','mix','few','cartoon','natasia'];
console.log(g9.sort());
//output ['cartoon', 'few', 'mix', 'natasia', 'poom']
//จะเรียงข้อมูลจากน้อยไปหามากตามตัวอักษร
//Arrow function
//syntax: sort((firstEl, secondEl) => { ... } )
//firstEl = The first element for comparison.
//secondEl = The second element for comparison.
let united = [
    {name:'ronaldo', age:36},
    {name:'rashford', age:23},
    {name:'fernandes', age:27},
    {name:'cavani', age:34},
    {name:'varane', age:28}
];
united.sort((a, b) => {
    let age1 = a.age;
    let age2 = b.age;
    if(age1 > age2){
        return -1;  
    }
    if(age1 < age2){
        return 1; //ถ้าตัวหลังมากกว่าจะ return เป็น 1 เพื่อจะได้ไปอยู่ข้างหลัง
    }
    return 0; //ถ้าค่าเท่ากัน
});
console.log(united);
//โดยปกติ array จะเรียงจากน้อยไปมากแต่เราอยากให้แสดงข้อมูลจากมากไปน้อยจึง retrun สลับกัน

//Compare function
//syntax: sort(compareFn)
function compareNameASC(a, b) {
    let name1 = a.name.toLowerCase(); //ทำให้เป็นพิมพ์เล็กก่อนเอามา compare
    let name2 = b.name.toLowerCase();
    if(name1 > name2){
        return 1; //ถ้าตัวแรกมากกว่าจะ return เป็น 1 เพื่อจะได้ไปอยู่ข้างหลัง
    }
    if(name1 < name2){
        return -1; //ถ้าตัวหลังมากกว่าจะ return เป็น -1 เพื่อจะได้ไปอยู่ข้างหน้า
    }
    return 0; 
} //sort ชื่อจากน้อยไปมาก
united.sort(compareNameASC);
console.log(united);

//Inline compare function
//sort(function compareFn(firstEl, secondEl) { ... })
united.sort(function compareNameDESC(a, b) {
    let name1 = a.name.toLowerCase(); //ทำให้เป็นพิมพ์เล็กก่อนเอามา compare
    let name2 = b.name.toLowerCase();
    if(name1 > name2){ 
        return -1; 
    }
    if(name1 < name2){
        return 1;
    }
    return 0; 
}); //sort ชื่อจากมากไปน้อย
console.log(united);

//findIndex()
//callbackFn
/*A function to execute on each value in the array until the function returns true, 
indicating that the satisfying element was found.*/
//element
//The current element being processed in the array.
//index Optional
//The index of the current element being processed in the array.
//array Optional
//The array findIndex() was called upon.
//thisArg Optional
//Optional object to use as this when executing callbackFn.
// Return value
// The index of the first element in the array that passes the test. Otherwise, -1.
//Arrow function
//syntax1: findIndex((element) => { ... } )
//syntax2: findIndex((element, index) => { ... } )
//syntax3: findIndex((element, index, array) => { ... } )

let fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
let index1 = fruits.findIndex(fruit => fruit === "blueberries"); //หา index ที่มี value เป็น blueberries
console.log(index1);

let ranks = [1, 5, 7, 8, 10, 7];
let index2 = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2 //หา index ที่มีค่าเป็น 7 และ index ต้องมากกว่า 2
);
console.log(index2);

//Callback function
//syntax: findIndex(callbackFn)
//syntax: findIndex(callbackFn, thisArg)

let ages = [3, 10, 18, 20, 21];
console.log(ages.findIndex(isLawfulAge));
function isLawfulAge(age) {
    return age > 18; //จะ return ค่า index ของตัวแรกที่เข้าเงื่อนไข
};

//Inline callback function
//syntax: findIndex(function callbackFn(element) { ... })
//syntax: findIndex(function callbackFn(element, index) { ... })
//syntax: findIndex(function callbackFn(element, index, array){ ... })
//syntax: findIndex(function callbackFn(element, index, array) { ... }, thisArg)
let wantedChar = 'c'; //กำหนดค่าของตัวที่จะหา
let position = ['a','b','c'].findIndex(function findwantedCharIndex(element){
    return element === wantedChar //return ตัวที่ตรงกับ wantedChar
});
//findIndex ก็จะเอาค่าที่ function คืนมาไปหาเป็น index ใน array มาให้เรา
console.log(position);


let str = ['Hello','Hi','Morning'];
let checkStr = (str,index) => {
    str === 'Hi' && index > 1;
}
console.log(str.findIndex(checkStr));

console.log(str.findIndex((str,index) => {
    str === 'Hi' && index > 1
}));
