let input = prompt("Enter a number: ");
let num = Number(input);
let result;

if(num % 2 === 0){
    result = "even";
} else{
    result = "odd";
}

console.log("The number " + num + "is " + result);