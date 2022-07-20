"use strict";

function myPow(x, n = 1) {

    if (x === null) {
        return "Sorry that you do not want to enter the number";
    }
    if (x.trim() === "" || n.trim() === "") {
        return "Sorry, number must be non-empty string";
    }
    if (isNaN(x) || isNaN(n)) {
        return "Sorry, number must be valid number";
    }

    return Math.pow(x, n);
}

let num1 = prompt("Enter the number");
let num2 = prompt("Enter the power of number");


let result = myPow(num1, num2);
alert(result);