const readline = require('readline');
const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

readInterface.question("Question 1 : 1+1=?\n
    ", number => {
    ans = parseInt(number);
    console.log();
    readInterface.close();
});

function check(params) {
    
}

