"use strict";
// Task # 1 Create a function that takes an array as a parameter. Use while loop calculate and return sum of all number in the array
let num = [40, 50, 20, 50, 60, 80];
const sumAll = (value) => {
    let sum = 0;
    let i = 0;
    while (i < value.length) {
        sum += value[i];
        i++;
    }
    return sum;
};
let sumNum = sumAll(num);
console.log(sumNum);
// Task # 2 create a function that take a positive integer as a parameter and use a while loop to calculate and return the factorial of that number
let factNum = 15;
const findFact = (num) => {
    if (num > 0) {
        let factSum = 1;
        let j = 1;
        while (j <= num) {
            factSum *= j;
            j++;
        }
        return factSum;
    }
    else {
        throw new Error("Please enter a Positive");
    }
};
let factResult = findFact(factNum);
console.log(factResult);
