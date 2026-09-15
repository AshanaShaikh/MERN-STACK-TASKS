let principal = 50000;
let rate = 5;
let times = 1;
let years = 3;

let amount = principal * Math.pow((1 + rate / 100 / times), times * years);

let compoundInterest = amount - principal;

console.log("The compound interest after " + years + " years is: " + compoundInterest);