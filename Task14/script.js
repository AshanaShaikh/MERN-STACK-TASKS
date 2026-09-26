let number = Number(prompt("Enter a number:"));

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log("Sum of first " + number + " numbers: " + sum);


console.log("Table of " + number + ":");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


let isPrime = true;

if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}


console.log("Factors of " + number + ":");

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}


let digitSum = 0;
let tempNumber = number;

while (tempNumber > 0) {
    let digit = tempNumber % 10;
    digitSum += digit;
    tempNumber = Math.floor(tempNumber / 10);
}

console.log("Sum of digits: " + digitSum);


let armstrongSum = 0;
let armstrongNumber = number;

while (armstrongNumber > 0) {
    let digit = armstrongNumber % 10;
    armstrongSum += digit ** 3;
    armstrongNumber = Math.floor(armstrongNumber / 10);
}

if (armstrongSum === number) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}