let test = [1,8,'james',{name:'man'},9.9];
test.sort();
console.log(test);


let greeting = 'Welcome everyone in family';
function outer(name) {
  //higher order function
  let family = [];
  family.unshift(name);
  //inner is a closure function
  function inner(newMember) {
    console.log(greeting);
    family.unshift(newMember);
    return family;
  }
  return inner; //return inner function
}
const myInner = outer('Umaporn');
console.log(myInner('John'));
console.log(myInner('SuSan'));