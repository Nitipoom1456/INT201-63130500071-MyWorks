const bmi = (height, weight) => {
    return weight/[(height/100)*(height/100)];
}

console.log(bmi(178,53));
console.log(bmi(163,62));
console.log(bmi(147,42));