class Person {
    constructor(id = 'Invalid',name = 'Unknown'){
        this._name = name;
        this._id = id;
    }
    get id (){
        return this._id;
    }
    get name (){
        console.log('This is getter of name');
        return this._name;
    }
    set name (name){
        console.log('This is setter of name');
        if(name === 'Unknown'||name === ''){
            this._name = 'Unknown';
        }else {
            this._name = name;
        }
    }
    displayName(){
        return `${this._name}`;
    }
    getNameLenght(){
        return this._name.lenght;
    }
}


let poom = new Person('001','Poom');
console.log(poom.name);
poom.name = 'man';
// console.log(poom.name);
// let jane = new Person('002');
// console.log(jane.name);