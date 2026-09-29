let numbers = [12, 7, 25, 8, 15, 30, 9];

function findMaximum(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const findSum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const countOdd = function(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
};

console.log("Array:", numbers);
console.log("Maximum number:", findMaximum(numbers));
console.log("Sum of all elements:", findSum(numbers));
console.log("Number of odd numbers:", countOdd(numbers));