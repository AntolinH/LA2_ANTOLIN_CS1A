// Initialize variables and constant
let a = 25, b = 20, c = 12, d = "15";
const e = 15;

// Convert d to number for calculations
let dNum = Number(d);

// Task a: Display the sum of all variables and constant
let sum = a + b + c + dNum + e;
console.log("Sum of all values:", sum);

// Task b: Compare d and e using relational operators
console.log("d > e:", dNum > e);
console.log("d < e:", dNum < e);
console.log("d >= e:", dNum >= e);
console.log("d <= e:", dNum <= e);
console.log("d === e:", dNum === e); // Strict comparison (checks both value and type)

// Task c: Perform calculations
let subtraction = a - b - c - dNum - e;
let multiplicationDivision = (a * c) / e;
let exponentiation = Math.pow(e, c); // e^c

// Storing exponentiation result in a new variable (since e is a constant)
let newE = exponentiation;

// Display results
console.log("Subtraction result:", subtraction);
console.log("Multiplication and Division result:", multiplicationDivision);
console.log("Exponentiation result (e^c):", exponentiation);
console.log("Reassigned exponentiation result to new variable:", newE);