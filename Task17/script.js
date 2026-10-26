
const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject(new Error("Division by zero is not allowed."));
        } else {
            resolve(num1 / num2);
        }
    });
};

const testCases = [
    [10, 2],
    [20, 4],
    [15, 3],
    [7, 2],
    [10, 0]
];

testCases.forEach(([num1, num2]) => {
    console.log(`Dividing ${num1} by ${num2}...`);

    divide(num1, num2)
        .then(result => {
            console.log("Result:", result);
        })
        .catch(error => {
            console.log("Error:", error.message);
        });
});
