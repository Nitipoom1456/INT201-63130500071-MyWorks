// Array.sort() หลักการทำงานของ sort() คือ จะแปลงค่าภายใน Array ให้เป็น String จากนั้นจะทำการเปรียบเทียบค่าโดยใช้ UTF-16 
// ซึ่งจะ Return ออกมาเป็น Array
/*กลุ่ม 9 คนที่ 2 63130500071 นิติภูมิ สุทธไชย sort()*/
//Syntax : sort() (Functionless)
//EX : 1
let arrInteger = [5,1,3,4,6,8];
arrInteger.sort();
console.log(`arrInteger : ${arrInteger}`);
// EX : 2
let arrInt = [5,1,13,34,6,8];
arrInt.sort()
console.log(`arrInt : ${arrInt}`);
/* จะสังเกตได้ว่าลำดับในการเรียงเลขไม่ได้เรียงแบบธรรมชาติ เป็นเพราะว่าในการ sort ครั้งนี้มันไม่ได้มองว่าเป็นตัวเลขแต่มองว่าเป็น String 
  โดยเปรียบเทียบตาม UTF-16 */
// EX : 3
let arrString = ['Jan','Feb','Dec','March','April'];
arrString.sort();
console.log(`arrString : ${arrString}`);
console.log('--------------------------------------')
//Syntax : sort (compareFn) // Compare function
//EX : 1
let sortCompareInt = [5,1,13,34,6,8];
sortCompareInt.sort(function (a,b){
    return a-b;
})
//Arrow Function : sortCompareInt.sort((a,b) => a-b);
console.log(`sortCompareInt : ${sortCompareInt}`);
//EX : 2
let names = ['Mary','Alice','Peter','Bob'];
names.sort(function (a,b){
    if(a < b){
        return -1;
    } else if (a > b){
        return 1;
    }else{
        return 0;
    }
})
console.log(`compareName : ${names}`);
//EX : 3
let player = [ {name:"Jojo", id:40000},
            {name:"banglee", id:69},
            {name:"Meow", id:9},
            {name:"Oreo", id:10},
            {name:"Jojo", id:15000} ];

player.sort(function(a, b) {
    let nameA = a.name.toUpperCase(); // สร้างตัวแปรเพื่อรับค่า Parameter ที่รับมาแปลงให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
    let nameB = b.name.toUpperCase(); // สร้างตัวแปรเพื่อรับค่า Parameter ที่รับมาแปลงให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
    if (nameA < nameB) { return -1;  // ถ้าเปรียบเทียบ UTF-16 แล้ว A < B  A จะขยับไปอยู่ทางขวาของ B
    } if (nameA > nameB) { return 1; // ถ้าเปรียบเทียบ UTF-16 แล้ว A > B  A จะขยับไปอยู่ทางซ้ายของ B
    } return 0; // ถ้า A = B จะอยู่ที่เดิม
});
console.log('player.sort')
console.log(player);
console.log('--------------------------------------')
//Syntax : sort(function compareFn(firstEl, secondEl) { ... })  // Inline Compare function
// EX : 1
let playerObj = [ {name:"Jojo", id:40000},
            {name:"banglee", id:69},
            {name:"Meow", id:9},
            {name:"Oreo", id:10},
            {name:"Jojo", id:15000} ];

//EX : 1
function compareName (a,b){
    let nameA = a.name.toUpperCase(); // สร้างตัวแปรเพื่อรับค่า Parameter ที่รับมาแปลงให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
    let nameB = b.name.toUpperCase(); // สร้างตัวแปรเพื่อรับค่า Parameter ที่รับมาแปลงให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
    if (nameA < nameB) { return -1;  // ถ้าเปรียบเทียบ UTF-16 แล้ว A < B  A จะขยับไปอยู่ทางขวาของ B
    } if (nameA > nameB) { return 1; // ถ้าเปรียบเทียบ UTF-16 แล้ว A > B  A จะขยับไปอยู่ทางซ้ายของ B
    } return 0; // ถ้า A = B จะอยู่ที่เดิม
}
playerObj.sort(compareName);
console.log(playerObj);
// หรือ
// function compareName (a,b){
//     return a.name.localeCompare(b.name);
// }
// playerObj.sort(compareName)
// console.log(playerObj);

//EX : 2
function compareIdAsc (a,b){
    return a.id - b.id;
}
playerObj.sort(compareIdAsc);
console.log(playerObj);
//EX : 3
function compareIdDesc (a,b){
    return b.id - a.id;
}
playerObj.sort(compareIdDesc);
console.log(playerObj)
// playerObj.sort(function compare(a,b){
//     return b.id - a.id;
// })
console.log('---------------------------------------')
//Arrow Function
// Syntax : sort((firstEl, secondEl) => { ... } )
let afInteger = [13,54,21,78,63]
let fruit = [
    {name : 'apple', price : 24, stock : 14},
    {name : 'mango', price : 61, stock : 6},
    {name : 'banana', price : 16, stock : 17},
    {name : 'grape', price : 47, stock : 28}
]

//เรียงลำดับจากน้อยไปมาก
afInteger.sort((a,b) => a-b);
console.log(afInteger);
//เรียงลำดับจากมากไปน้อย
afInteger.sort((a,b) => b-a);
console.log(afInteger);
//เรียงลำดับ Price จากน้อยไปมาก
fruit.sort((a,b) => a.price - b.price);
console.log(fruit);
//เรียงลำดับ Stock จากมากไปน้อย
fruit.sort((a,b) => b.stock - a.stock);
console.log(fruit);
//เรียงลำดับ name ตามตัวอักษร
fruit.sort((a,b) => a.name.localeCompare(b.name));
console.log(fruit);
