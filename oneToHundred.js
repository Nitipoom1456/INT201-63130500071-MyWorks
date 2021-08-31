function randomOneToHundred() {
    return Math.floor(Math.random()*100)+1;
}


function menu() {
    
}

function findSum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
function findMax(nums) {
    let MAX = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>=MAX){
            MAX = nums[i];
        }
    }
    console.log(MAX);
}
findMax([2,4,9])
function findMin(nums) {
    let MIN = 100;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]<=MIN){
            MIN = nums[i]
        }
    }
}