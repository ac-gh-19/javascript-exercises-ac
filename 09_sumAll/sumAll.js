const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !(Number.isInteger(num1)) || !(Number.isInteger(num2))) return "ERROR";
    let sum = 0;
    let greater, smaller;
    if (num1 > num2) {
        greater = num1;
        smaller = num2;
    } else {
        greater = num2;
        smaller = num1;
    }
    while (smaller <= greater) {
        sum += smaller;
        smaller++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
