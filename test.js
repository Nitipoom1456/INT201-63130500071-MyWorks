const readline = require('readline');
const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

readInterface.question('Input String :', String => {
    str = String;
    console.log(str);
    readInterface.close();
});
