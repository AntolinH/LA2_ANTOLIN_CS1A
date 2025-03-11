// Declare variables and constant
let a = 25;
let b = 20;
let c = 12;
let d = "15"; // String type
const e = 15;

// Task 2a: Display the sum of a, b, c, and constant e
let sum = a + b + c + e;
console.log("Sum of a, b, c, and e:", sum);

// Task 2b: Compare the values of d and constant e using relational operators
console.log("d > e:", d > e);  // Comparison with string and number
console.log("d < e:", d < e);
console.log("d >= e:", d >= e);
console.log("d <= e:", d <= e);
console.log("d == e:", d == e);  // Loose equality (type conversion)
console.log("d === e:", d === e); // Strict equality (type and value)

// Task 2c: Perform mathematical operations and store results in new variables

// 1. Subtract all the values of declared variables
let subtraction = a - b - c - e;
console.log("Subtraction result:", subtraction);

// 2. Multiply the values of a and c, divided by constant e
let multiplication = (a * c) / e;
console.log("Multiplication result:", multiplication);

// 3. Display the exponent value of constant e raised to the power of c
let exponentiation = e ** c;
console.log("Exponentiation result (e^c):", exponentiation);

// 4. Reassign the value of c to constant e, then display the result
c = e;
console.log("New value of c:", c);